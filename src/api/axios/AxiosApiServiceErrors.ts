import { AxiosError } from "axios"

export const handleServiceError = (error?: unknown | AxiosError) => {
  console.error(error)
  return error
}
