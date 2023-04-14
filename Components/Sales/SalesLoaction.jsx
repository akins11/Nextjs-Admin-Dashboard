import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const SalesLoaction = () => {

    const {darkMode} = useContext(DarkModeContext);

    const color = darkMode ? ["#F06542", "#7FD8BE"] : ["#9400D3", "#CB997E"];

    const eChartsOption = {
        // grid: {
        //     bottom: 30, top: 10
        // },
        legend: {
            data: ['Last Month', 'This Month'],
            bottom: "5%",
            left: "center",
            padding: [-20, 5],
            textStyle: {
                color: darkMode ? "rgb(253, 251, 251)" :  "rgb(20, 20, 20)",
            }
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: 'Shanghai', max: 195000 },
                { name: 'Cario', max: 210500 },
                { name: 'New York', max: 176040 },
                { name: 'London', max: 138040 },
                { name: 'Berlin', max: 158004 },
                { name: 'Tokyo', max: 219057 }
            ]
        },
        series: [
            {
                name: 'Last vs This Week',
                type: 'radar',
                color: color,
                data: [
                {
                    value: [158000, 179200, 123000, 131000, 125040, 190509],
                    name: 'Last Month'
                },
                {
                    value: [141000, 145000, 144900, 125004, 106204, 182020],
                    name: 'This Month'
                }
                ]
            }
        ],

        tooltip: {
            show: true
        }
    };

    return (
        <div className="card sales_location">
            <ReactEChart option={eChartsOption} style={{height: "100%"}}/>
        </div>
    )
}

export default SalesLoaction;