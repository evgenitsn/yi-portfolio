import { getPhotosSections } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { Button, SectionTitle, ScrollToTop, Gallery } from '../components';
import { PhotoProps } from 'react-photo-gallery';
import {
  Wrapper,
  Anchor,
} from '../styles/root-level-pages-styles/photography.style';

interface Props {
  photoSections: { name: string; photos: PhotoProps[] }[];
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { photoSections: await getPhotosSections() } };
};

const Photography: React.FC<Props> = ({ photoSections }) => {
  return (
    <Layout title='Photography'>
      <div>
        {photoSections.map(e => (
          <Button
            style={{ padding: '8px 16px', margin: '16px 24px ' }}
            key={e.name}
          >
            <Anchor offset='60' href={`#${e.name.toLowerCase()}`}>
              {e.name}
            </Anchor>
          </Button>
        ))}
      </div>
      {photoSections.map(({ name, photos }) => (
        <Wrapper key={name}>
          <SectionTitle id={name.toLowerCase()}>{name}</SectionTitle>
          <Gallery photos={photos} />
        </Wrapper>
      ))}
      <ScrollToTop />
    </Layout>
  );
};

export default Photography;
