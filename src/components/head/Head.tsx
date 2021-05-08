import NextHead from 'next/head';
import { META_DESCRIPTION, SITE_TITLE } from '../../utils/constants';

interface Props {
  title?: string;
}

const Head: React.FC<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{title || SITE_TITLE}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={META_DESCRIPTION} />
      <link
        rel='preload'
        href='/fonts/WorkSans/WorkSans-Bold.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/Poppins/Poppins-Light.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/Poppins/Poppins-Regular.ttf'
        as='font'
        crossOrigin=''
      />
    </NextHead>
  );
};

export default Head;
