import { useState, useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ReactEChart from "echarts-for-react";
import { inventoryMaxMinData } from "@/Data/ChartData";

import { DarkModeContext } from "@/context/darkModeContext";

const ProductInventoryChart = () => {

    const {darkMode} = useContext(DarkModeContext);

    const productOptions = Object.keys(inventoryMaxMinData);

    const [level, setLevel] = useState("Minimum");

    const eChartsOption = {
        // backgroundColor: '#0f375f',
        grid: {
            top: 30, bottom: 80
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            }
        },
        legend: {
            show: false
        },
        xAxis: {
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yAxis: {
             splitLine: {
                lineStyle: {
                    color: darkMode ? "#2b2a2abe" : "rgba(231, 230, 230, 0.733)",
                }
            }
        },
        series: [
            {
                name: 'Level',
                type: 'line',
                color: darkMode ? "#C77DFF" : "#9400D3",
                smooth: false,
                showSymbol: false,
                data: inventoryMaxMinData[level].seriesValue
            }
        ]
    };


    return (
        <div className="card inventory_chart">
            <div className="header">
                <h3 className="title">Inventory Level</h3>
                <div className="settings">
                    <FormControl style={{ width: "8rem"}}>
                        <InputLabel id="inventory-level-select-label">Level</InputLabel>
                        <Select
                            labelId="inventory-level-select-label"
                            id="inventory-level"
                            value={level}
                            label={level}
                            onChange={(event) => setLevel(event.target.value)}
                        >
                            {
                                productOptions.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default ProductInventoryChart;