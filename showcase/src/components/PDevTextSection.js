export default function PDevTextSection({title, textObj}) {
    return(
        <div className="PDevItem">
            <p className="PDevItemTitleText"> {title} </p>
            <p className="PDevItemLocationText"> {textObj.SAMPLETEXT_LOC} </p>
            <p className="footerFonts"> {textObj.SAMPLETEXT_TEXT} </p>
            <p className="footerFonts"> {textObj.SAMPLETEXT_TEXT2} </p>
        </div>
    );
}
