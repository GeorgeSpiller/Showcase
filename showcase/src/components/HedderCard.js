import FadeInSection from "./FadeInComponent";


function HeaderCard(props) {
    return(
        <div className="title">
            <section>
                <FadeInSection>
                    <h1>{props.text}</h1>
                </FadeInSection>
            </section>
        </div>
    );
};

export default HeaderCard;