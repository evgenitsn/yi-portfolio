const FontFamilies: React.FC = () => {
  return (
    <style jsx global>{`
      /* Fonts */
      @font-face {
        font-family: 'WorkSans';
        src: url('/fonts/WorkSans/WorkSans-Bold.ttf');
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: 'Poppins';
        src: url('/fonts/Poppins/Poppins-Light.ttf');
        font-style: normal;
        font-weight: 300;
        font-display: swap;
      }
      @font-face {
        font-family: 'Poppins';
        src: url('/fonts/Poppins/Poppins-Regular.ttf');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }
    `}</style>
  );
};
export default FontFamilies;
