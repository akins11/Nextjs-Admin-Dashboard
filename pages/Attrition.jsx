import Layout from "@/Components/Layout/Layout";
import GenderAttrition from "@/Components/Attrition/GenderAttrition";
import AgeAttrition from "@/Components/Attrition/AgeAttrition";
import EducationAttrition from "@/Components/Attrition/EducationAttrition";
import DepartmentAttrition from "@/Components/Attrition/DepartmentAttrition";
import AttritionTrend from "@/Components/Attrition/AttritionTrend";
import { attritionStatsCardData, attritionRoleData, recentAttritionData } from "@/Data/UIData";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Divider } from "@mui/material";

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const Attrition = () => {

    const {darkMode} = useContext(DarkModeContext);

    const iconRating = (rating) => {
        const stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar key={i} style={{fontSize: "0.8rem"}} />);
        }

        for (let i = 0; i < 5-rating; i++) {
            stars.push(<FaRegStar key={i} style={{fontSize: "0.8rem"}} />);
        }

        return stars;
    }

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "page"}>
                <div className="row">
                    <div className="attrition_legend">
                        <div className="container">
                            <div className="text">Attrition</div>
                            <div className="indicator attrition"></div>
                        </div>
                        <div className="container">
                            <div className="text">Retention</div>
                            <div className="indicator retention"></div>
                        </div>
                    </div>
                </div>
                {/* --------------- */}
                <div className="row">
                    <div className="card attrition_stats">
                        {
                            attritionStatsCardData.map((item) => (
                                <div key={item.id} className="container">
                                    <div className="top">
                                        <div className="icon">{item.icon}</div>
                                        <div className="value">{item.value}</div>
                                    </div>
                                    <div className="bottom">{item.title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* --------------- */}
                <h4 className="attrition__sub">Demographics</h4>
                <div className="row">
                    <GenderAttrition />
                    <AgeAttrition />
                    <EducationAttrition />
                </div>
                {/* ---------------- */}
                <div className="row">
                    <DepartmentAttrition />

                    <div className="card attrition_role">
                        <h6 className="attrition_title">Job Role</h6>
                        <div className="container">
                            {
                                attritionRoleData.map((item) => (
                                    <div key={item.id} className="container_row">
                                        <div className="role">
                                            <div className="index">{item.index}</div>
                                            <div className="role_title">{item.jobTitle}</div>
                                        </div>
                                        <div className="value">
                                            <div className="indicator attrition">{item.attrition}</div>
                                            <div className="indicator retention">{item.retention}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* ---------------- */}
                <div className="row">
                    <AttritionTrend />

                    <div className="card attrition_recent">
                        <h6 className="attrition_title">Recent Attrition</h6>
                        {
                            recentAttritionData.map((item) => (
                                <div key={item.id} className="container">
                                    <div className="empId">
                                        <span className="id">{item.id}</span>
                                        <Divider orientation="vertical" flexItem={true} />
                                        <span>{item.role}</span>
                                        <Divider orientation="vertical" flexItem={true} />
                                        <span>{item.department}</span>
                                    </div>
                                    <div className="info">
                                        <div className="date">
                                            <div>Attrition Date:</div>
                                            <div>{item.date}</div>
                                        </div>
                                        <div className="details">
                                            <div className="text">
                                                <div>Avg. Satisfaction Score:</div>
                                                <div>Performance Rating:</div>
                                                <div>Monthly Income:</div>
                                                <div>Salary Hike:</div>
                                            </div>
                                            <div className="value">
                                                <div>{iconRating(item.avgSatScore)}</div>
                                                <div>{iconRating(item.performanceRating)}</div>
                                                <div>{item.monthlyIncome}</div>
                                                <div>{item.salaryHike}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider varient="middle" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Attrition;