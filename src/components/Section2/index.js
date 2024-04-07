
import './index.css'

import Box from '../Box'

import Holder from '../Holder'

const boxDetailsList = [
    {
        id: 5,
        iconUrl: "HiOutlineLightBulb",
        boldText: "Expert Faculty",
        text: "Faculty has ACCA membership alog with extensive practical experience in accounting, finance and related fields.",
    },
    {
        id: 6,
        iconUrl: "BsPeopleFill",
        boldText: "Complete Succcess Package",
        text: "structurred study plan and exam techniques are practiced.",
    },
    {
        id: 7,
        iconUrl: "SiWorkplace",
        boldText: "Placements",
        text: "ACCA offers a wide range of career oppotunities with excellent prospects for advancement.",
    },
    
]

const holderDetailsList = [
    {
        id: 8,
        boldText: "Levels",
        iconUrl: "SiLevelsdotfyi",
        text: "3 (13 papers)",
    },
    {
        id: 9,
        boldText: "Duration",
        iconUrl: "GoClockFill",
        text: "6.30 hours",
    },
    {
        id: 10,
        boldText: "Exams",
        iconUrl: "PiExamFill",
        text: "Quarterly (online)",
    },
    {
        id: 11,
        boldText: "Exemptions",
        iconUrl: "PiStudentBold",
        text: "Upto 9 pagers",
    },
]


const Section2 = () => {
    return(
        <div className="section2-bg-container">
            <h1 className="sec2-heading">Why Choose Us?</h1>
            <hr className="line"/>
            <ul className="boxes-list">
                {boxDetailsList.map(eachBox => (
                    <Box key={eachBox.id} boxData={eachBox}/>
                ))}
            </ul>
            <ul className="holders-list">
                {holderDetailsList.map(eachOne => (
                    <Holder key={eachOne.id} holderData={eachOne}/>
                ))}
            </ul>
        </div>
    )
}

export default Section2