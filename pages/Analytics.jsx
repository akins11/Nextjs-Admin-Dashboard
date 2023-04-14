import { useState, useContext } from 'react';
import Layout from '@/Components/Layout/Layout';
import { platformCardsItems, expensesSummaryItems, inventorySummaryItems } from '@/Data/UIData';
import PlaformUsageChart from '@/Components/Analytics/PlaformUsageChart';
import TotalExpensesChart from '@/Components/Analytics/TotalExpensesChart';
import ExpensesCategoryChart from '@/Components/Analytics/ExpensesCategoryChart';
import InventoryCost from '@/Components/Analytics/InventoryCost';
import { platformUsageUsersData, platformUsageData } from '@/Data/ChartData';
import { CircularProgressbar } from 'react-circular-progressbar';

import { DarkModeContext } from "@/context/darkModeContext";

const Analytics = () => {
    const {darkMode} = useContext(DarkModeContext);

    const [userUsagevalue, setUserUsageValue] = useState("new_users");
    const [platformUsageValue, setPlatformUsageValue] = useState("app");

    const handleChange = (event, id) => {
        if (id === "user_usage") {
            setUserUsageValue(event.target.value);

        } else if (id === "platform_usage") {
            setPlatformUsageValue(event.target.value);
        }
      };

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "page"}>
                <h3 className="section_title">Platform Usage</h3>
                <div className="row">
                    <div className="platform_summary">
                        {
                            platformCardsItems.map((item) => (
                                <div key={item.id} className={`card box ${item.rateColor}`}>
                                    <div className="firstrow">
                                        <div className="icon_box">
                                            {item.appIcon}
                                        </div>
                                        <h3 className="title">{item.title}</h3>
                                    </div>
                                    <div className="secondrow">
                                        <div className="value">{item.value}</div>
                                        <div className={`value_rate ${item.rateColor}`}>
                                            {item.rate} 
                                            <span className="rate_icon">{item.rateIcon}</span>
                                        </div>
                                    </div>
                                    <div className="thirdrow">
                                        Last 31 days.
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    <PlaformUsageChart 
                        id="user_usage"
                        data={platformUsageUsersData}
                        value={userUsagevalue}
                        handleChange={handleChange}
                        color="#F06542"
                    />
                    <PlaformUsageChart 
                        id="platform_usage"
                        data={platformUsageData}
                        value={platformUsageValue}
                        handleChange={handleChange}
                        color="#7FD8BE"
                    />
                </div>
                <h3 className="section_title">Expenses</h3>
                <div className="row">
                    {
                        expensesSummaryItems.map((item) => (
                            <div key={item.id} className="card expenses_breakdown">
                                <div className="header">
                                    <h3 className="title">{item.title}</h3>
                                    <div className="header_icon">{item.headerIcon}</div>
                                </div>
                                <h2 className="value">{item.value}</h2>
                                <span className="sub">
                                    {item.subIcon} {item.subValue} vs Dec 2022
                                </span>
                            </div>
                        ))
                    }
                </div>
                
                <div className="row">
                    <TotalExpensesChart />
                    <ExpensesCategoryChart />
                </div>
                <h3 className="section_title">Inventory</h3>
                <div className="row">
                    <div className="inventory_summary">
                        {
                            inventorySummaryItems.map((item) => (
                                <div key={item.id} className="card box">
                                    <div className="header">
                                        {item.hIcon}
                                        <h3 className="title">{item.title}</h3>
                                    </div>
                                    <span className="value_box">
                                        <h2 className="value">{item.value}</h2>
                                    </span>
                                    <span className="sub">
                                        {item.percent} {item.percentIcon} vs Dec 2022
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="card inventory_score">
                        <h3 className="title">Optimized Inventory</h3>
                        <div className="progress">
                            <CircularProgressbar value={91}  text={"91.3%"} />
                        </div>

                        <div className="divider"></div>
                            
                        <div className="desc">
                            <div className="l_desc">
                                <h4>90.67%</h4>
                                <span>Initial set target</span>
                            </div>
                            <div className="l_desc">
                                <h4>0.94%</h4>
                                <span>Out of stock items</span>
                            </div>
                        </div>
                    </div>
                    <InventoryCost />
                </div>
                <h3 className="section_title">Lead Time</h3>
                <div className="row">

                </div>
            </div>
        </Layout>
    )
}

export default Analytics;