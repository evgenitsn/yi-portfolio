import ReactGallery, { PhotoProps } from 'react-photo-gallery';
import { Image } from '../';
import { columnsCount } from './utils';

interface Props {
  photos: PhotoProps[];
}

const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <ReactGallery
      // TODO: Customize?
      margin={6}
      direction={'column'}
      columns={columnsCount}
      photos={photos}
      renderImage={({ top, left, photo }) => {
        if (photo.width > 1 && photo.height > 1) {
          return (
            <Image
              key={photo.key}
              top={top}
              left={left}
              src={photo.src}
              alt={photo.alt}
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
