import ReactEChart from "echarts-for-react";
import { customerWebTrafficData } from "@/Data/ChartData";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const WebAppTraffic = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            top: 40, bottom: 25, right: 12
        }, 
        series: {
            data: customerWebTrafficData.seriesValues,
            color: darkMode ? "#C77DFF" : "#9400D3",
            type: "line",
            smooth: false,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 5
        },
        xAxis: {
            type: "category",
            data: customerWebTrafficData.categoryValues
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
            text: "Web App Traffic",
            padding: [2, 5],
            textAlign: "left",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontSize: 15,
                fontWeight: "normal"
            }
        }
    };

    return (
        <div className="card customer_webTraffic">
            <ReactEChart option={eChartsOption} style={{ height: "100%" }} />
        </div>
    )
}

export default WebAppTraffic;