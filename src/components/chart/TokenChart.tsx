import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js"
import { FC } from "react"
import { Line } from "react-chartjs-2"
import { ChartProps } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
)

interface TokenChartProps extends ChartProps<"line"> {}

export const TokenChart: FC<TokenChartProps> = (props) => {
  return <Line {...props} />
}
