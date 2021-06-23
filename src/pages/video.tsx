import { getVideos } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { IVideoFields } from '../../@types/generated/contentful';
import { extractYouTubeIdFromUrl } from '../utils/helpers';
import dynamic from 'next/dynamic';
import { ILiteYouTubeEmbedProps } from '../types/react-lite-youtube-embed';
import { ScrollToTop } from '../components';
import {
  Wrapper,
  VideoList,
  VideoWrapper,
} from '../styles/root-level-pages-styles/video.style';

const LiteYoutubeEmbed = dynamic<ILiteYouTubeEmbedProps>(
  () => import('react-lite-yt-embed').then(mod => mod.LiteYoutubeEmbed),
  { ssr: false }
);

interface Props {
  videos: IVideoFields[];
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { videos: await getVideos() } };
};

const Video: React.FC<Props> = ({ videos }) => {
  return (
    <Layout title='Videos'>
      <Wrapper>
        <VideoList>
          {videos.map(({ url, name }) => {
            const youtubeVideoId = extractYouTubeIdFromUrl(url);
            return youtubeVideoId ? (
              <VideoWrapper key={url}>
                <LiteYoutubeEmbed
                  id={youtubeVideoId}
                  mute={false}
                  imageAltText={name}
                />
              </VideoWrapper>
            ) : null;
          })}
        </VideoList>
      </Wrapper>
      <ScrollToTop />
    </Layout>
  );
};

export default Video;
