import LinearProgress from "@mui/material/LinearProgress";
import { Divider } from "@mui/material";
import { FaRegStar } from 'react-icons/fa';

// The stars prop must be an array of the percentage of customers rating from 5-stars to 0-stars.

const OverallRating = ({ title, overallValue, numReviews, stars }) => {

    const starIndex = [5, 4, 3, 2, 1, 0];                // Change this

    return (
        <div className="container">
            <div className="header">
                <div className="top">
                    <h4 className="title">{title}</h4>
                    <FaRegStar />
                    <h4 className="title">{overallValue}</h4>
                </div>
                <div className="bottom">{numReviews} Total</div>
            </div>

            <Divider variant="middle"  />

            {
                starIndex.map((item, index) => (
                    <div key={item} className="r first">
                        <h5 className="star">{`${item}-Star`}</h5>
                        <div className="progress_bar">
                            <div className="bar" style={{width: `${stars[index]}%`}}></div>
                        </div>
                        <h5 className="value_title">{ `${stars[index]}%` }</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default OverallRating