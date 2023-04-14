import Layout from "@/Components/Layout/Layout";
import ProductDetails from '@/Components/Products/ProductDetails';
import ProductOrder from '@/Components/Products/ProductOrder';
import ProductInventoryChart from '@/Components/Products/ProductInventoryChart';
import ProductPurchase from '@/Components/Products/ProductPurchase';
import { CircularProgressbar } from 'react-circular-progressbar';
import Divider from "@mui/material/Divider";

import { useContext } from "react";
import { DarkModeContext } from "@/context/darkModeContext";

const Products = () => {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <Layout>
            <div className={darkMode ? "page dark" : "page"}>
                <div className="row">
                    <ProductDetails />
                </div>
                {/* ------------------ */}
                <div className='row'>
                    <div className="card product_counts">
                        <div className="header">
                            <h3 className="title">Total Product</h3>
                            <span className="value">10</span>
                        </div>
                        <div className="body">
                            <div className="bar">
                                <CircularProgressbar value={90}  text={"90%"} />
                            </div>
                            <h4 className="subtitle">Current available products</h4>
                        </div>
                    </div>

                    <ProductOrder />
                </div>
                {/* ------------------ */}
                <div className="row">
                    <div className="card product_inventory">
                        <h3 className='title'>Inventory Level</h3>
                        <div className="ct">
                            <h4>Actual</h4>
                            <h4>Target</h4>
                        </div>
                        <div className="content">
                            <h4 className="sub_title">Minimum</h4>
                            <div className="btn">
                                <span className="value">621.4K</span>
                                <span className="value target">751.6K</span>
                            </div>
                        </div>
                        <div className="progress_bar">
                            <div className="bar orange" style={{ width: "70%"}}></div>
                        </div>
                        <div className="content">
                            <h4 className="sub_title">Maximum</h4>
                            <div className="btn">
                                <span className="value">945.2K</span>
                                <span className="value target">946.4K</span>
                            </div>
                        </div>
                        <div className="progress_bar">
                            <div className="bar" style={{ width: "95%"}}></div>
                        </div>
                        <div className="alt">
                            <h4 className="title">Average Lead Time</h4>
                            <Divider 
                                orientation="vertical" 
                                flexItem={true} 
                                variant="middle" 
                                style={{ borderColor: "white"}}
                            />
                            <span className="value">40:24:10</span>
                        </div>
                    </div>
                    <ProductInventoryChart />
                </div>
                <div className="row">
                    <ProductPurchase />
                </div>
            </div>
        </Layout>
    )
}

export default Products;