import { getPhotosSections } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Button, SectionTitle, ScrollToTop, Gallery } from '../components';
import { PhotoProps } from 'react-photo-gallery';
import {
  Wrapper,
  Anchor,
} from '../styles/root-level-pages-styles/photography.style';
import { useCallback, useState } from 'react';

interface Props {
  photoSections: { name: string; photos: PhotoProps[] }[];
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { photoSections: await getPhotosSections() } };
};

const Photography: React.FC<Props> = ({ photoSections }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // TODO: Check this
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const allPhotos = photoSections.map(s => s.photos.map(p => p)).flat();
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
          <Gallery photos={photos} onPhotoClick={openLightbox} />
        </Wrapper>
      ))}
      <ScrollToTop />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              // TODO: play with props
              // TODO: apply styling
              // TODO: Fullscreen disable
              currentIndex={currentImage}
              views={allPhotos.map(x => {
                return {
                  ...x,
                  // TODO: make this ok few resolutions
                  // check portrait or landspace and get the bigger side to up 1500px
                  source: x.src + '?w=1500&q=90&fm=jpg',
                };
              })}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Layout>
  );
};

export default Photography;
