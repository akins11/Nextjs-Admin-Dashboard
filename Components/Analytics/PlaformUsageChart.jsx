import ReactEChart from "echarts-for-react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const PlaformUsageChart = ({ id, data, value, handleChange, color }) => {

    const {darkMode} = useContext(DarkModeContext);

    const eChartsOption = {
        grid: {
            top: 40, right: 20, bottom: 18, left: 55
          },
        series: {
            data: data[value].seriesValue,
            type: "line",
            smooth: true,
            color: color,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            areaStyle: {
                opacity: 0.4,
            }
        },
        xAxis: {
            type: "category",
            data: data[value].categories
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
            text: "Monthly Usage",
            padding: [2, 5],
            textAlign: "left",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666;",
                fontSize: 15,
                fontWeight: "normal"
            }
        }
    };

    const radioValues = Object.keys(data);

    const radionLabel = Object.keys(data).map((str) => {
        return str.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    });

    const lenArray = new Array(radioValues.length);

    for (let i = 0; i < lenArray.length; i++) {
        lenArray[i] = i;
    }

    return (
        <div className="card platform_usage">
            <div className="input">
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby={`radio-buttons-group-label ${id}`}
                        name={id}
                        value={value}
                        onChange={(event) => handleChange(event, id)}
                    >
                        {
                            lenArray.map((indx) => (
                                <FormControlLabel 
                                    key={indx} 
                                    value={radioValues[indx]}
                                    control={<Radio />} 
                                    label={radionLabel[indx]}
                                />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <ReactEChart option={eChartsOption}/>
            </div>
        </div>
    )
}

export default PlaformUsageChart;