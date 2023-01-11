export class ApiConfig {
  baseUrl: string
  accessToken?: string

  constructor(baseUrl: string, accessToken?: string) {
    this.baseUrl = baseUrl
    this.accessToken = accessToken
  }
}
