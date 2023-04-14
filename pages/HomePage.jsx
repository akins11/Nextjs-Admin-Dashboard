import { homeRevenueSummaryValues } from '@/Data/UIData';
import RevenueTrendChart from '@/Components/Home/RevenueTrendChart';
import SalesChannelRevenue from '@/Components/Home/SalesChannelRevenue';
import { salesChannelProductRevenueData } from '@/Data/TableData';
import { TbTrendingUp3 } from 'react-icons/tb';
import { totalCustomerOrderValue } from '@/Data/UIData';
import CustomerOrderChart from '@/Components/Home/customerOrderChart';

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const HomePage = () => {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "page dark" : "page"}>
                <div className="row">
                    <div className="performance_container">
                        <div className="row h_first">
                            {
                                homeRevenueSummaryValues.slice(0, 2).map((item) => (
                                    <div key={item.id} className='card box'>
                                        <h4 className="title">{item.title}</h4>
                                        <div className="divider"></div>
                                        <div className="value_section">
                                            <span className="value">{item.value}</span>
                                            <span className="icon_rate">
                                                <div>{item.rate}</div> {item.icon} 
                                            </span>
                                        </div>
                                        <span className="sub">{item.sub}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row">
                            {
                                homeRevenueSummaryValues.slice(2, 4).map((item) => (
                                    <div key={item.id} className='card box'>
                                        <h4 className="title">{item.title}</h4>
                                        <div className="divider"></div>
                                        <div className="value_section">
                                            <span className="value">{item.value}</span>
                                            <span className="icon_rate">
                                                <div>{item.rate}</div> {item.icon} 
                                            </span>
                                        </div>
                                        <span className="sub">{item.sub}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <RevenueTrendChart />
                </div>

                <div className='row'>
                    <div className="customer_container">
                        {
                            totalCustomerOrderValue.map((item) => (
                                <div key={item.id} className="card c_box">
                                    <h5 className="title">{item.title}</h5>
                                    <div className="value">
                                        <div className="sum">
                                            <h3 className="sum_value">{item.value}</h3>
                                            <span className='desc'>{item.valueDesc}</span>
                                        </div>
                                        <div className="add">
                                            <div className="value">
                                                <div className="icon"><TbTrendingUp3 /></div>
                                                <h4>{item.addValue}</h4>
                                            </div>
                                            <span className="desc">{item.addValueDesc}</span>
                                        </div>
                                    </div>
                                    <span className="percent">
                                        {item.percent}
                                        <div className="icon">
                                            <TbTrendingUp3 />
                                        </div>
                                    </span>
                                </div>
                            ))
                        }
                    </div>

                    <CustomerOrderChart />
                </div>

                <div className="row">
                    <SalesChannelRevenue />

                    <div className="card Product">
                        <h6 className="title">Revenue by Top Products</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sales Channel</th>
                                    <th>Product</th>
                                    <th>Orders</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    salesChannelProductRevenueData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.salesChannel}</td>
                                            <td>{item.product}</td>
                                            <td>{item.order}</td>
                                            <td>{item.amount}</td>
                                            <td><div className="detail">details</div></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default HomePage;