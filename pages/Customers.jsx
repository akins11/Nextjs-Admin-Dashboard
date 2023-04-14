import Layout from '@/Components/Layout/Layout';
import WebAppTraffic from '@/Components/Customers/WebAppTraffic';
import { CircularProgressbar } from 'react-circular-progressbar';
import { customerOverviewSummary } from '@/Data/UIData';
import { customerData } from '@/Data/TableData.js';
import { Divider } from "@mui/material";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { MdRemove } from 'react-icons/md';

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";


const Customers = () => {

    const {darkMode} = useContext(DarkModeContext);

    const setStarRating = (rating) => {
        if (rating === 0) {
          return (
            <>
            <MdRemove /><MdRemove /><MdRemove /><MdRemove /><MdRemove />
            </>
          )
        } else {
          const stars = [];
    
          for (let i = 0; i < rating; i++) {
            stars.push(<FaStar key={i} />);
          }
    
          for (let i = 0; i < 5-rating; i++) {
            stars.push(<FaRegStar key={i} />);
          }
    
          return stars;
        }
    };

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "page"}>
                <div className="row">
                    <div className="card customer_count">
                        <h3 className="title">Customer Distribution</h3>
                        <div className="bars">
                            {
                                customerOverviewSummary.map((item) => (
                                    <div key={item.id} className="bar">
                                        <div className="cd">
                                            <CircularProgressbar value={item.value}  text={item.percent} />
                                        </div>
                                        <div className="subtitle">{item.subTitle}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <WebAppTraffic />
                </div>

                {/* ------------------ */}

                <div className="row">
                    <div className="card customer_table">
                        <h3 className="title">User Transactions</h3>
                        <Divider />
                        <div className="header_space"></div>
                        <table>
                            <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Product</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Delivery Date</th>
                                <th className="center">User Rating</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                customerData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <span className="first_name">{item.firstName}</span>
                                            <span className="last_name">{item.lastName}</span>
                                        </td>
                                        <td>{item.product}</td>
                                        <td>
                                            <div>{item.orderDate}</div>
                                            <div className="muted">{item.orderTime}</div>
                                        </td>
                                        <td>
                                            <div className={`status ${item.statusColor}`}>
                                                <div className="statusName">
                                                    {item.status}
                                                </div>
                                            </div>
                                        </td>
                                        <td className={item.status !== "Delivered" ? "center" : "left"}>
                                            <div>{item.deliveryDate}</div>
                                            <div className="muted">{item.deliveryTime}</div>
                                        </td>
                                        <td className="center">{setStarRating(item.rating)}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Customers;