import Login from "@/views/login"

const HomePage = () => {
  return (
    <>
      {/* <div className="scroll-smooth transition-all duration-700 ease-in-out">
        <img className="h-screen w-full" src="/images/background.png" alt="" />
        <Container className="max-w-[calc(94.5rem_+_2rem)]">
          <div className="absolute top-0 m-auto flex w-[74%] items-center justify-between max-md:w-[90%]">
            <img className="height-[55px] mt-[30px] w-[160px]" src="/logo/logo-parobot.svg" />
            <Button className="font-base bg-button mt-5 h-[3rem] w-[14.5rem] border-none text-xl max-md:h-[2rem] max-md:w-[6.3rem] max-md:text-sm">
              Learn More
            </Button>
          </div>
          <div className="absolute top-0 max-w-[46.5rem] text-white">
            <h1 className="mt-[17.5rem] text-7xl font-normal max-md:text-3xl">
              Pioneer zkTAO sidechain application of AI, DePIN & Restaking
            </h1>
            <h1 className="mb-[2.7rem] mt-[2rem] max-md:text-sm">
              Parobot aim to be at the forefront of blockchain evolution, setting a global standard for side-chain
              technology with our innovative use of AI and Depin
            </h1>
            <Button className="font-base bg-button h-[3rem] w-[14.5rem] border-none text-xl max-md:h-[2rem] max-md:w-[6.3rem] max-md:text-sm">
              Go to Dapp
            </Button>
          </div>
        </Container>
        <div className="bg-black">
          <Container className="relative m-auto max-w-[calc(94.5rem_+_2rem)]">
            <div className="item-center m-auto flex flex-col justify-between gap-8 max-md:gap-4 md:flex-row">
              <div className="mt-[4rem] max-w-[38.5rem] max-md:mt-[2rem] md:mt-[8.25rem]">
                <h1 className=" text-stone-500">Backed by zkTAO</h1>
                <h1 className="mt-8 text-5xl text-white max-md:text-2xl">
                  Technology and Innovation using leading-edge AI and blockchain technology.
                </h1>
                <h1 className="mt-[18rem] max-w-[32.5rem] text-base font-normal text-stone-500 max-md:mt-4 max-md:text-sm">
                  Parobot’s integration with zkTAO represents a strategic fusion of technological strengths & smart
                  contract functionalities to create a side-chain that enhances and extends the capabilities of the
                  blockchain ecosystem.
                </h1>
                <h1 className="mt-[2rem] max-w-[32.5rem] text-base font-normal text-stone-500 max-md:mt-4 max-md:text-sm">
                  Parobot is pioneering the development of intelligent blockchain solutions that automate and optimize
                  various blockchain processes
                </h1>
              </div>
              <div className="max-h-[40rem] max-w-[48rem] pt-[3.25rem] max-md:m-auto max-md:max-w-[21.5rem] max-md:pt-0 md:mt-[8.25rem] ">
                <img className="md:h-[41.25rem]" src="/images/image-info.png" />
              </div>
            </div>
            <div className="line mt-[3.25rem] max-md:hidden md:mt-[6.08rem]"></div>
          </Container>
        </div>
        <div className="bg-black">
          <Container className="max-w-[calc(94.5rem_+_2rem)]">
            <div className="flex gap-[9.5rem] max-md:flex-col max-md:gap-[2.5rem]">
              <div className="mt-[3rem] flex max-w-[30rem] translate-y-0 flex-col gap-8">
                <h1 className=" text-stone-500 max-md:mt-6">Parobot Product Portfolio</h1>
                <h1 className="text-5xl text-white max-md:text-2xl">Deep-dive into Parabot Ecosystem</h1>
                <div className="mt-2">
                  <div>
                    <h1 className="py-4 text-2xl font-medium text-red-500 max-md:text-base">Stake $PARO</h1>
                    <div className="border border-solid border-stone-700"></div>
                  </div>
                  <div>
                    <h1 className="py-4 text-2xl font-medium text-stone-500 max-md:text-base">
                      Stake $PARO, Earn ETH fee
                    </h1>
                    <div className="border border-solid border-stone-700"></div>
                  </div>
                  <div>
                    <h1 className="py-4 text-2xl font-medium text-stone-500 max-md:text-base">Restaking spZAO</h1>
                    <div className="border border-solid border-stone-700"></div>
                  </div>
                  <div>
                    <h1 className="py-4 text-2xl font-medium text-stone-500 max-md:text-base">Restaking spZAO</h1>
                    <div className="border border-solid border-stone-700"></div>
                  </div>
                </div>
              </div>
              <div className="scrollbar-none mt-[3rem] flex max-h-screen flex-col gap-12 overflow-y-auto">
                <div className="flex max-w-[30rem] flex-col gap-6">
                  <div className="m-auto flex h-[15rem] w-full items-center justify-center rounded-[8px] bg-stone-950">
                    <img className="max-w-[13.5rem]" src="/images/stake.png" />
                  </div>
                  <div className="gap-4">
                    <h1 className="text-3xl text-white">Stake $PARO</h1>
                    <h1 className="text-sm text-stone-500">Enjoy massive Real-yield reward by staking your $PARO</h1>
                  </div>
                  <div>
                    <Button className="bg-button h-[2.5rem] min-w-[8rem] border-none text-xl font-bold md:hidden">
                      Stake Now
                    </Button>
                  </div>
                </div>
                <div className="flex max-w-[30rem] flex-col gap-6">
                  <div className="m-auto flex h-[15rem] w-full items-center justify-center rounded-[8px] bg-stone-950">
                    <img className="w-[13.5rem]" src="/images/restaking.png" />
                  </div>
                  <div className="gap-4">
                    <h1 className="text-3xl text-white">Restaking spZAO</h1>
                    <h1 className="text-sm text-stone-500">
                      Proof-of-Partnership by zkTAO and Parobot. Stake your spZAO to earn $PARO
                    </h1>
                  </div>
                  <div>
                    <Button className="bg-button h-[2.5rem] min-w-[8rem] border-none text-xl font-bold md:hidden">
                      Restake Now
                    </Button>
                  </div>
                </div>
                <div className="flex max-w-[30rem] flex-col gap-6">
                  <div className="m-auto flex h-[15rem] w-full items-center justify-center rounded-[8px] bg-stone-950">
                    <img className="w-[13.5rem]" src="/images/smart.png" />
                  </div>
                  <div className="gap-4">
                    <h1 className="text-3xl text-white">AI Smart Generator</h1>
                    <h1 className="text-sm text-stone-500">
                      Enabling users with minimal technical expertise to generate custom smart contracts
                    </h1>
                  </div>
                  <div>
                    <Button className="bg-button h-[2.5rem] min-w-[8rem] border-none text-xl font-bold md:hidden">
                      Generate Now
                    </Button>
                  </div>
                </div>
                <div className="flex max-w-[30rem] flex-col gap-6">
                  <div className="m-auto flex h-[15rem] w-full items-center justify-center rounded-[8px] bg-stone-950">
                    <img className="w-[13.5rem]" src="/images/audi.png" />
                  </div>
                  <div className="gap-4">
                    <h1 className="text-3xl text-white">AI Smart Auditing</h1>
                    <h1 className="text-sm text-stone-500">
                      This tool utilizes AI to conduct thorough audits of smart contracts on both zkTAO and Parobot
                    </h1>
                  </div>
                  <div>
                    <Button className="bg-button h-[2.5rem] min-w-[8rem] border-none text-xl font-bold md:hidden">
                      Audit Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-[3rem]">
                <Button className="bg-button h-[2.5rem] min-w-[15rem] border-none text-xl font-bold max-md:hidden">
                  Stake Now
                </Button>
              </div>
            </div>
            <div className="bg-optimize relative mt-[7rem] grid h-[512px] w-full grid-cols-2 items-center max-md:flex max-md:flex-col">
              <div className="">
                <img
                  className="absolute left-[5%] top-[-42%] h-[39.5rem] w-[35.5rem] max-md:left-[15%] max-md:max-w-[19.5rem]"
                  src="/images/optimize.svg"
                  alt=""
                />
              </div>
              <div className="flex max-w-[30rem] flex-col items-start max-md:absolute max-md:bottom-0 max-md:items-center">
                <h1 className="text-5xl text-white max-md:max-w-[20rem] max-md:text-2xl">
                  Especially, you can optimize your storage with simple steps
                </h1>
                <Button className="mt-[2.5rem] w-[14.5rem] border-none bg-black text-white max-md:mb-[2.5rem] max-md:mt-0 max-md:w-[6rem] max-md:text-sm">
                  Optimize Now
                </Button>
              </div>
            </div>
            <div className="mt-[9.8rem] flex flex-col gap-4 text-center text-white max-md:mt-[5rem]">
              <h1 className="text-5xl max-md:text-2xl">Tokenomic</h1>
              <h1 className="text-4xl max-md:text-xl">Total Supply: 1,000,000,000 $PARO</h1>
            </div>
          </Container>
        </div>

        <div className="bg-bottom">
          <Container className=" bottom-[1%] left-0 right-0 max-w-[calc(94.5rem_+_2rem)]">
            <div className="grid grid-cols-3 items-center py-[4rem] max-md:flex max-md:flex-col max-md:pt-[2rem]">
              <div className="mt-4 flex w-full flex-col gap-20 max-md:gap-2">
                <div className="bg-Tokenomic p-2 text-white">
                  <div className="flex items-center justify-between">
                    <div className="p-2">
                      <h1 className="text-xl font-normal max-md:text-sm">Liquidity</h1>
                      <h1 className="text-2xl font-normal max-md:text-base">850,000,000 $PARO</h1>
                    </div>
                    <h1 className="text-5xl max-md:text-2xl">85%</h1>
                  </div>
                </div>
                <div className="line-bottom max-md:hidden"></div>
                <div className="bg-Tokenomic p-2 text-white">
                  <div className="flex items-center justify-between">
                    <div className="p-2">
                      <h1 className="text-xl font-normal max-md:text-sm">Staking Reward</h1>
                      <h1 className="text-2xl font-normal max-md:text-base">60,000,000 $PARO</h1>
                    </div>
                    <h1 className="text-5xl max-md:text-2xl">6%</h1>
                  </div>
                </div>
              </div>
              <div className="m-auto flex h-[24rem] w-[24rem] items-center justify-center rounded-full bg-black opacity-75 shadow-2xl shadow-red-500 max-md:hidden">
                <img className="" src="/images/logo.svg" alt="" />
              </div>
              <div className="flex w-full flex-col gap-20 max-md:mt-2 max-md:gap-2">
                <div className="bg-Tokenomic-1 p-2 text-white">
                  <div className="flex items-center justify-between">
                    <div className="p-2">
                      <h1 className="text-xl font-normal max-md:text-sm">Airdrop</h1>
                      <h1 className="text-2xl font-normal max-md:text-base">60,000,000 $PARO</h1>
                    </div>
                    <h1 className="text-5xl max-md:text-2xl">6%</h1>
                  </div>
                </div>
                <div className="w-full border border-solid border-[#fff] max-md:hidden"></div>
                <div className="bg-Tokenomic-1 w-full p-2 text-white">
                  <div className="flex items-center justify-between">
                    <div className="p-2">
                      <h1 className="text-xl font-normal max-md:text-sm">Partnership</h1>
                      <h1 className="text-2xl font-normal max-md:text-base">30,000,000 $PARO</h1>
                    </div>
                    <h1 className="text-5xl max-md:text-2xl">3%</h1>
                  </div>
                </div>
              </div>
              <div className="m-auto hidden h-[24rem] w-[24rem] items-center justify-center rounded-full bg-black max-md:mt-[2rem] max-md:flex max-md:h-[18.5rem] max-md:w-[18.5rem]">
                <img className="" src="/images/logo.svg" />
              </div>
              <div className="mt-[10rem] hidden flex-col items-center justify-center max-md:mt-0 max-md:flex">
                <h1 className="mb-[3.5rem] text-5xl text-white max-md:my-5 max-md:text-2xl">Our Community</h1>
                <div className="flex gap-5">
                  <div className="flex h-[8rem] w-[8rem] items-center justify-center rounded-full bg-black max-md:h-[4.5rem] max-md:w-[4.5rem]">
                    <img src="/images/x.png" alt="" />
                  </div>
                  <div className="flex h-[8rem] w-[8rem] items-center justify-center rounded-full bg-black max-md:h-[4.5rem] max-md:w-[4.5rem]">
                    <img src="/images/telegram.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[14.2rem] flex flex-col items-center justify-center pb-[5rem] max-md:hidden">
              <h1 className="mb-[3.5rem] text-5xl text-white">Our Community</h1>
              <div className="flex gap-5">
                <div className="flex h-[8rem] w-[8rem] cursor-pointer items-center justify-center rounded-full bg-black">
                  <a href="https://twitter.com/Parobot_AI" target="blank">
                    <img src="/images/x.png" />
                  </a>
                </div>
                <div className="flex h-[8rem] w-[8rem] cursor-pointer items-center justify-center rounded-full bg-black">
                  <a href="https://t.me/Parobot_AI" target="blank">
                    <img src="/images/telegram.png" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div> */}
      <div className="">
        <Login />
      </div>
    </>
  )
}

export default HomePage
