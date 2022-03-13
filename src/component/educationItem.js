import React from 'react';

function EducationItem({education}) {
    return (
        <li>
            <p>{education.title}</p>
            <p>{education.degree}</p>
            <p>{education.date}</p>
            <p>{education.description}</p>
        </li>
    );
}

export default EducationItem;