import STT from 'react-scroll-to-top';

const ScrollToTop = () => {
  // TODO: Safari visual issue
  return (
    <STT
      smooth={true}
      component={<img src={'./icons/background-arrow.svg'} alt='Arrow' />}
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
