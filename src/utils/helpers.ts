const HTTPS = 'https:';

export const appendHTTPS = (url: string) => HTTPS + url;

export const extractYouTubeIdFromUrl = (url: string) =>
  url.substring(url.lastIndexOf('v=') + 2, url.length);
