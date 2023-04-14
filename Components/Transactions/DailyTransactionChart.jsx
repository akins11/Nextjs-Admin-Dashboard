import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const DailyTransactionChart = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            top: 50, bottom: 55, right: 15
        },
        xAxis: {
            type: 'category',
            data: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: darkMode ? "#2b2a2abe" : "rgba(231, 230, 230, 0.733)",
                }
            }
        },
        series: [
            {
                name: "Transaction",
                type: 'line',
                color: darkMode ? "#C77DFF" : "#9400D3",
                data: [845, 794, 821, 811, 787, 806, 846],
                smooth: false,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 10,
                areaStyle: {
                    opacity: 0.4
                }
            }
        ],
        
        tooltip: {
            trigger: "item"
        }
    };


    return (
        <div className="card daily_transaction">
            <h3 className="title">Daily Transaction</h3>
            <h6 className="sub_title">Last 7 days</h6>
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default DailyTransactionChart;