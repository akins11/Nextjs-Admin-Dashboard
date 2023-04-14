import { useState, useContext } from "react";
import Layout from "@/Components/Layout/Layout";
import Divider from "@mui/material/Divider";
import SalesTrendChart from '@/Components/Sales/SalesTrendChart';
import SalesBreakdown from "@/Components/Sales/SalesBreakdown";
import SalesLoaction from "@/Components/Sales/SalesLoaction";
import SalesComparison from "@/Components/Sales/SalesComparison";
import { lastSalesTableData } from "@/Data/tableData";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";

import { DarkModeContext } from "@/context/darkModeContext";

const Sales = () => {

    const {darkMode} = useContext(DarkModeContext);

    const [numRows, setNumRows] = useState(5);

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "page"}>
                <div className="row">
                    <div className="card stats_container">
                        <div className="top">
                            <h3 className="title">Recent Sales</h3>
                            <div className="subtitle">
                                <div className="value_name">
                                    Total Yesterday
                                    <span>Last 24 hours</span>
                                </div>
                                <div className="value add">21,265</div>
                            </div>
                            <div className="subtitle">
                                <div className="value_name">
                                    Total Last week
                                    <span>2022-21-31 - 2022-21-31</span>
                                </div>
                                <div className="value">85,466</div>
                            </div>
                            <div className="subtitle">
                                <div className="value_name">
                                    Total Last Month
                                    <span>December 2022</span>
                                </div>
                                <div className="value">185,021</div>
                            </div>
                        </div>

                        <div className="footer">
                            <div className="side">
                                <span className="title">Day</span>
                                <span className="value">13% {<ImArrowUp2 />}</span>
                            </div>
                            <Divider 
                                orientation="vertical" 
                                flexItem={true} 
                                variant="middle" 
                                style={{ borderColor: "white"}}
                            />
                            <div className="side">
                                <span className="title">Week</span>
                                <span className="value">-5% {<ImArrowDown2 />}</span>
                            </div>
                            <Divider 
                                orientation="vertical" 
                                flexItem={true} 
                                variant="middle" 
                                style={{ borderColor: "white"}}
                            />
                            <div className="side">
                                <span className="title">Month</span>
                                <span className="value">3% {<ImArrowUp2 />}</span>
                            </div>
                        </div>
                    </div>
                    <SalesTrendChart />
                </div>
                {/* ------------------ */}
                <div className="row">
                    <div className={`card latest_sales ${numRows > 5 ? "add-veritical-scroll" : ""}`}>
                        <div className="header">
                            <h3 className="title">Most Recent Sales</h3>

                            <FormControl style={{ width: "6rem"}}>
                                <InputLabel id = "simple-select-label">Rows</InputLabel>
                                <Select
                                    labelId="simple-select-label"
                                    id="recent-sales-nrows"
                                    value={numRows}
                                    label="5"
                                    onChange={(event) => setNumRows(event.target.value)}
                                >
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Product</th>
                                    <th>Platform</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lastSalesTableData.slice(0, numRows).map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className={`img ${item.color}`}>
                                                    {item.imgText}
                                                </div>
                                            </td>
                                            <td> 
                                                <div  className="customer_detail">
                                                    {item.name} 
                                                    <span className="muted">{item.loaction}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="date">
                                                    <span>{item.date}</span>
                                                    <span className="muted">{item.time}</span>
                                                </div>
                                            </td>
                                            <td>{item.product}</td>
                                            <td><span>{item.platform}</span></td>
                                            <td><div className="detail">Details</div></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <SalesBreakdown />
                </div>
                {/* ------------------ */}
                <div className="row">
                    <SalesComparison />
                    <SalesLoaction />
                </div>
            </div>
        </Layout>
    )
}

export default Sales;