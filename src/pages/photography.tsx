import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { IImageSectionFields } from '../../@types/generated/contentful';
import { appendHTTPS } from '../utils/helpers';
import { PageTitle } from '../components';
import styled from 'styled-components';

interface Props {
  photoSections: IImageSectionFields[];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const getStaticProps: GetStaticProps = async () => {
  const photoSections = await getAllEntriesByContentType('imageSection');
  return {
    props: { photoSections },
  };
};

const Photography: React.FC<Props> = ({ photoSections }) => (
  <Layout>
    {photoSections.map(photoSections => {
      return (
        <Wrapper key={photoSections.name}>
          <PageTitle>{photoSections.name}</PageTitle>
          {photoSections.photos.map(photo => {
            const { url, fileName } = photo.fields.file;
            return (
              <Image
                key={url}
                width='800px'
                height='600px'
                objectFit='cover'
                alt={fileName}
                priority={true}
                src={appendHTTPS(url + '?w=800&q=90&fm=jpg')}
              />
            );
          })}
        </Wrapper>
      );
    })}
  </Layout>
);

export default Photography;
