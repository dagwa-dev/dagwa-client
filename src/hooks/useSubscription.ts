import axios, { AxiosError } from "axios"

import { useSWRMutation } from "./useSWRMutation"

export const useSubscription = () => {
  return useSWRMutation<object, AxiosError>("/subscriber", (url, options) =>
    axios
      .request<object>({
        url,
        method: "POST",
        data: {
          email: options.arg,
        },
      })
      .then((res) => res.data),
  )
}
