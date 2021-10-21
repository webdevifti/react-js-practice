import React from "react";
import { NavLink } from "react-router-dom";
import Widgets from "./Widgets";
import SingleArticle from "./SingleArticle";
function Single(){
    return(
        <div className="container">
            <h1 className="page-title">Single Post</h1>
            <NavLink to="/blog">Go Back</NavLink>
            <div className="main-content">
                <div className="content">
                    <SingleArticle />
                </div>
                <aside className="sidebar">
                    <Widgets />
                </aside>
            </div>
        </div>
    );
}

export default Single;