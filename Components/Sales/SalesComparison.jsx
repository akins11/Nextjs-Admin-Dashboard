import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";


const SalesComparison = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            bottom: 55, right: 20
        },
        legend: {
            textStyle: {
                color: darkMode ? "rgb(253, 251, 251)" :  "rgb(20, 20, 20)",
            }
        },
        tooltip: {},
        dataset: {
            dimensions: ['product', 'Last Month', 'This Month'],
            source: [
            { product: 'Product 1', "Last Month": 124365, "This Month": 145000},
            { product: 'Product 2', "Last Month": 150410, "This Month": 124365 },
            { product: 'Product 3', "Last Month": 165301, "This Month": 132014 },
            { product: 'Product 4', "Last Month": 115487, "This Month": 123478 },
            { product: 'Product 5', "Last Month": 175487, "This Month": 163478 },
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: darkMode ? "#2b2a2abe" : "rgba(231, 230, 230, 0.733)",
                }
            }
        },
        series: [
            { 
                type: 'bar',
                color: darkMode ? "#C77DFF" : "#9400D3",
                itemStyle: {
                    borderRadius: 5
                }
            },
            { 
                type: 'bar',
                color: "#FFB57D",
                itemStyle: {
                    borderRadius: 5
                }
            }
        ]
    };

    return (
        <div className="card sales_compare">
            <div className="title">Last Month vs This Month</div>
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default SalesComparison;