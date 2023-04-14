import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";



const DepartmentAttrition = () => {

    const {darkMode} = useContext(DarkModeContext);

    const purple = darkMode ? "#C77DFF" : "#9400D3";

    const AttributeDepartmentChart = (depName, attritionValue, retentionValue, titleText) => {
        return (
            {
                // grid: {
                //     top: "2%", bottom: "5%"
                // },
                series: [
                    {
                        name: depName,
                        type: "pie",
                        radius: ["40%", "70%"],
                        avoidLabelOverlap: false,
                        color: ["#FFB57D", purple],
                        itemStyle: {
                            borderColor: darkMode ? "#222" : "#fff",
                            borderWidth: 4,
                            borderRadius: 5
                        },
                        label: {
                            show: false,
                            position: "center"
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: attritionValue, name: 'Attrition' },
                            { value: retentionValue, name: 'Retention' }
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
                    text: titleText,
                    textStyle: {
                        fontSize: "0.8rem",
                        fontWeight: 400,
                        color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                    }
                }
            }
        )
    };

    const RD = AttributeDepartmentChart("R & D", 133, 828, "R & D");
    const Sales = AttributeDepartmentChart("Sales", 92, 354, "Sales");
    const HR = AttributeDepartmentChart("HR", 12, 51, "HR")


    return (
        <div className="card attribute_dep">
            <h6 className="attrition_title">Departmant</h6>
            <div className="container_row">
                <div className="container">
                    <ReactEChart option={RD} style={{height: "100%"}} />
                </div>
                <div className="container">
                    <ReactEChart option={Sales} style={{height: "100%"}} />
                </div>
                <div className="container">
                    <ReactEChart option={HR} style={{height: "100%"}} />
                </div>
            </div>
        </div>
    )
}

export default DepartmentAttrition;