import Layout from "@/Components/Layout/Layout";
import Image from "next/image";
import OverallRating from "@/Components/Report/OverallRating";
import { userReview, marketingTeamUpdate } from "@/Data/UIData";
import { projectReportData } from "@/Data/TableData";
import { Button } from "@mui/material";
import { FaStar, FaRegStar } from 'react-icons/fa';

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const Report = () => {

    const {darkMode} = useContext(DarkModeContext);

    const userImages = ["/person1.png", "/person3.png", "/person6.png", "/person5.jpg", "/person4.jpg", "/person7.jpg"];

    const setStarRating = (rating) => {
        const stars = [];
    
        for (let i = 0; i < rating; i++) {
        stars.push(<FaStar key={i} />);
        }

        for (let i = 0; i < 5-rating; i++) {
        stars.push(<FaRegStar key={i} />);
        }

        return stars;
      };

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "page"}>
                <div className="row">
                   <div className="card report_overall">
                        <OverallRating 
                            title={"Product Review"} 
                            overallValue={4.8} 
                            numReviews={"15,547"}
                            stars={[35, 50, 10, 4, 1, 0]} 
                        />
                        <div className="space"></div>
                        <OverallRating 
                            title={"Service Review"} 
                            overallValue={4.9} 
                            numReviews={"31,547"}
                            stars={[46, 31, 18, 4, 1, 0]} 
                        />
                   </div>

                   <div className="card customer_report">
                        <h3 className="title">Latest User Review</h3>
                        {
                            userReview.map((item, index) => (
                                <div key={index} className="review_container">
                                    <div className="top">
                                        <div className="img_name">
                                            <Image src={userImages[index]} alt="user" className="img" width={35} height={35}/>
                                            <span className="name">{item.name}</span>
                                        </div>
                                        <span className="rating_icon">{setStarRating(item.rating)}</span>
                                    </div>
                                    <div className="comment">{item.comment}</div>
                                </div>
                            ))
                        }
                   </div>
                </div>
                {/* ---------------- */}
                <div className="row">
                    <div className="card report_team">
                            <h3 className="title">Team Report</h3>
                            <div className="container">
                                {
                                    marketingTeamUpdate.map((item, index) => (
                                        <div key={item.id} className="update_row">
                                            <div className="left">
                                                <Image 
                                                    src={userImages[index]} 
                                                    alt="team-member"  
                                                    width={33} 
                                                    height={33}
                                                    className="img"
                                                />
                                                <div className="description">
                                                    <h4 className="name">{item.name}</h4>
                                                    <h5 className="title">{item.title}</h5>
                                                </div>
                                            </div>
                                            <div className="view_update">
                                                <Button>View</Button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                    </div>

                    <div className="card report_project">
                        <h4 className="title">Project Report</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Team Lead</th>
                                    <th>Project</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projectReportData.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className={`img ${item.imgColor}`}>{item.imgText}</div>
                                            </td>
                                            <td>
                                                <div className="name">{item.name}</div>
                                                <div className="email">{item.email}</div>
                                            </td>
                                            <td>{item.project}</td>
                                            <td>
                                                <div className="description">{item.description}</div>
                                            </td>
                                            <td><div className={`status ${item.status}`}></div></td>
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

export default Report;