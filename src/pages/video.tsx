import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { IVideoFields } from '../../@types/generated/contentful';
import YouTube from 'react-youtube';
import { extractYouTubeIdFromUrl } from '../utils/helpers';
import styled from 'styled-components';

interface Props {
  videos: IVideoFields[];
}

export const getStaticProps: GetStaticProps = async () => {
  const videos = await getAllEntriesByContentType('video');
  return { props: { videos } };
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 130%;
  margin-top: 48px;

  /* TODO: extract breakpoints */
  @media (max-width: 660px) {
    width: 100%;
  }
`;

const VideoList = styled.ul`
  flex-direction: column;
`;

const VideoWrapper = styled.li`
  div {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    margin-bottom: 32px;
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const Video: React.FC<Props> = ({ videos }) => {
  return (
    <Layout title='Videos'>
      <Wrapper>
        <VideoList>
          {videos.map(({ url }) => {
            const youtubeVideoId = extractYouTubeIdFromUrl(url);
            return youtubeVideoId ? (
              <VideoWrapper key={url}>
                <YouTube
                  key={url}
                  videoId={youtubeVideoId}
                  opts={{
                    playerVars: {
                      autoplay: 0,
                      color: 'white',
                      rel: 0,
                    },
                  }}
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
