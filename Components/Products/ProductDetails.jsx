import Image from "next/image";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
import { productDetailData } from "@/Data/TableData";

const ProductDetails = () => {

    const priceChange = (currentPrice, previousPrice) => {
        let change = (currentPrice - previousPrice) / previousPrice;
        let percentChange = change * 100;
        return percentChange.toFixed(2);
    }

    const productImg = [
        "/HikingBoot.jpg", "/chelsea.jpg", "/loafer.jpg", "/Sneakers.jpg", "/Boot.jpg",
        "/Brogues.jpg", "/CourtShoe.jpg", "/DerbyShoe.jpg", "/sandal.jpg", "/StilettoHeel.jpg"
    ];

    return (
        <div className='card product_details'>
            <div className="title">Details</div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Total Purchase</th>
                        <th>Current Price</th>
                        <th>Previous Price</th>
                        <th>Price Change</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productDetailData.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    <Image 
                                        className="img" 
                                        src={productImg[index]} 
                                        alt="product" 
                                        width={30} 
                                        height={30}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td className="center">
                                    <div className="details">View</div>
                                </td>
                                <td>{item.purchase}</td>
                                <td>{item.currentPrice}</td>
                                <td>{item.previousPrice}</td>
                                <td>
                                    <div>{`${priceChange(item.currentPrice, item.previousPrice)}%`}
                                    <span className="change_icon">
                                        {
                                            priceChange(item.currentPrice, item.previousPrice) > 0 ? (
                                                    <ImArrowUp2 />
                                                ) : (
                                                    <ImArrowDown2 />
                                                )
                                        }
                                    </span>
                                    </div>
                                </td>
                                <td
                                    className={`available ${item.availability === 'Available' ? 'green' : 'red'}`}
                                >
                                    {item.availability}
                                </td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetails;