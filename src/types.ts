export type Theme = {
  name: string | Array<string>;
  url: string;
};

export interface IData {
  version: number;
  data: Array<Theme>;
}

export type IOptions =
  | undefined
  | {}
  | {
      theme: {};
    }
  | {
      theme: {
        name: string;
      };
    };
