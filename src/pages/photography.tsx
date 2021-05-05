import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { IImageSectionFields } from '../../@types/generated/contentful';
import { appendHTTPS } from '../utils/helpers';

interface Props {
  photoSections: IImageSectionFields[];
}

export const getStaticProps: GetStaticProps = async () => {
  const photoSections = await getAllEntriesByContentType('imageSection');
  return {
    props: { photoSections },
  };
};

const Photography: React.FC<Props> = ({ photoSections }) => (
  <Layout>
    <h1>Photos</h1>
    <div>
      {photoSections.map(photoSections => {
        return (
          <div key={photoSections.name}>
            <h4>{photoSections.name}</h4>
            {photoSections.photos.map(photo => {
              const { url } = photo.fields.file;
              return (
                <Image
                  width='400px'
                  height='400px'
                  key={url}
                  src={appendHTTPS(url)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  </Layout>
);

export default Photography;
