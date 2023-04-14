import Layout from "@/Components/Layout/Layout";

import { projectReportData } from "@/Data/TableData";
import { TiPlus } from 'react-icons/ti';

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const Manage = () => {

    const {darkMode} = useContext(DarkModeContext);
    // const teamColor = ["yellow", "green", "blue", "red"];

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "dark"}>
                <div className="row">
                    <div className="card manage_project">
                        <h4 className="title">Lead Project</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Team Lead</th>
                                    <th>Project</th>
                                    <th>Team</th>
                                    <th>Status</th>
                                    <th>Week</th>
                                    <th>Budget</th>
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
                                            <td><div className="project">{item.project}</div></td>
                                            <td>
                                                <div className="team_col">
                                                    {
                                                        item.team.map((item, index) => {
                                                            
                                                            const allColors = ["yellow", "grey", "green", "blue", "purple", "red",  "brown"];
                                                            const teamColor = [];

                                                            while (teamColor.length < 4) {
                                                                const randomIndex = Math.floor(Math.random() * allColors.length);
                                                                const randomColor = allColors[randomIndex];
                                                        
                                                                if (!teamColor.includes(randomColor)) {
                                                                    teamColor.push(randomColor)
                                                                }
                                                            }

                                                            return (
                                                                    <div 
                                                                        key={index} 
                                                                        className={`team ${teamColor[index]}`}
                                                                    >
                                                                            {item}
                                                                    </div>
                                                            )
                                                        })
                                                    }
                                                    <div className="icon_container">
                                                        <TiPlus className="icon" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td><div className={`status ${item.status}`}></div></td>
                                            <td>{item.week}</td>
                                            <td>{item.budget}</td>
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

export default Manage;