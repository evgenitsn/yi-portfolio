import { getAllEntriesByContentType } from '../api/service';
import { Layout } from '../layout';
import { GetStaticProps } from 'next';
import { IVideoFields } from '../../@types/generated/contentful';

interface Props {
  videos: IVideoFields[];
}

export const getStaticProps: GetStaticProps = async () => {
  const videos = await getAllEntriesByContentType('video');
  return { props: { videos } };
};

const Videos: React.FC<Props> = ({ videos }) => (
  <Layout>
    <h1>Videos</h1>
    <div>
      {videos.map(e => (
        <div key={e.name}>
          <ul>
            <li>{e.name}</li>
            <li>{e.url}</li>
          </ul>
        </div>
      ))}
    </div>
  </Layout>
);

export default Videos;
