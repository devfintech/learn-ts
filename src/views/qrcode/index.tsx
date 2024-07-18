import { useScrollY } from "@/hooks/render/use-scroll-y"
import { Button } from "@/libs/ui/button"
import { Input } from "@/libs/ui/input"
import { QRCode } from "antd"
import { FC, useEffect, useRef, useState } from "react"

interface QrCodeProps {}

const QrCodeGenerator: FC<QrCodeProps> = () => {
  const [text, setText] = useState<string>("")
  const [qrCodeText, setQrCodeText] = useState<string>("")

  const handleGenerateQRCode = () => {
    setQrCodeText(text)
    setText("")
  }
  const [currentFrame, setCurrentFrame] = useState<number>(0)
  const intervalRef = useRef<number | null>(null)

  const frames = [
    "/images/anh1.jfif",
    "/images/anh2.jfif",
    "/images/anh3.jfif",
    "/images/anh4.jfif",
    "/images/anh5.jfif",
    "/images/anh6.jfif",
    "/images/anh7.jfif",
    "/images/anh8.jfif",
    "/images/anh9.jfif",
    "/images/anh10.jfif",
    "/images/anh11.jfif",
    "/images/anh12.jfif",
    "/images/anh13.jfif",
    "/images/anh14.jfif",
    "/images/anh15.jfif",
    "/images/anh16.jfif",
    "/images/anh17.jfif",
    "/images/anh18.jfif",
    "/images/anh19.jfif",
    "/images/anh20.jfif",
    "/images/anh21.jfif",
    "/images/anh22.jfif",
    "/images/anh23.jfif",
    "/images/anh24.jfif",
    "/images/anh25.jfif",
    "/images/anh26.jfif",
    "/images/anh27.jfif",
    "/images/anh28.jfif",
    "/images/anh29.jfif",
    "/images/anh30.jfif",
    "/images/anh31.jfif",
    "/images/anh32.jfif",
    "/images/anh33.jfif",
    "/images/anh34.jfif",
    "/images/anh35.jfif",
    "/images/anh36.jfif",
    "/images/anh37.jfif",
    "/images/anh38.jfif",
    "/images/anh39.jfif",
    "/images/anh40.jfif",
    "/images/anh41.jfif",
    "/images/anh42.jfif",
    "/images/anh43.jfif",
    "/images/anh44.jfif",
    "/images/anh45.jfif",
    "/images/anh46.jfif",
    "/images/anh47.jfif",
    "/images/anh48.jfif",
    "/images/anh49.jfif",
    "/images/anh50.jfif",
    "/images/anh51.jfif",
    "/images/anh52.jfif",
    "/images/anh53.jfif",
    "/images/anh54.jfif",
    "/images/anh55.jfif",
    "/images/anh56.jfif",
    "/images/anh57.jfif",
    "/images/anh58.jfif",
    "/images/anh59.jfif",
    "/images/anh60.jfif",
    "/images/anh61.jfif",
    "/images/anh62.jfif",
  ]
  const scrollY = useScrollY(5)
  console.log("hihihaha: ", scrollY)
  if (scrollY) {
    console.log("500")
  }
  useEffect(() => {
    if (scrollY) {
      intervalRef.current = window.setInterval(() => {
        setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length)
      }, 200)
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [scrollY])
  return (
    <>
      <div className="mx-auto flex h-screen w-1/2 flex-col items-center justify-center gap-5">
        <img src={frames[currentFrame]} alt={`frame-${currentFrame}`} />
        <Input
          className="w-full"
          required
          placeholder="Enter text to generate QR code"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleGenerateQRCode}>Generate QR Code</Button>
        {qrCodeText && (
          <div>
            <QRCode value={qrCodeText} size={256} />
            <h1>{text}</h1>
          </div>
        )}
      </div>
    </>
  )
}

export default QrCodeGenerator
