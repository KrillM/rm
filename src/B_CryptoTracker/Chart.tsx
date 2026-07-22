import { useQuery } from "react-query";
import { fetchCoinHist } from "./api";
import ApexCharts from "react-apexcharts";

interface IHistData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface IChartProps {
  coinId: string;
  isLightTheme: boolean
}

function Chart({coinId, isLightTheme}:IChartProps) {
  const {isLoading, data} = useQuery<IHistData[]>(
    ["ohlcv", coinId], 
    () => fetchCoinHist(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <>
      <div>
          { isLoading ? "Loading Chart..." : 
          <ApexCharts 
            type="line" 
            series={[
              {
                name: "Price",
                data: data?.map((price) => price.close) ?? [],
              },
            ]}
            options={{
              theme: {
                mode: isLightTheme ? "light" : "dark",
              },
              chart: {
                height:300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: {show: false},
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis : {show: false},
              xaxis: {
                axisBorder: {show: false},
                axisTicks: {show: false},
                labels: {show: false},
                type: "datetime",
                categories: data?.map((price)=> price.time_close)
              },
              fill:{
                type:"gradient",
                gradient: {gradientToColors:["#0be881"], stops: [0, 100]}
              },
              colors: ["#0fbcf9"],
              tooltip:{
                y: {
                  formatter: (value) => `${value.toFixed(2)}`
                }
              }
            }}
        />}
      </div>
    </>
  );
}

export default Chart;