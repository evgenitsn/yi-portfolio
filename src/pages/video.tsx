import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { IVideoFields } from '../../@types/generated/contentful';
import { extractYouTubeIdFromUrl } from '../utils/helpers';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { ILiteYouTubeEmbedProps } from '../types/react-lite-youtube-embed';

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
  width: 150%;
  margin-top: 48px;

  /* TODO: extract breakpoints */
  @media (max-width: 1000px) {
    width: 130%;
  }
  /* TODO: extract breakpoints */
  @media (max-width: 660px) {
    width: 100%;
  }
`;

const VideoList = styled.ul`
  flex-direction: column;
`;

const VideoWrapper = styled.li`
  margin-bottom: 32px;
  /* Workaround for 1px thumbnail bleeding on the right of each video */
  img {
    width: 99.9%;
  }
`;

const Video: React.FC<Props> = ({ videos }) => {
  return (
    <Layout title='Videos'>
      <Wrapper>
        <VideoList>
          {videos.map(({ url, name }, index) => {
            const youtubeVideoId = extractYouTubeIdFromUrl(url);
            return youtubeVideoId ? (
              <VideoWrapper key={url}>
                <LiteYoutubeEmbed
                  id={youtubeVideoId}
                  mute={false}
                  // {/* TODO: Video can be autoplayed */}
                  defaultPlay={index === 0}
                  imageAltText={name}
                  // TODO: set some breakpoint for isMobile
                  // isMobile={true}
                />
              </VideoWrapper>
            ) : null;
          })}
        </VideoList>
      </Wrapper>
    </Layout>
  );
};

export default Video;
