/* eslint-disable unicorn/filename-case */

import { lineChartData } from "@/data/fake_data"
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const LineGraph = () => {
  const options = {}
  return (
    <>
      <Line options={options} data={lineChartData} />
    </>
  )
}
