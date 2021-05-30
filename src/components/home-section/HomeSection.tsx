import { SectionTitle } from '../';
import { IHomePhotographyFields } from '../../../@types/generated/contentful';
import Image from 'next/image';
import { appendHTTPS } from '../../utils/helpers';
import { DEFAULT_PHOTO_QUALITY, SECTION_NAMES } from '../../utils/constants';
import { ImageContainer, Overlay, PhotosWrapper } from './HomeSection.style';

interface Props {
  photosSection: IHomePhotographyFields[];
  sectionName: string;
  withOverlay?: boolean;
}

const HomeSection: React.FC<Props> = ({
  photosSection,
  sectionName,
  withOverlay = false,
}) => {
  const { photos } = photosSection[0];
  // TODO: Make Photography section images clickable links
  return (
    <>
      <SectionTitle>{sectionName}</SectionTitle>
      <PhotosWrapper>
        {photos.map((photo, index) => {
          const { url } = photo.fields.file;
          const width = 280;
          const height = 1.33 * width;
          return (
            <ImageContainer withOverlay={withOverlay} key={url}>
              <Image
                width={width}
                height={height}
                key={url}
                objectFit='cover'
                src={appendHTTPS(
                  `${url}?w=${width * 3}&q=${DEFAULT_PHOTO_QUALITY}&fm=jpg`
                )}
              />
              {withOverlay ? (
                <Overlay>
                  <SectionTitle fontSize={'3rem'}>
                    {SECTION_NAMES[index]}
                  </SectionTitle>
                </Overlay>
              ) : null}
            </ImageContainer>
          );
        })}
      </PhotosWrapper>
    </>
  );
};

export default HomeSection;
