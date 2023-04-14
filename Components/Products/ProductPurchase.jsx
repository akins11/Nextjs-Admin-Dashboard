import { useState, useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import ReactEChart from "echarts-for-react";
import { productPurchaseBarLineData } from "@/Data/ChartData";

import { DarkModeContext } from "@/context/darkModeContext";


const ProductPurchase = () => {

    const {darkMode} = useContext(DarkModeContext);

    const productOptions = Object.keys(productPurchaseBarLineData);

    const [product, setProduct] = useState("loafer");

    const eChartsOption = {
        // backgroundColor: '#0f375f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            }
        },
        legend: {
            data: ['Orders', 'Purchases'],
            textStyle: {
                color: darkMode ? "rgb(253, 251, 251)" :  "rgb(20, 20, 20)",
            }
        },
        xAxis: {
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yAxis: {
            splitLine: { show: false },
        },
        series: [
            {
                name: 'Orders',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                color: "#41F1B6",
                symbolSize: 15,
                data: productPurchaseBarLineData[product].order
            },
            {
                name: 'Purchases',
                type: 'bar',
                color: darkMode ? "#C77DFF" : "#9400D3",
                itemStyle: {
                    borderRadius: 5
                },
                barWidth: 27,
                data: productPurchaseBarLineData[product].purchase
            }
        ]
    };

    return (
        <div className="card product_purchase">
            <div className="header">
                <h3 className="title">Product Order & Purchase</h3>
                <div className="settings">
                    <FormControl style={{ width: "9rem"}}>
                        <InputLabel id="purchase-order-select-label">Product</InputLabel>
                        <Select
                            labelId="purchase-order-select-label"
                            id="product-order-purchase"
                            value={product}
                            label={product}
                            onChange={(event) => setProduct(event.target.value)}
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
            <ReactEChart option={eChartsOption} style={{ height: "400px"}}/>
        </div>
    )
}

export default ProductPurchase;