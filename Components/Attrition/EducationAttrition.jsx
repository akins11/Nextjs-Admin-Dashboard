import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const EducationAttrition = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            left: 120, bottom: 30, right: 15, top: 30
        },
        legend: {
            show: false
        },
        tooltip: {},
        dataset: {
          dimensions: ['Education', 'Attrition', 'Retention'],
          source: [
            { Education: "Doctoral Degree", "Attrition": 5, "Retention": 43 },
            { Education: 'High School', "Attrition": 31, "Retention": 139 },
            { Education: "Associates Degree", "Attrition": 44, "Retention": 238 },
            { Education: "Master's Degree", "Attrition": 58, "Retention": 340},
            { Education: "Bachelor's Degree", "Attrition": 99, "Retention": 473 }
          ]
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    color: darkMode ? "#2b2a2abe" : "rgba(231, 230, 230, 0.733)",
                }
            }
        },
        yAxis: { type: 'category' },
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
        <div className="card attrition_edu">
             <h6 className="attrition_title">Education</h6>
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default EducationAttrition;