import ReactEChart from "echarts-for-react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const TransactionDC = () => {

    const {darkMode} = useContext(DarkModeContext);

    const purple = darkMode ? "#C77DFF" : "#9400D3";

    const eChartsOption = {
        grid: {
            top: 40, bottom: 50
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '0%',
          left: 'center',
          textStyle: {
            color: darkMode ? "rgb(253, 251, 251)" :  "rgb(20, 20, 20)",
        }
        },
        series: [
          {
            name: 'Transactions',
            type: 'pie',
            radius: ['40%', '70%'],
            color: [purple, "#41F1B6", "#FB9649"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 6,
              borderColor: darkMode ? "#222" : '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 4.6, name: 'Web Store' },
              { value: 3.1, name: 'Store' },
              { value: 1.1, name: 'Agent' }
            ]
          }
        ]
    };

    return (
        <div className="card distribution_channel">
            <h3 className="title">Transactions By Distribution Channel | <span className="sub">In Thousands</span></h3>
            <ReactEChart option={eChartsOption} style={{ height: "90%"}}/>
        </div>
    )
}

export default TransactionDC;