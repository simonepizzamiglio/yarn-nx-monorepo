export function difference(arr1: number[], arr2: number[]) {
  return [arr1, arr2].reduce((a, b) => a.filter((c) => !b.includes(c)))
}
