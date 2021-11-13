import { loadJSON } from "./utils/helpers";
import { url } from "./constants/urls";
import type { IOptions, Theme, IData } from "./types/index";

const ensureThemeUrl = async (themeName: string) => {
  const response = await fetch(url);
  const { data: themes } = await (response.json() as Promise<IData>);

  const isCurrentTheme = ({ name }: Theme) => {
    if (typeof name === "string") {
      return name === themeName;
    } else {
      return name.includes(themeName);
    }
  };

  const currentTheme = themes.filter(isCurrentTheme);
  return currentTheme[0].url;
};

const loader = (options: IOptions = { theme: { name: "acg" } }) => {
  window.opts = options;
  const themeName = options.theme.name;
  ensureThemeUrl(themeName).then((url: string) => loadJSON(url));
};

$.extend({ awesCnb: loader });
