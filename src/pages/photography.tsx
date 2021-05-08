import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { IImageSectionFields } from '../../@types/generated/contentful';
import { appendHTTPS } from '../utils/helpers';
import { PageTitle } from '../components';

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
    <div>
      {photoSections.map(photoSections => {
        return (
          <div key={photoSections.name}>
            <PageTitle>{photoSections.name}</PageTitle>
            {photoSections.photos.map(photo => {
              const { url, fileName } = photo.fields.file;
              return (
                <Image
                  width='400px'
                  height='400px'
                  key={url}
                  alt={fileName}
                  priority={true}
                  src={appendHTTPS(url + '?w=400&h=400')}
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
