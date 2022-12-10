export const numWithComma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const matchIncludWithLowerCase = (text: string, value?: string) =>
  value?.toLowerCase().includes(text)

export const genUniqueRandomNumArr = (range = 0, limit = 0) => {
  const uniqueValues = new Set<number>()

  while (uniqueValues.size < range) {
    uniqueValues.add(Number((Math.random() * limit).toFixed()))
  }

  return Array.from(uniqueValues)
}
