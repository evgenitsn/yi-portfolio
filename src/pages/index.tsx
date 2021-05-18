import { SectionTitle } from '../components';
import { Layout } from '../layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <SectionTitle>Recent work</SectionTitle>
      <SectionTitle>Photography</SectionTitle>
    </Layout>
  );
};

export default Home;
