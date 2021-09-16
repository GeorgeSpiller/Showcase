export default function PDevTextSection({title, text}) {
    return(
        <div className="PDevItem">
            <p> {title} </p>
            <p className="footerFonts"> {text} </p>
        </div>
    );
}
