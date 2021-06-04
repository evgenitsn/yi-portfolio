import { MutableRefObject, useEffect } from 'react';
import { useRouter } from 'next/router';
import useComponentSize from '@rehooks/component-size';

export const useScrollFromLinkToAnchor = (
  ref: MutableRefObject<HTMLDivElement> | null,
  offset: number
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
        window.top.scroll({
          top: rect.top - offset,
          behavior: 'smooth',
        });
      }
      replace('/photography', null, { shallow: true });
    }
  }, [height]);
};
