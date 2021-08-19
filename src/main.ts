import { loadScript } from "./utils/helpers";
import { IOptions } from "./types/index";
import { url } from "./constants/urls";

const ensureThemeUrl = async (themeName: string) => {
  const response = await fetch(url);
  const column = await response.json();
  const isCurrentTheme = (item: any) => {
    if (typeof item.name === "string") {
      return item.name === themeName;
    } else {
      return item.name.includes(themeName);
    }
  };
  const currentTheme = column.filter(isCurrentTheme);
  return currentTheme[0].url;
};

const loader = (options: IOptions = { theme: { name: "acg" } }) => {
  window.opts = options;
  const themeName = options.theme.name;
  ensureThemeUrl(themeName).then((url: string) => loadScript(url));
};

$.extend({ awesCnb: loader });
