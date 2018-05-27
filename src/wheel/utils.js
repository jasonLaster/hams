export function toPercent(num) {
  return `${num * 100}%`;
}

export function getHSL(color) {
  const { hue, saturation, brightness } = color;
  return `hsl(${hue}, ${toPercent(saturation)}, ${toPercent(brightness)})`;
}

export function darker(amount, color) {
  return { ...color, brightness: Math.max(color.brightness - amount, 0) };
}

export function brightness(amount, color) {
  return { ...color, brightness: amount };
}

export function boxShadow(color) {
  return `1px 1px 1px ${getHSL(color)}`;
}

export function updateColor(color) {
  return {
    ...color,
    hue: (color.hue + 10) % 255
  };
}
