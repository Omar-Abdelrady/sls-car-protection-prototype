export function clampRevealProgress(
  sectionTop: number,
  sectionHeight: number,
  viewportHeight: number,
  scrollY: number,
) {
  const travel = Math.max(sectionHeight - viewportHeight, 1);
  const rawProgress = ((scrollY - sectionTop) / travel) * 100;
  return Math.min(100, Math.max(0, Math.round(rawProgress)));
}
