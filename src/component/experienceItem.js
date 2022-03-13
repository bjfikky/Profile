import React from 'react';

function ExperienceItem({experience}) {
    return (
        <li>
            <p>experience.title</p>
            <p>experience.employer</p>
            <p>experience.date</p>
            <p>experience.description</p>
        </li>
    );
}

export default ExperienceItem;