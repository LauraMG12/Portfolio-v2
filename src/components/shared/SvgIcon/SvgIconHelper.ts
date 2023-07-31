export enum IconTypes {
  Arrow = "arrow",
  CSS = "css",
  GitHub = "github",
  HTML = "html",
  LinkedIn = "linkedin",
  Logo = "logo",
  Menu = "navigation",
  Redirect = "redirect",
}

export interface SvgIconDefaultSettings {
  width?: number;
  height?: number;
}

export interface SvgIconTransformedProps {
  width: string;
  height: string;
}

export const SVG_ICON_DEFAULT_SETTINGS: Record<
  IconTypes,
  Required<SvgIconDefaultSettings>
> = {
  arrow: {
    width: 15,
    height: 10,
  },
  css: {
    width: 20,
    height: 20,
  },
  html: {
    width: 20,
    height: 20,
  },
  github: {
    width: 25,
    height: 25,
  },
  linkedin: {
    width: 25,
    height: 25,
  },
  logo: {
    width: 70,
    height: 45,
  },
  navigation: {
    width: 35,
    height: 35,
  },
  redirect: {
    width: 25,
    height: 25,
  },
};

export function transformSvgPropsFormat(
  name: IconTypes,
  size?: SvgIconDefaultSettings
): SvgIconTransformedProps {
  const defaultSettings = SVG_ICON_DEFAULT_SETTINGS[name];
  const width = size?.width ?? defaultSettings.width;
  const height = size?.height ?? defaultSettings.height;

  return {
    width: `${width}px`,
    height: `${height}px`,
  };
}
