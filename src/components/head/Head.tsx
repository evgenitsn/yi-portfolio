import NextHead from 'next/head';
import { SITE_TITLE } from '../../utils/constants';

interface Props {
  title?: string;
}

const Head: React.FC<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{title || SITE_TITLE}</title>
    </NextHead>
  );
};

export default Head;
