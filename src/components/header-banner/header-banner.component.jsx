import React from "react";
import {FaCertificate , FaGraduationCap} from "react-icons/fa"
import { BsLockFill } from "react-icons/bs"
import "./header-banner.styles.css"

const HeaderBanner = () =>{
    return(
        <div className="header-banner">
            <div className="item-container">
                <BsLockFill className="banner-icon"/>
                <div className="title-container">
                    <h5>secure payment</h5>
                </div>
            </div>
            <div className="item-container">
                <FaGraduationCap className="banner-icon"/>
                <div className="title-container">
                    <h5>50% OFF For students</h5>
                </div>
            </div>
            <div className="item-container">
                <FaCertificate className="banner-icon"/>
                <div className="title-container">
                    <h5>Best quality</h5>
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner