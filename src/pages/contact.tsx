import { ContactForm, SectionTitle } from '../components';
import { Layout } from '../layout';

const Contact: React.FC = () => {
  return (
    <Layout title='Yordan Ivanov - Contact'>
      <SectionTitle>Contact me.</SectionTitle>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
