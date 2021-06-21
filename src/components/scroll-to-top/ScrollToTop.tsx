import STT from 'react-scroll-to-top';

const ScrollToTop = () => {
  // TODO: Safari visual issue
  return (
    <STT
      smooth={true}
      component={<img src={'./icons/background-arrow.svg'} alt='Arrow' />}
      viewBox='0 0 50 50'
      style={{
        background: 'none',
        boxShadow: 'none',
        bottom: '9%',
        right: '6%',
        width: '60px',
        height: '50px',
      }}
    />
  );
};

export default ScrollToTop;
