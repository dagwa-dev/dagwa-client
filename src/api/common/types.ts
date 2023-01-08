// Paginateion
export type PageOptions = {
  page: number
  take: number
  q?: string
  order?: "DESC" | "ASC"
}

export type PageMeta = {
  page: number
  take: number
  itemCount: number
  pageCount: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export type PageResult<T> = {
  data: T[]
  meta: PageMeta
}
export type PageResultAsync<T> = Promise<PageResult<T>>
