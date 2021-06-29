import { getPhotosSections } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Button, SectionTitle, ScrollToTop, Gallery } from '../components';
import { PhotoProps } from 'react-photo-gallery';
import {
  Wrapper,
  Anchor,
  SectionButtonsContainer,
} from '../styles/root-level-pages-styles/photography.style';
import { useCallback, useRef, useState } from 'react';
import { useScrollFromLinkToAnchor } from '../hooks/use-scroll-from-link-to-anchor';

interface Props {
  photoSections: { name: string; photos: PhotoProps[] }[];
}

const PAGE_Y_OFFSET = 60;
const EXTERNAL_PAGE_Y_OFFSET = -200;

export const getStaticProps: GetStaticProps = async () => {
  return { props: { photoSections: await getPhotosSections() } };
};

const Photography: React.FC<Props> = ({ photoSections }) => {
  const wrapperRef = useRef<HTMLDivElement | null>();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  useScrollFromLinkToAnchor(wrapperRef, EXTERNAL_PAGE_Y_OFFSET);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const allPhotos = photoSections.map(s => s.photos.map(p => p)).flat();
  return (
    <Layout title='Yordan Ivanov - Photography'>
      <SectionButtonsContainer>
        {photoSections.map(e => (
          <Anchor
            key={e.name}
            offset={PAGE_Y_OFFSET}
            href={`#${e.name.toLowerCase()}`}
          >
            <Button style={{ padding: '8px 16px', margin: '16px' }}>
              {e.name}
            </Button>
          </Anchor>
        ))}
      </SectionButtonsContainer>
      {photoSections.map(({ name, photos }) => (
        <Wrapper ref={wrapperRef} key={name}>
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
              currentIndex={currentImage}
              views={allPhotos.map(x => {
                return {
                  ...x,
                  // TODO: make this ok few resolutions
                  // check portrait or landspace and get the bigger side to up 1500px
                  source: x.src + '?w=1400&q=90&fm=jpg',
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
