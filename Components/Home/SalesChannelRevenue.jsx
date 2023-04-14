import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const SalesChannelRevenue = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            bottom: 25
        },
        series: [
            {
                name: "Revenue",
                type: "pie",
                radius: ['40%', '70%'],
                itemStyle: {
                    borderRadius: 6,
                    borderColor: darkMode ? "#222" : "#FFFFFF",
                    borderWidth: 2
                  },
                avoidLabelOverlap: false,
                color: ["#9400D3", "#FB9649", "#41F1B6"],
                label: {
                    show: false,
                    position: "center"
                },
    
                labelLine: {
                    show: false
                },

                data: [
                    { value: 1.5, name: 'Web Platforms' },
                    { value: 0.85, name: 'Stores' },
                    { value: 0.52, name: 'Agents' },
                ]
            }
        ],
    
        tooltip: {
            trigger: "item"
        },
        legend: {
            bottom: "5%",
            left: "center",
            padding: [-15, 5],
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
            }
        },
        title: {
            show: true,
            text: "Revenue from Sales Channel",
            textAlign: "left",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: "normal",
                fontSize: 17
            },
            subtext: "For 2022 (in Millions)",
            subtextStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: "normal",
                fontSize: 12
            }
        }
    };

    return (
        <div className="card sales_channel">
            <ReactEChart option={eChartsOption} style={{ height: "100%" }} />
        </div>
    )
}

export default SalesChannelRevenue;