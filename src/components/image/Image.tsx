import NextImage from 'next/image';
import { appendHTTPS } from '../../utils/helpers';
import { Container } from './Image.style';

// TODO: Check the network traffic difference
const DEFAULT_QUALITY = 85;

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  top: number;
  left: number;
}

const contentfulAssetsLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) => {
  // TODO: Can divide width (/1.2) to lower the bandwith.
  return appendHTTPS(`${src}?w=${width}&q=${quality}&fm=jpg`);
};

const Image: React.FC<Props> = ({ src, alt, width, height, top, left }) => {
  return (
    <Container top={top} left={left}>
      <NextImage
        loader={contentfulAssetsLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={DEFAULT_QUALITY}
      />
    </Container>
  );
};

export default Image;
