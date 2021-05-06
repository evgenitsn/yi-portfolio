import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { IVideoFields } from '../../@types/generated/contentful';
import YouTube from 'react-youtube';
import { extractYouTubeIdFromUrl } from '../utils/helpers';
import styled from 'styled-components';
import { PageTitle } from '../components';

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
  width: 75%;
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
    margin-bottom: 50px;
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
    <Layout>
      <Wrapper>
        <PageTitle>Video</PageTitle>
        <VideoList>
          {videos.map(({ url }) => (
            <VideoWrapper key={url}>
              <YouTube
                key={url}
                videoId={extractYouTubeIdFromUrl(url)}
                opts={{
                  width: '100%',
                  playerVars: {
                    autoplay: 0,
                    color: 'white',
                    rel: 0,
                  },
                }}
              />
            </VideoWrapper>
          ))}
        </VideoList>
      </Wrapper>
    </Layout>
  );
};

export default Video;
