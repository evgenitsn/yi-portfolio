import Image from 'next/image';
import { appendHTTPS } from '../../utils/helpers';
import { DEFAULT_PHOTO_QUALITY } from '../../utils/constants';

interface Props {
  width: number;
  height: number;
  url: string;
}

const HomeSectionImage: React.FC<Props> = ({ width, height, url }) => (
  <Image
    width={width}
    height={height}
    key={url}
    objectFit='cover'
    src={appendHTTPS(`${url}?w=${width * 3}&q=${DEFAULT_PHOTO_QUALITY}&fm=jpg`)}
  />
);

export default HomeSectionImage;
