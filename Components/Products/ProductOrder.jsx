import ReactEChart from "echarts-for-react";
// import { productOrderBarData } from "@/Data/ChartData";
import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";


const ProductOrder = () => {

    const {darkMode} = useContext(DarkModeContext);

    const productOrderBarColor = darkMode ? "#C77DFF" : "#9400D3";

    const productOrderBarData = {
        categoryData: ["Loafer", "Court Shoe", "Sneakers", "Stiletto Heel", "Derby Shoe"],
        seriesData: [
            {
                value: 416,
                itemStyle: {
                color: productOrderBarColor
                }
            },
            {
                value: 420,
                itemStyle: {
                color: productOrderBarColor
                }
            },
            {
                value: 487,
                itemStyle: {
                color: productOrderBarColor
                }
            },
            {
                value: 512,
                itemStyle: {
                color: productOrderBarColor
                }
            },
            {
                value: 541,
                itemStyle: {
                color: darkMode ? "#c8baf8" : "#B29EF8",
                }
            },
        ]
    };

    const eChartsOption = {
        grid: {
            left: 90, bottom: 30
        },
        xAxis: {
            type: 'value',      
            splitLine: {
                lineStyle: {
                    color: darkMode ? "#2b2a2abe" : "rgba(231, 230, 230, 0.733)",
                }
            }
        },
        yAxis: {
            type: 'category',
            data: productOrderBarData.categoryData
        },
        series: [
            {
                name: "Orders",
                type: 'bar',
                itemStyle: {
                    borderRadius: 8
                },
                data: productOrderBarData.seriesData
            }
        ],
        
        tooltip: {
            trigger: "item"
        },

        title: {
            text: "Top Products By Number of Order",
            textStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: "normal"
            },
            subtext: "Last Week",
            subtextStyle: {
                color: darkMode ? "rgb(238, 234, 234)" : "#666666",
                fontWeight: 400
            }
        }
    };

    return (
        <div className="card product_order">
            <ReactEChart option={eChartsOption} style={{ height: "100%"}}/>
        </div>
    )
}

export default ProductOrder;