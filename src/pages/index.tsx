import styled from 'styled-components';
import { getEntries } from '../api/service';
import { Layout } from '../layout';
import Image from 'next/image';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export async function getStaticProps() {
  const entries = await getEntries();
  return {
    props: {
      photoCollections: entries
        .filter(e => e.sys.contentType.sys.id === 'imageSection')
        .map(e => e.fields),
      videos: entries
        .filter(e => e.sys.contentType.sys.id === 'video')
        .map(e => e.fields),
    },
  };
}

const Home: React.FC = (props: any) => {
  return (
    <Layout>
      <Header>
        <Title>Site title</Title>
      </Header>
      <Wrapper>
        <h2>Photos</h2>
        {props.photoCollections.map(e => {
          return (
            <div key={e.name}>
              <h4>{e.name}</h4>
              {e.photos.map(t => (
                <Image
                  width='400px'
                  height='400px'
                  key={t.fields.file.url}
                  src={'https:' + t.fields.file.url}
                />
              ))}
            </div>
          );
        })}
      </Wrapper>
    </Layout>
  );
};

export default Home;
