import { MutableRefObject, useEffect } from 'react';
import { useRouter } from 'next/router';
import useComponentSize from '@rehooks/component-size';

export const useScrollFromLinkToAnchor = (
  ref: MutableRefObject<HTMLDivElement> | null
) => {
  const { height } = useComponentSize(ref);
  const { replace } = useRouter();
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#') && height > 300) {
      const id = path.replace('#', '');
      const el = window.document.getElementById(id.toLowerCase());
      if (el) {
        const rect = el.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const offset = windowWidth > 700 ? 350 : -100;
        window.top.scroll({
          top: rect.top + offset,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo(0, 0);
      }
      replace('/photography', null, { shallow: true });
    }
  }, [height]);
};
