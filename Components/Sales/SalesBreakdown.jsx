import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const SalesBreakdown = () => {

    const {darkMode} = useContext(DarkModeContext);

    const purple = darkMode ? "#C77DFF" : "#9400D3";

    const eChartsOption = {
        series: [
            {
                name: "Sales",
                type: "pie",
                radius: ['40%', '70%'],
                color: ["#FFB57D", purple, "#7FD8BE"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 5,
                    borderColor: darkMode ? "#222" : '#fff',
                    borderWidth: 1
                  },

                label: {
                    show: false,
                    position: "center"
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 2101202, name: 'Driect' },
                    { value: 703354, name: 'Referral' },
                    { value: 49891, name: 'Affiliate' }
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
            show: true,
            text: "Sales Breakdown",
            textAlign: "left",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: "normal"
            }
        }
    };

    return (
        <div className="card sales_breakdown">
            <ReactEChart option={eChartsOption} styles={{ height: "70%" }}/>

            <div className="legend">
                <div className="legendCol">
                    <div className="tagTitle">
                        <div className="title">Direct</div>
                        <div className="tag orange"></div>
                    </div>
                    <div className="percentage">82%</div>
                </div>
                <div className="legendCol">
                    <div className="tagTitle">
                        <div className="title">Referral</div>
                        <div className="tag purple"></div>
                    </div>
                    <div className="percentage">10%</div>
                </div>
                <div className="legendCol">
                    <div className="tagTitle">
                        <div className="title">Affiliate</div>
                        <div className="tag green"></div>
                    </div>
                    <div className="percentage">8%</div>
                </div>
            </div>
        </div>
    )
}

export default SalesBreakdown;