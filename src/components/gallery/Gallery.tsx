import ReactGallery, {
  PhotoClickHandler,
  PhotoProps,
} from 'react-photo-gallery';
import { Image } from '../';
import { columnsCount } from './utils';

interface Props {
  photos: PhotoProps[];
  onPhotoClick: PhotoClickHandler;
}

const Gallery: React.FC<Props> = ({ photos, onPhotoClick }) => {
  return (
    <ReactGallery
      margin={6}
      direction={'column'}
      columns={columnsCount}
      photos={photos}
      renderImage={({ top, left, photo }) => {
        if (photo.width > 1 && photo.height > 1) {
          return (
            <Image
              onPhotoClick={onPhotoClick}
              key={photo.key}
              top={top}
              left={left}
              src={photo.src}
              alt={photo.alt}
              // TODO: Fix this ts-error
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              index={photo.index}
              width={photo.width}
              height={photo.height}
            />
          );
        }
      }}
    />
  );
};

export default Gallery;
