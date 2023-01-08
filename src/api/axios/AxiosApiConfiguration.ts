export class ApiConfiguration {
  baseUrl: string
  accessToken?: string

  constructor(baseUrl: string, accessToken?: string) {
    this.baseUrl = baseUrl
    this.accessToken = accessToken
  }
}
