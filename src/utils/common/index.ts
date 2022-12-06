export const numWithComma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const matchIncludWithLowerCase = (text: string, value?: string) =>
  value?.toLowerCase().includes(text)
