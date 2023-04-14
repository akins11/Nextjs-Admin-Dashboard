import Layout from "@/Components/Layout/Layout";
import DailyTransactionChart from "@/Components/Transactions/DailyTransactionChart";
import TransactionDC from "@/Components/Transactions/TransactionDC";
import { CountryTransactionData } from "@/Data/TableData";

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";



const Transactions = () => {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "page"}>
                <div className="row">
                    <div className="card transaction_summary">
                        <h3 className="title">Transactions</h3>
                        <div className="content">
                            <div className="this_year">
                                <h3 className="title">This Year</h3>
                                <div className="container">
                                    <h2 className="value">8.5K</h2>
                                </div>
                            </div>
                            <div className="last_year">
                                <h3 className="title">Last Year</h3>
                                <div className="container">
                                    <h2 className="value">1.2M</h2>
                                </div>
                            </div>
                        </div>
                        <div className="sub_info">
                            <h4 className="lw">Last Week</h4>
                            <h4 className="lw"> | </h4>
                            <h3 className="lw">895</h3>
                        </div>
                    </div>

                    <DailyTransactionChart />
                </div>
                {/* ------------------ */}
                <div className="row">
                    <TransactionDC />

                    <div className="card country_transactions">
                        <table cellSpacing={"0"} cellPadding={"0"}>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Country</th>
                                    <th>Transaction</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    CountryTransactionData.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="position">
                                                {index+1}
                                                <sup className="sup">{item.postiion}</sup>
                                            </td>
                                            <td>{item.country}</td>
                                            <td>{item.transaction}</td>
                                            <td className="access">
                                                <span 
                                                    className={`a ${item.accessibility === 'Accessible' ? 'green' : 'red'}`}
                                                >
                                                    {item.accessibility}
                                                </span>
                                            </td>
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

export default Transactions;