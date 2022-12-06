import { atom } from "recoil"

export const testnetState = atom({
  key: "testnetState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})
