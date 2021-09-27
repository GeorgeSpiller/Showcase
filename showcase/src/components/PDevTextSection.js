import React from 'react'
export default function PDevTextSection({title, location, paragraph1, paragraph2, paragraph3, link}) {


    console.log(link)
    var linkSection = null
    if (link) {
        linkSection = <a style={{color: "#FFCAC6"}} href={link}> Find out more. </a>
        console.log("changed")
    }

    


    return(
        <div className="PDevItem">
            <p className="PDevItemTitleText"> {title} </p>
            <p className="PDevItemLocationText"> {location} </p>
            <p className="PDevItemFonts"> {paragraph1} </p>
            <p className="PDevItemFonts"> {paragraph2} </p>
            <p className="PDevItemFonts"> {paragraph3} </p>
            <p className="PDevItemFonts"> {linkSection}</p>
        </div>
    );
}
