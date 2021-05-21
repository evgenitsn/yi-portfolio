import STT from 'react-scroll-to-top';
import Arrow from '../../icons/background-arrow.svg';

const ScrollToTop = () => {
  return (
    <STT
      smooth={true}
      component={<Arrow />}
      viewBox='0 0 50 50'
      style={{
        transform: 'rotate(-90deg)',
        background: 'none',
        color: 'white',
        boxShadow: 'none',
        right: '10%',
      }}
    />
  );
};

export default ScrollToTop;
