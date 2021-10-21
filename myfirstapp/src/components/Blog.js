import React from "react";
import Article from "./Article";
import Widgets from "./Widgets";

function Blog(){
    return(
        <div className="container">
            <h1 className="page-title">Blog</h1>
            <div className="main-content">
                <div className="content">
                    <Article />
                </div>
                <aside className="sidebar">
                    <Widgets />
                </aside>
            </div>
        </div>
    );
}

export default Blog;