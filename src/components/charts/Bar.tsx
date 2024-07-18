/* eslint-disable unicorn/filename-case */

import { lineChartData } from "@/data/fake_data"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend)

export const BarChart = () => {
  const options = {}
  return (
    <>
      <Bar options={options} data={lineChartData} />
    </>
  )
}
