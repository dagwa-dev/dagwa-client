import { GetAllDApp, GetOneDApp } from "./types"

export interface IDAppApiClient {
  getOne: GetOneDApp
  getAll: GetAllDApp
}
