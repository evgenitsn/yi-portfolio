declare type ResolutionType = 'maxresdefault' | 'sddefault' | 'hqdefault';
export interface ILiteYouTubeEmbedProps {
  id: string;
  adLinksPreconnect?: boolean;
  defaultPlay?: boolean;
  isPlaylist?: boolean;
  noCookie?: boolean;
  mute?: boolean;
  params?: Record<string, string>;
  isMobile?: boolean;
  mobileResolution?: ResolutionType;
  desktopResolution?: ResolutionType;
  lazyImage?: boolean;
  imageAltText?: string;
}
