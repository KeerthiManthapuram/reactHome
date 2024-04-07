
import './index.css'

import LevelCard from '../LevelCard'

const levelDetailsList = [
    {
        id: 12,
        level: "Knowledge Level",
        points: `ACCA candidates aquire in-depth technical knowledge in the following areas 
        <>.Financial Area
        <>.Reporting Area
        <>.Taxation
        <>.Audit`,
        papers: "3 Papers"
    },
    {
        id: 13,
        level: "Skill Level",
        points: `ACCA's Skill levels provide a structured pathwayfor candidates to 
        <>.Aquire knowledge
        <>.Skills
        <>.Practical experience`,
        papers: "6 Papers"
    },
    {
        id: 14,
        level: "Professional Level",
        points: `ACCA emphasizes the development of professional skills including
        <>.Critical thinking
        <>.Problem-solving
        <>.Communication,
        <>Decision-making`,
        papers: "4 Papers"
    },
]


const Section3 = () => {
    return(
        <div className="section3-bg-container">
            <h1 className="sec3-heading">What will you Learn in ACCA?</h1>
            <hr className="line"/>
            <ul className="unordered-list">
                {levelDetailsList.map(eachOne => (
                    <LevelCard key={eachOne.id} levelCardData={eachOne}/>
                ))}
            </ul>
        </div>
    )
}

export default Section3