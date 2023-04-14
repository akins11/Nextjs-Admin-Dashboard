import ReactEChart from "echarts-for-react";
import { attritionTrendData } from "@/Data/ChartData";
import { ImArrowDown2 } from "react-icons/im";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const AttritionTrend = () => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            top: 40, right: 20, bottom: 80, left: 22
          },
        series: {
            data: attritionTrendData.value,
            type: "line",
            smooth: true,
            color: "#FFB57D",
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 12,
        },
        xAxis: {
            type: "category",
            data: attritionTrendData.date
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
            show: false
        }
    };


    return (
        <div className="card attrition_trend">
            <h6 className="attrition_title">Attrition Trend</h6>
            <div className="details">
                <ImArrowDown2 />
                <span className="percentag_change">85.5%</span>
                <span className="text">vs previous month</span>
            </div>
            <ReactEChart option={eChartsOption} style={{height: "100%"}}/>
        </div>
    )
}


export default AttritionTrend;