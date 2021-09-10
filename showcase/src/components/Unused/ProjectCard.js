import FadeInSection from "../FadeInComponent";

function ProjectCard(){

    return (
        <FadeInSection>
            <div style={{width: "100%", display: "table"}}>
                <div className="ProjectCard baorder">
                    <div className="ProjectCard_Title"> 
                        <p style={{fontSize: "60px"}}> One. </p>
                    </div>
                    <div className="ProjectCard_Description"> 
                        <div> 
                            <h1 style={{fontSize: "30px"}}> Title </h1>
                        </div>
                        <div> 
                            <p style={{fontSize: "18px"}}> Long description </p>
                        </div>
                    </div>
                </div>
            </div>

        </FadeInSection>
    )

}

export default ProjectCard;