import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";


const InventoryCost = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            top: 65, bottom: 28, right: 15
        },
        xAxis: {
            type: 'category',
            data: ["Storage", "Service", "Freight", "Oppurtunity"]
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
                data: [54278, 47894, 21478, 5412]
            }
        ],
        
        tooltip: {
            trigger: "item"
        },

        title: {
            text: "Carrying Cost of Inventory",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: "normal"
            },
            subtext: "For Dec 2022",
            subtextStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: 400
            }
        }
    };

    return (
        <div className="card inventory_cost">
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default InventoryCost;