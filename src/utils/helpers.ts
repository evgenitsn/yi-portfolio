const HTTPS = 'https:';

export const appendHTTPS = (url: string) => HTTPS + url;

export const extractYouTubeIdFromUrl = (url: string) =>
  url.includes('youtu.be') || url.includes('youtube')
    ? url.includes('v=')
      ? url.substring(url.lastIndexOf('v=') + 2, url.length)
      : url.substring(url.lastIndexOf('/') + 1, url.length)
    : null;
