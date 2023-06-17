import React from "react"
import { Box, Skeleton, TextField, Typography, Grid, Table, styled, Button, Rating, } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Reviews from "./review/review"
import Specs from "./ProdSpecs";
import Ques from "./QuesAns";


const OfferParagraphStyle = {
    fontSize: "14px",
    fontWeight: "300"
}

const LocalOfferIconStyle = {
    color: "green",
    marginRight: "9px",
    fontSize: "15px"
}

const OfferArray = Array(5).fill(0)


function Right_Part({ product }) {

    const date = new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000);
    return (
        <>
            <head>
                <meta charset="utf-8" />
                <title>{product.ProductTitle}</title>
            </head>
            {product && <h2>{product.ProductTitle}</h2> }
            {!product && <Skeleton height={50} />}
            <p>
                <div style={{ marginTop: "-10px" }}>
                    {product && <span style={{ color: "#838484" }}>
                        <div style={{ width: "28px", height: "15px", borderRadius: "0.2rem", color: "white", display: "inline" }}>
                            <Rating value={product.ProductNumericalRating} readOnly size="small"></Rating>
                        </div>
                        &nbsp; 52 Rating&nbsp; & {product.reviews} Reviews &nbsp;
                    </span>}
                </div>
                {!product && <>
                <Skeleton height={30} />
                <Skeleton height={45} />
                </>}
                {product && <div>
                    <span style={{ fontSize: "30px" }}>
                        ₹{product.ProductSellingPrice}
                    </span>
                    <span style={{ marginLeft: "10px", color: "#838383" }}>
                        <strike>₹{product.ProductMRP}</strike>
                    </span>
                    <span style={{ marginLeft: "10px", color: "#30B131" }}>
                        {(((product.ProductMRP - product.ProductSellingPrice) / product.ProductMRP) * 100).toFixed(2)}% off
                    </span>
                </div>}
            </p>
            {product && <p>Available offers</p> }
            {!product && <Skeleton />}
            <Box>
                {OfferArray.map((ele) =>
                    <>
                        {!product && <Skeleton />}
                        {product && <p style={OfferParagraphStyle}>
                    <LocalOfferIcon style={LocalOfferIconStyle} />
                    <strong>Bank offer</strong>
                    10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above
                    <span>
                        <a href="www.google.com" style={{ textDecoration: "none", fontWeight: "500" }}>T&C</a>
                    </span>
                </p> }
                    </>
                )}
            </Box>
            {!product && <>
            <Skeleton height={35} />
            <Skeleton height={50} />
            </>}
            {product && <Table>
                <tr style={{ height: "50px" }}>
                    <td style={{ color: "#878787", fontWeight: "600" }}>Warranty</td>
                    <td style={{}}>
                        {/* <ul>2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)</ul> */}
                    </td>
                </tr>
                <tr style={{ height: "50px" }}>
                    <td style={{ color: "#878787", fontWeight: "600" }}>Delivery</td>
                    <td style={{ fontWeight: "600" }}>
                        <ul>
                            <TextField label="Enter Delivery Pincode" variant="standard" style={{ fontWeight: "600", fontSize: "0.8rem", color: "blue", verticalAlign: "baseline" }} /><a href="#" style={{ textDecoration: "none", color: "#486EEF", marginLeft: "10px", verticalAlign: "baseline" }}>Check</a>
                        </ul>
                        <ul style={{ marginTop: "-10px" }}>
                            <p style={{ fontWeight: "600", fontSize: "0.8rem" }} > Delivery by {date.toDateString()} | {product.ProductSellingPrice > 499 ? "Free" : "₹40"} </p>
                        </ul>
                    </td>
                </tr>
                <tr style={{ height: "50px" }}>
                    <td style={{ color: "#878787", fontWeight: "600", verticalAlign: "baseline" }}>Seller</td>
                    <td style={{ fontWeight: "600", verticalAlign: "baseline" }}>
                        <ul>
                            <table>
                                <tr>
                                    <td><a style={{ color: "#486EEF", textDecoration: "none" }} href="">AnkitTech</a></td>
                                    {/* Change required in below line to correct widht of 4*    */}
                                    <td><Button style={{ height: "15px", maxwidth: "27px", backgroundColor: "#486EEF", color: "white", borderRadius: "2rem", fontSize: "0.6rem", fontWeight: "600" }} endIcon={<StarOutlinedIcon style={{ marginLeft: "-6px", fontSize: "0.7rem", color: "white" }} />}> 4.4</Button></td>
                                </tr>
                            </table>
                            <li startIcon={<HelpOutlineIcon />}>
                                7 day seller replacement policy/brand assistance for device issues*<Button startIcon={<HelpOutlineIcon style={{ color: "#878787" }} />}></Button>
                            </li>
                            <li>
                                GST invoice available<Button startIcon={<HelpOutlineIcon style={{ color: "#878787" }} />}></Button>
                            </li>
                        </ul>
                    </td>

                </tr>
                <tr>
                    <td colSpan={2}>
                        <img style={{ width: "400px" }} src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" />
                    </td>
                </tr>
                <tr style={{ height: "50px" }}>
                    <td style={{ color: "#878787", fontWeight: "600", verticalAlign: "baseline" }}>Description</td>
                    <td style={{ fontSize: "14px", marginTop: "-15px", verticalAlign: "baseline" }}> &nbsp;{product.ProductDescription}</td>
                </tr>
            </Table>}
            <Specs />
            <Reviews />
            <Ques />

        </>
    )
}
export default Right_Part;