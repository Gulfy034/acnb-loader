import { loadJSON } from "./helpers";
import { url, defaultThemeName } from "./constants";
import type { IOptions, Theme, IData } from "./types";

const isCurrentTheme = (themeName: string) => {
  return ({ name }: Theme) => {
    if (typeof name === "string") {
      return name === themeName;
    } else {
      return name.includes(themeName);
    }
  };
};

const ensureThemeUrl = async (themeName: string) => {
  const response = await fetch(url);
  const { data: cloudThemes } = await (response.json() as Promise<IData>);
  const currentThemeData = cloudThemes.filter(isCurrentTheme(themeName));

  if (currentThemeData.length) {
    return currentThemeData[0].url;
  } else {
    return cloudThemes.filter(isCurrentTheme(defaultThemeName))[0].url;
  }
};

const ensureThemeName = (options: IOptions): string => {
  if (options && "theme" in options && "name" in options.theme && typeof options.theme.name === "string") {
    return options.theme.name;
  }
  return defaultThemeName;
};

const mountOptions = (options: IOptions): void => (window.opts = options);

export const loader = async (options: IOptions) => {
  mountOptions(options);
  const themeName = ensureThemeName(options);
  const themeUrl = await ensureThemeUrl(themeName);
  console.log(themeUrl);
  loadJSON(themeUrl);
};
