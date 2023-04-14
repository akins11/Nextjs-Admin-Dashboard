import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";


const AgeAttrition = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            right: 15, bottom: 25, top: 35, left: 38
        },
        legend: {
            show: false
        },
        tooltip: {},
        dataset: {
          dimensions: ['Age', 'Attrition', 'Retention'],
          source: [
            { Age: '<25', "Attrition": 25, "Retention": 34 },
            { Age: '20-34', "Attrition": 123, "Retention": 325},
            { Age: '35-44', "Attrition": 102, "Retention": 315 },
            { Age: '45-55', "Attrition": 52, "Retention": 186 },
            { Age: '> 55', "Attrition": 11, "Retention": 28 },
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
                color: "#FFB57D",
                itemStyle: {
                    borderRadius: 5
                }
            }, 
            {
                type: 'bar',
                color: darkMode ? "#C77DFF" : "#9400D3",
                itemStyle: {
                    borderRadius: 5
                }
            }
        ]
    };

    return (
        <div className="card attrition_age">
            <h6 className="attrition_title">Age Group</h6>
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default AgeAttrition;