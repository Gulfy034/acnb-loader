export {};

declare global {
  interface Window {
    opts: {
      theme: {
        name: string;
      };
    };
    acnb: Function;
  }
}
