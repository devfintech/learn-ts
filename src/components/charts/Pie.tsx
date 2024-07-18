/* eslint-disable unicorn/filename-case */

import { pieChartData } from "@/data/fake_data"
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"

import { Pie } from "react-chartjs-2"

ChartJS.register(Tooltip, Legend, ArcElement)

export const PieChart = () => {
  const options = {}
  return (
    <>
      <Pie options={options} data={pieChartData} />
    </>
  )
}
