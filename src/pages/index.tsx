import styled from 'styled-components';
import { Layout } from '../layout';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  /* border-bottom: 1px solid; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Title>Site title</Title>
      </Header>
      <Wrapper>
        <h2>Content</h2>
      </Wrapper>
    </Layout>
  );
};

export default Home;
