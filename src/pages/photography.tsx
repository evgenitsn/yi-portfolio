import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { IImageSectionFields } from '../../@types/generated/contentful';
import { appendHTTPS } from '../utils/helpers';
import { Button, SectionTitle, ScrollToTop } from '../components';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Gallery, { PhotoProps } from 'react-photo-gallery';

interface Props {
  photoSections: IImageSectionFields[];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Anchor = styled(AnchorLink)`
  text-decoration: none;
  color: currentColor;
`;

// TODO: extract and simplify and raname
const getPhotos = (photoSection: IImageSectionFields) => {
  return (
    photoSection.photos
      // removes the draft photos from section
      .filter(e => 'fields' in e)
      .map(photo => {
        const { url, details, fileName } = photo.fields.file;
        return {
          width: details.image.width,
          height: details.image.height,
          alt: fileName,
          key: String(details.size),
          src: appendHTTPS(url + '?w=1000&q=95&fm=jpg'),
        } as PhotoProps;
      })
  );
};

// TODO: test options / extract
const columns = containerWidth => {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
};

export const getStaticProps: GetStaticProps = async () => {
  const photoSections = await getAllEntriesByContentType('imageSection');
  return {
    props: { photoSections },
  };
};

const Photography: React.FC<Props> = ({ photoSections }) => {
  return (
    <Layout title='Photography'>
      <div>
        {photoSections.map(e => (
          <Button
            style={{
              padding: '8px 16px',
              margin: '16px 24px ',
            }}
            key={e.name}
          >
            <Anchor offset='60' href={`#${e.name.toLowerCase()}`}>
              {e.name}
            </Anchor>
          </Button>
        ))}
      </div>
      {photoSections.map(photoSection => {
        return (
          <Wrapper key={photoSection.name}>
            <SectionTitle id={photoSection.name.toLowerCase()}>
              {photoSection.name}
            </SectionTitle>
            <Gallery
              // TODO: only rows tweak
              // limitNodeSearch={3}
              // TODO: only rows tweak
              // targetRowHeight={200}
              margin={4}
              // TODO: only column tweak
              columns={columns}
              // TODO: row or column
              direction={'column'}
              photos={getPhotos(photoSection)}
              // TODO: add photoRenderer
            />
          </Wrapper>
        );
      })}
      <ScrollToTop />
    </Layout>
  );
};

export default Photography;
