import ReactEChart from "echarts-for-react";
import { totalExpensesData } from "@/Data/ChartData";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const TotalExpensesChart = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            top: 55, bottom: 20, right: 15
        },
        xAxis: {
            type: 'category',
            data: totalExpensesData.months
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
                name: "Expenses",
                type: 'bar',
                color: darkMode ? "#C77DFF" : "#9400D3",
                itemStyle: {
                    borderRadius: 5
                },
                data: totalExpensesData.value
            }
        ],
        
        tooltip: {
            trigger: "item"
        },

        title: {
            text: "Total Expenses",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: "normal"
            },
            subtext: "For 2022",
            subtextStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: 400
            }
        }
    };

    return (
        <div className="card total_expenses">
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default TotalExpensesChart;