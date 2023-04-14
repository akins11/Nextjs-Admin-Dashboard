import { useState, useContext } from "react";
import ReactEChart from "echarts-for-react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { salesTrendData } from "@/Data/ChartData";

import { DarkModeContext } from "@/context/darkModeContext";

const SalesTrendChart = () => {
    const {darkMode} = useContext(DarkModeContext);

    const [salesTrendType, setSalesTrendType] = useState("week");

    const eChartsOption = {
        grid: {
             right: 15, bottom: 26, left: 50
            },
        series: {
            data: salesTrendData[salesTrendType].seriesValues,
            type: "line",
            smooth: false,
            showSymbol: false,
            color: darkMode ? "#C77DFF" : "#9400D3",
            areaStyle: {
                opacity: 0.3
            }
        },
        xAxis: {
            type: "category",
            data: salesTrendData[salesTrendType].categoryValues
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
            text: `Last ${salesTrendType.charAt(0).toUpperCase() + salesTrendType.slice(1)} Sales`,
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
        <div className='card sales_trend'>
            <div className="input">
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby={`sales-trend-radio-buttons-group`}
                    name="sales-trend"
                    value={salesTrendType}
                    onChange={(event) => setSalesTrendType(event.target.value)}
                >
                    <FormControlLabel value="week" control={<Radio />} label="week" />
                    <FormControlLabel value="month" control={<Radio />} label="Month" />
                </RadioGroup>
            </FormControl>
            </div>
            <div className="chart">
                <ReactEChart option={eChartsOption} styles={{ height: "100%" }}/>
            </div>
        </div>
    )
}

export default SalesTrendChart;