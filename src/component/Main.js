import React from 'react';
import './Main.css'
import Profile from '../assets/profile.jpg'
import EducationItem from "./educationItem";
import ExperienceItem from "./experienceItem";


const educationList = [
    {
        title: "University of Würzburg",
        degree: "Master’s in mathematics International",
        date: "May 2019 – Mar 2022",
        description: "I have improved my MATLAB skill and the ability to stand in\n" +
            " front of my colleagues to present. I learnt how to use SQL,\n" +
            "python and R-Studio"
    },

    {
        title: "Coursera Online",
        date: "Aug 2021 – Sept 2021",
        description: "Learnt how to have a data integrity, clean data using \n"+
            "Excel, SQL and R Studio. Using Power Bi, R Studio and Excel\n"+
            "to visualize and write reports."
    },

    {
        title: "University of Ilorin, Ilorin, Kwara State, Nigeria",
        degree: "Bachelor of Science in Mathematics",
        date: "Sept 2013 – Sept 2017",
        description: "During study, I learnt some basics knowledge on how to\n" +
        "use MATLAB and for my final thesis I did On some\n" +
        "convergence properties of certain infinite product of real\n" +
        "and complex number"
    }
]

const experienceList = [
    {
        position:"Privately for students and professionals",
        employer:"Technical engineer",
        date:"June 2011 – present",
        description:"Assisted in troubleshooting windows products, installations\n" +
            "    of hardware and software, resolving network issues and\n" +
            "    instruction in the use of LaTeX and MATLAB."
    },
    {
        position: "Faculty member for Mathematics department",
        employer: "Salvation Army High School, Osogbo, Nigeria",
        date: "Dec 2017–Apr 2019",
        description:"Prepared daily lessons for upwards of 150 students,\n" +
            "        including curriculum for the 8th, 9th and 10th grade. This\n" +
            "        entailed setting exams, grading assignments and\n" +
            "        recording results on spreadsheets. To better engage my\n" +
            "        students, I alternated between lectures and interactive\n" +
            "        elements."
    },
    {
        position: "Teacher/Volunteer",
        employer: "The Church of Jesus Christ of Latter-Day Saints, Nigeria",
        date:"May 2015–Apr 2019",
        description: "Prepared and delivered thought-provoking seminars on a\n" +
            "        weekly basis for adults. Coordinated teaching efforts with\n" +
            "        other instructors."
    },
    {
        position: "Teacher/Volunteer",
        employer: "Iro-Titun Nursery and Primary School, Akure, Nigeria",
        date: "Aug 2013–Mar 2017",
        description: "Measured scholastic achievement through giving marks\n" +
            "        and cataloguing performance of students in\n" +
            "        spreadsheets. Aided in creating interactive learning\n" +
            "        elements for over 60 students in grade 6. Provided\n" +
            "        solutions for streamlining school functions."
    }
]

function Main(props) {

    const education = educationList.map(
        x=> <EducationItem education={x}/>

    );

    return (
        <div className= "main">
           <section className='image fl w-third'>
               <img
                   alt="Profile"
                   className="img-fluid rounded shadow-lg"
                   height="auto"
                   width="auto"
                   src={Profile}
               />
           </section>

            <section className='education fl w-two-thirds'>

                <ul className='edu'>
                    EDUCATION
                    {education}

                </ul>


            </section>


        </div>
    );
}

export default Main;