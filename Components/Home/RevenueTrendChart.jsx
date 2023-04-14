import ReactEChart from "echarts-for-react";
import { homeRevenueTrendData } from "@/Data/ChartData";

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const RevenueTrendChart = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            top: 36, right: 15, bottom: 20, left: 55
          },
        series: {
            data: homeRevenueTrendData.value,
            color: darkMode ? "#C77DFF" : "#9400D3",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 10
        },
        xAxis: {
            type: "category",
            data: homeRevenueTrendData.months
        },
        yAxis: {
            type: "value",
            splitLine: {
                lineStyle: {
                    color: darkMode ? "#2b2a2abe" : "rgba(231, 230, 230, 0.733)",
                }
            }
        },
        tooltip: {
            trigger: "axis"
        },
        title: {
            show: true,
            text: "Revenue Generated | 2022",
            padding: [2, 5],
            textAlign: "left",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#6E6E6E",
                fontSize: 17,
                fontWeight: "normal"
            }
        }
    };

    return (
        <div className="card revenue_container">
            <ReactEChart option={eChartsOption} style={{ height: "100%" }} />
        </div>
    )
}

export default RevenueTrendChart;