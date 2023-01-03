import { AxiosRequestConfig } from "axios"

export type RequestMethod = <T = unknown, D = unknown>(
  path: string,
  config?: AxiosRequestConfig<D>,
) => Promise<T>

export interface RequestConfig<D = unknown, P = unknown>
  extends AxiosRequestConfig<D> {
  params?: P
}
