import FadeInSection from "../FadeInComponent";
import PropTypes from 'prop-types';


export default function HeaderCard(props) {
    return(
        <div className="title" style={{letterSpacing: props.letterSpacing}}>
            <section>
                <FadeInSection>
                    <h1>{props.text}</h1>
                </FadeInSection>
            </section>
        </div>
    );
};

HeaderCard.propTypes = {
    letterSpacing: PropTypes.string
};

HeaderCard.defaultProps = {
    letterSpacing: '10px'
};
