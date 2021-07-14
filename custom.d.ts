declare module '*.svg' {
  const content: any;
  export default content;
}

interface Window {
  gtag: any;
}

declare let window: Window;
