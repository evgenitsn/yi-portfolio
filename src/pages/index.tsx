import { GetStaticProps } from 'next';
import { IHomePhotographyFields } from '../../@types/generated/contentful';
import { getHomeRecentWorkPhotos, getHomeSectionPhotos } from '../api/service';
import { HomeSection } from '../components';
import { Layout } from '../layout';

interface Props {
  homePhotography: IHomePhotographyFields[];
  homeRecent: IHomePhotographyFields[];
}

export const getStaticProps: GetStaticProps = async () => {
  const homePhotography = await getHomeSectionPhotos();
  const homeRecent = await getHomeRecentWorkPhotos();

  return {
    props: { homePhotography, homeRecent },
  };
};

const Home: React.FC<Props> = ({ homePhotography, homeRecent }) => {
  return (
    <Layout>
      <HomeSection photosSection={homeRecent} sectionName={'Recent work'} />
      <HomeSection
        photosSection={homePhotography}
        sectionName={'Photography'}
        withOverlay={true}
      />
    </Layout>
  );
};

export default Home;
