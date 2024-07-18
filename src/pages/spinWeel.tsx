/* eslint-disable unicorn/filename-case */
import React, { useState } from "react"
// import "./Wheel.css"

const prizes = ["Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5", "Prize 6", "Prize 7", "Prize 8"]

const Wheel: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const spinWheel = () => {
    setIsSpinning(true)
    setResult(null)
    const randomIndex = Math.floor(Math.random() * prizes.length)
    const rotation = 3600 + randomIndex * (360 / prizes.length)

    setTimeout(() => {
      setIsSpinning(false)
      setResult(prizes[randomIndex])
    }, 5000) // Thời gian xoay là 5 giây

    const wheel = document.getElementById("wheel")
    if (wheel) {
      wheel.style.transition = "transform 5s ease-out"
      wheel.style.transform = `rotate(${rotation}deg)`
    }
  }

  return (
    <div className="wheel-container">
      <div className="wheel" id="wheel">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="segment"
            style={{
              transform: `rotate(${index * (360 / prizes.length)}deg)`,
              backgroundColor: index % 2 === 0 ? "blue" : "green",
            }}
          >
            {prize}
          </div>
        ))}
      </div>
      <button onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>
      {result && <div className="result">Result: {result}</div>}
    </div>
  )
}

export default Wheel
