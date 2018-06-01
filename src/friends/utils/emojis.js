export const emojis = ["🦊", "🛠", "🔥", "🕺"];

export function cycleItems(index, items) {
  const next = index + 1;
  return next <= items.length ? next : 0;
}
