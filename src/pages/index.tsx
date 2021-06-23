import { GetStaticProps } from 'next';
import { IHomePhotographyFields } from '../../@types/generated/contentful';
import { getHomeRecentWorkPhotos, getHomeSectionPhotos } from '../api/service';
import { HomeSection } from '../components';
import { Layout } from '../layout';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import {
  INSTAGRAM_URL,
  MOBILE_BREAKPOINT,
  YOUTUBE_URL,
} from '../utils/constants';

interface Props {
  homePhotography: IHomePhotographyFields[];
  homeRecent: IHomePhotographyFields[];
}

const SocialMediaLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  display: none;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
  }
`;

export const A = styled.a`
  text-decoration: none;
  letter-spacing: 1.6px;
  color: ${theme.colors.text};
  margin-top: 32px;

  &:hover {
    cursor: pointer;
  }
`;

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
      <SocialMediaLinks>
        <A target='_blank' href={INSTAGRAM_URL} rel='noopener noreferrer'>
          Instagram
        </A>
        <A target='_blank' href={YOUTUBE_URL} rel='noopener noreferrer'>
          YouTube
        </A>
      </SocialMediaLinks>
      <HomeSection photosSection={homeRecent} sectionName={'Recent work'} />
      <HomeSection
        photosSection={homePhotography}
        sectionName={'Photography'}
        links={true}
      />
    </Layout>
  );
};

export default Home;
