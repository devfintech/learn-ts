import { useGetBrandAnalytics } from "@/hooks/analytics/use-get-brand-analytics"
import { useUserWeb2Store } from "@/hooks/stores/user-web2-user-stone"
import { Button } from "@/libs/ui/button"
import TokenModal from "@/pages/tokenModal"
import { Form, Input } from "antd"
import { FC, useState } from "react"
import { useTranslation } from "react-i18next"

interface LoginProps {}
interface Token {
  symbol: string
  name: string
  address: string
}
const Login: FC<LoginProps> = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const { Item } = Form
  const { login } = useUserWeb2Store()
  const { t } = useTranslation()

  const emailRules = [
    {
      type: "email",
      message: "Not valid E-mail!",
    },
    {
      required: true,
      message: "Please input your E-mail!",
    },
  ] as any

  const passwordRules = [
    {
      required: true,
      message: "Please input your password!",
    },
  ] as any

  const handleFinish = async (values: { email: string; password: string }) => {
    setLoading(true)
    await login(values)
    setLoading(false)
  }
  const { data: brand } = useGetBrandAnalytics()
  console.log("brand: ", brand)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState<string | null>(null)

  const handleSelectToken = (token: Token) => {
    setSelectedToken(token.symbol)
    setModalIsOpen(false)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <div>
        <div>
          <div>manage@loya3.com | admin12345@</div>
          <Form id="login-form" form={form} onFinish={handleFinish}>
            <Item name="email" rules={emailRules} validateTrigger="onSubmit">
              <Input autoComplete="off" placeholder="Email" />
            </Item>
            <Item name="password" rules={passwordRules} validateTrigger="onSubmit">
              <Input autoComplete="off" placeholder="Password" />
            </Item>
          </Form>
        </div>
        <div>
          <Button loading={loading} form="login-form" htmlType="submit" type="primary">
            {t("Login")}
          </Button>
        </div>
        <div>
          <h1>tong so brand: {brand?.totalBrands}</h1>
        </div>

        <h1>Token Selector</h1>
        <button onClick={() => setModalIsOpen(true)}>Select Token</button>
        {selectedToken && <p>Selected Token: {selectedToken}</p>}
        <TokenModal open={modalIsOpen} onSelectToken={handleSelectToken} />
      </div>
      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-white"></div>
      <div className="relative h-screen bg-black">
        <Button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-1000"
          type={"primary"}
          onClick={() => scrollToTop()}
        >
          On Top
        </Button>
      </div>
    </>
  )
}

export default Login
