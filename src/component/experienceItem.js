import React from 'react';

function ExperienceItem({experience}) {
    return (
        <li>
            // Added curly brackets here
            <p>{experience.position}</p>
            <p>{experience.employer}</p>
            <p>{experience.date}</p>
            <p>{experience.description}</p>
        </li>
    );
}

export default ExperienceItem;