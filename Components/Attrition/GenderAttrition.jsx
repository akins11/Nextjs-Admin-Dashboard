import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";


const GenderAttrition = () => {

    const {darkMode} = useContext(DarkModeContext);

    const purple = darkMode ? "#C77DFF" : "#9400D3";

    const eChartsMaleOption = {
        grid: {
            top: "2%", bottom: "5%"
        },
        series: [
            {
                name: "Male",
                type: "pie",
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                color: ["#FFB57D", purple],
                itemStyle: {
                    borderColor: darkMode ? "#222" : "#fff",
                    borderWidth: 3,
                    borderRadius: 6
                },
                label: {
                    show: false,
                    position: "center"
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 150, name: 'Attrition' },
                    { value: 732, name: 'Retention' }
                ]
            }
        ],
    
        tooltip: {
            trigger: "item"
        },
        legend: {
            show: false
        },
        title: {
            text: "Male",
            textStyle: {
                fontSize: "0.8rem",
                fontWeight: 400,
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
            }
        }
      };

    const eChartsFemaleOption = {
        grid: {
            top: "2%", bottom: "5%"
        },
        series: [
            {
                name: "Female",
                type: "pie",
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                color: ["#FFB57D", purple],
                itemStyle: {
                    borderColor: darkMode ? "#222" : "#fff",
                    borderWidth: 3,
                    borderRadius: 6
                },
                label: {
                    show: false,
                    position: "center"
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 87, name: 'Attrition' },
                    { value: 501, name: 'Retention' }
                ]
            }
        ],

        tooltip: {
            trigger: "item"
        },
        legend: {
            show: false
        },
        title: {
            text: "Female",
            textStyle: {
                fontSize: "0.8rem",
                fontWeight: 400,
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
            }
        }
    };


    return (
        <div className="card attrition_gender">
            <h5 className="attrition_title">Gender</h5>
            <div className="container">
                <ReactEChart option={eChartsMaleOption} style={{height: "200px"}} />
            </div>
            <div className="container">
                <ReactEChart option={eChartsFemaleOption} style={{height: "200px"}} />
            </div>            
        </div>
    )
}

export default GenderAttrition;