import { ContactForm, SectionTitle } from '../components';
import { Layout } from '../layout';

const Home: React.FC = () => {
  return (
    <Layout title='Contact'>
      <SectionTitle>Contact me.</SectionTitle>
      <ContactForm />
    </Layout>
  );
};

export default Home;
