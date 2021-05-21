import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { IVideoFields } from '../../@types/generated/contentful';
import { extractYouTubeIdFromUrl } from '../utils/helpers';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { ILiteYouTubeEmbedProps } from '../types/react-lite-youtube-embed';
import { ScrollToTop } from '../components';

const LiteYoutubeEmbed = dynamic<ILiteYouTubeEmbedProps>(
  () => import('react-lite-yt-embed').then(mod => mod.LiteYoutubeEmbed),
  { ssr: false }
);

interface Props {
  videos: IVideoFields[];
}

export const getStaticProps: GetStaticProps = async () => {
  const videos = await getAllEntriesByContentType('video');
  return { props: { videos } };
};

const Wrapper = styled.div`
  width: 90%;
  margin-top: 48px;
`;

const VideoList = styled.ul`
  flex-direction: column;
`;

const VideoWrapper = styled.li`
  margin-bottom: 32px;
`;

const Video: React.FC<Props> = ({ videos }) => {
  return (
    <Layout title='Videos'>
      <Wrapper>
        {/* TODO: Maybe title?? */}
        <VideoList>
          {videos.map(({ url, name }) => {
            const youtubeVideoId = extractYouTubeIdFromUrl(url);
            return youtubeVideoId ? (
              <VideoWrapper key={url}>
                <LiteYoutubeEmbed
                  id={youtubeVideoId}
                  mute={false}
                  // {/* TODO: Video can be autoplayed */}
                  imageAltText={name}
                  // TODO: set some breakpoint for isMobile
                  // isMobile={true}
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
