import { BarChart } from "@/components/charts/Bar"
import { LineGraph } from "@/components/charts/Line"
import { PieChart } from "@/components/charts/Pie"
import { Container } from "@/components/layouts/container"

const RechartPage = () => {
  return (
    <>
      <div className="">
        <Container>
          <h1 className="p-4 text-center">Line</h1>
          <LineGraph />

          <h1 className="p-4 text-center">Bar</h1>
          <BarChart />

          <h1 className="p-4 text-center">Pie</h1>
          <PieChart />
        </Container>
      </div>
    </>
  )
}

export default RechartPage
