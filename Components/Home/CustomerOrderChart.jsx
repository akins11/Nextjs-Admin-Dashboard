import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const CustomerOrderChart = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOptionBar = {
        grid: {
            bottom: 20, right: 15, top: 60
        },
        xAxis: { type: 'category' },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: darkMode ? "#2b2a2abe" : "rgba(231, 230, 230, 0.733)",
                }
            }
        },
        dataset: {
            dimensions: ['value', 'customer', 'order'],
            source: [
                { value: 'Jan', "customer": 15621, "order": 645782 },
                { value: 'Feb', "customer": 18726, "order": 520245 },
                { value: 'Mar', "customer": 21234, "order": 767845 },
                { value: 'Apr', "customer": 12357, "order": 524786 },
                { value: 'May', "customer": 21426, "order": 634784 },
                { value: 'Jun', "customer": 16874, "order": 725478 },
                { value: 'Jul', "customer": 15784, "order": 978364 },
                { value: 'Aug', "customer": 21047, "order": 857412 },
                { value: 'Sep', "customer": 23358, "order": 958745 },
                { value: 'Oct', "customer": 23848, "order": 947812 },
                { value: 'Nov', "customer": 15712, "order": 1028741 },
                { value: 'Dec', "customer": 16850, "order": 1102050 }
            ]
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
                color: "#41F1B6", 
                itemStyle: {
                    borderRadius: 5
                }
            }
        ],
        
        tooltip: {
            trigger: "item"
        },

        title: {
            text: "Total Customers & Orders",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#888888",
                fontWeight: "normal"
            },
            subtext: "For the last 1 year",
            subtextStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#888888",
                fontWeight: 400
            }
        }
    };

    return (
        <div className="card customer_order">
            <ReactEChart option={eChartsOptionBar} style={{ height: "100%"}}/>
        </div>
    )
}

export default CustomerOrderChart;