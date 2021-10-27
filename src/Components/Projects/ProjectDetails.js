import React from 'react';

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, labore? Unde alias repudiandae corporis saepe, facilis ex numquam? Nam error, molestias modi adipisci ex commodi velit! Animi iure dolore aliquam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by BT</div>
                    <div>2nd September, 1 AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
