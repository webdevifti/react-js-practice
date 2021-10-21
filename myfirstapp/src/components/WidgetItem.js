import React from "react";
function WidgetItem(){
    const r = [ 
                {
                    id: 1,
                    slug: "this-is-the-title",
                    title: "this is the title"
                },
                {
                    id: 2,
                    slug: "this-is-the-title",
                    title: "this is the title"
                },
                {
                    id: 3,
                    slug: "this-is-the-title",
                    title: "this is the title"
                },
                {
                    id: 4,
                    slug: "this-is-the-title",
                    title: "this is the title"
                }
            ];
    return(
        <div className="widgets">
            <h3 className="widget-title">This is a widget title</h3>
            <ul>
                {r.map((v,k) => {
                    return <li key={k}><a href={v.slug}>{v.title}</a></li>
                })}
            </ul>
        </div>
        
    )
}
export default WidgetItem;