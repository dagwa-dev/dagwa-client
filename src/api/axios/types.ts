import { AxiosRequestConfig } from "axios"

export type RequestMethod = <T = any, D = any>(
  path: string,
  config?: AxiosRequestConfig<D>,
) => Promise<T>

export interface RequestConfig<D = any, P = any> extends AxiosRequestConfig<D> {
  params?: P
}
