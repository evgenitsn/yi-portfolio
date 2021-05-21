import { GetStaticProps } from 'next';
import { IHomePhotographyFields } from '../../@types/generated/contentful';
import { getAllEntriesByContentType } from '../api/service';
import { SectionTitle } from '../components';
import { Layout } from '../layout';

interface Props {
  homePhotography: IHomePhotographyFields[];
}

export const getStaticProps: GetStaticProps = async () => {
  const homePhotography = await getAllEntriesByContentType('homePhotography');
  return {
    props: { homePhotography },
  };
};

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <SectionTitle>Recent work</SectionTitle>
      <SectionTitle>Photography</SectionTitle>
    </Layout>
  );
};

export default Home;
