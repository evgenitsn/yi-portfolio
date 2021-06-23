import { SectionTitle } from '../';
import { IHomePhotographyFields } from '../../../@types/generated/contentful';
import { HOME_SECTION_NAMES } from '../../utils/constants';
import Link from 'next/link';
import { ImageContainer, Overlay, PhotosWrapper } from './HomeSection.style';
import { HomeSectionImage } from './';

interface Props {
  photosSection: IHomePhotographyFields[];
  sectionName: string;
  links?: boolean;
}

const HomeSection: React.FC<Props> = ({
  photosSection,
  sectionName,
  links = false,
}) => {
  const { photos } = photosSection[0];
  return (
    <>
      <SectionTitle>{sectionName}</SectionTitle>
      <PhotosWrapper>
        {photos.map((photo, index) => {
          const { url } = photo.fields.file;
          const width = 280;
          const height = 1.33 * width;
          return (
            <ImageContainer withOverlay={links} key={url}>
              {links ? (
                <Link
                  scroll={false}
                  href={`/photography#${HOME_SECTION_NAMES[
                    index
                  ].toLowerCase()}`}
                >
                  {/* TODO: Maybe don't use <a> as parent here. Possible fix is onclick push  */}
                  <a>
                    <HomeSectionImage width={width} height={height} url={url} />
                    <Overlay>
                      <SectionTitle fontSize={'3rem'}>
                        {HOME_SECTION_NAMES[index]}
                      </SectionTitle>
                    </Overlay>
                  </a>
                </Link>
              ) : (
                <HomeSectionImage width={width} height={height} url={url} />
              )}
            </ImageContainer>
          );
        })}
      </PhotosWrapper>
    </>
  );
};

export default HomeSection;
