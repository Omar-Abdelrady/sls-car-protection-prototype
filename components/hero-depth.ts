const clampDepth = (value: number) => Math.min(1, Math.max(-1, value));

export function mapPointerToDepth(
  clientX: number,
  clientY: number,
  width: number,
  height: number,
) {
  const x = width > 0 ? (clientX / width) * 2 - 1 : 0;
  const y = height > 0 ? (clientY / height) * 2 - 1 : 0;

  return {
    x: Number(clampDepth(x).toFixed(3)),
    y: Number(clampDepth(y).toFixed(3)),
  };
}
