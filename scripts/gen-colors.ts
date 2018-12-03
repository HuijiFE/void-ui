/**
 * Color generating
 */

interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

function toStringRGB({ r, g, b }: RGB): string {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function averageRGB(...rgbs: RGB[]): RGB {
  return {
    r: Math.round(rgbs.map(rgb => rgb.r).reduce((a, c) => a + c) / rgbs.length),
    g: Math.round(rgbs.map(rgb => rgb.g).reduce((a, c) => a + c) / rgbs.length),
    b: Math.round(rgbs.map(rgb => rgb.b).reduce((a, c) => a + c) / rgbs.length),
  };
}

function clamp(x: number): number {
  return x < 0 ? 0 : x > 255 ? 255 : x;
}

// Normal Grey = Red * 0.299 + Green * 0.587 + Blue * 0.144

const nmR = 0.299;
const nmG = 0.587;
const nmB = 0.144;

function normalRGBToGrey({ r, g, b }: RGB): number {
  return nmR * r + nmG * g + nmB * b;
}

// sRGB to Grey, based on linear

function sRGBToLinear(x: number): number {
  return x < 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

const mR = 0.2126;
const mG = 0.7152;
const mB = 0.0722;

function sRGBToGreyLinear({ r, g, b }: RGB): number {
  return (
    mR * sRGBToLinear(r / 255) + mG * sRGBToLinear(g / 255) + mB * sRGBToLinear(b / 255)
  );
}

function linearTosRGB(greyLinear: number): number {
  return greyLinear <= 0.0031308
    ? 12.92 * greyLinear
    : 1.055 * Math.pow(greyLinear, 1 / 2.4) - 0.055;
}

function sRGBToGrey(rgb: RGB): number {
  return linearTosRGB(sRGBToGreyLinear(rgb)) * 255;
}

// ========

function offsetRGBtoGrey(rgb: RGB, srcGrey: number, destGrey: number): RGB {
  const multiple = destGrey / srcGrey;

  return {
    r: clamp(rgb.r * multiple),
    g: clamp(rgb.g * multiple),
    b: clamp(rgb.b * multiple),
  };
}

const rawColorMap: Record<string, RGB> = {
  success: {
    r: 18,
    g: 137,
    b: 18,
  },
  warning: {
    r: 255,
    g: 147,
    b: 73,
  },
  danger: {
    r: 216,
    g: 59,
    b: 1,
  },
};

function generate(): void {
  const primary: RGB = averageRGB(
    {
      r: 80,
      g: 230,
      b: 237,
    },
    {
      r: 0,
      g: 120,
      b: 212,
    },
  );

  rawColorMap.primary = primary;
  rawColorMap.secondary = averageRGB(
    {
      r: 48,
      g: 229,
      b: 208,
    },
    {
      r: 0,
      g: 133,
      b: 117,
    },
  );

  rawColorMap.waring_ex = {
    r: 174,
    g: 96,
    b: 47,
  };

  console.info(toStringRGB(rawColorMap.primary));
  console.info(toStringRGB(rawColorMap.secondary));

  const colorMaps: Record<string, Record<string, RGB>> = {};
  const primaryGreyStandard = sRGBToGrey(primary);

  Object.entries(rawColorMap).forEach(([name, rgb]) => {
    const grey = sRGBToGrey(rgb);

    const colors: Record<string, RGB> = {
      lightener: offsetRGBtoGrey(rgb, grey, primaryGreyStandard * 1.16),
      lighten: offsetRGBtoGrey(rgb, grey, primaryGreyStandard * 1.08),
      standard: offsetRGBtoGrey(rgb, grey, primaryGreyStandard),
      darken: offsetRGBtoGrey(rgb, grey, primaryGreyStandard * 0.92),
      darkener: offsetRGBtoGrey(rgb, grey, primaryGreyStandard * 0.84),
    };

    colorMaps[name] = colors;
  });

  Object.entries(colorMaps).forEach(([name, map]) => {
    const content: string = Object.entries(map)
      .map(([level, rgb]) => `${`  ${level}:`.padEnd(16, ' ')}${toStringRGB(rgb)},`)
      .join('\n');

    console.info(`
$color-map-tone-${name}: (
${content}
) !default;`);
  });
}

generate();
