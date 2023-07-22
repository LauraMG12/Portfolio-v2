export enum IconTypes {
  Logo = "logo",
  LinkedIn = "linkedin",
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
  logo: {
    width: 80,
    height: 50,
  },
  linkedin: {
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
