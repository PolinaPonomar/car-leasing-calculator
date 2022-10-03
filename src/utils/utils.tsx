export function calculateColorTrackOfRangeInput (num: number, min: number, max: number): string {
  if (num < min) {
    return '0% 100%'
  } else if (num > max) {
    return '100% 100%'
  }
  return `${(num - min) * 100 / (max - min)}` + '% 100%'
}
