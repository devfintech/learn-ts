import { useState } from "react"

export const Timer = () => {
  const [time, setTime] = useState()

  type Address = string | string[]
  const address: Address = ["123 main st"]
  console.log(address)
  return (
    <>
      <div>Timer</div>
    </>
  )
}
