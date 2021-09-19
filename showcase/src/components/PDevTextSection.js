export default function PDevTextSection({title, textObj}) {
    return(
        <div className="PDevItem">
            <p className="PDevItemTitleText"> {title} </p>
            <p className="PDevItemLocationText"> {textObj.SAMPLETEXT_LOC} </p>
            <p className="PDevItemFonts"> {textObj.SAMPLETEXT_TEXT} </p>
        </div>
    );
}
