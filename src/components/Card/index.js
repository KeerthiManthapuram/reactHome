
import './index.css'

import { FaPeopleGroup } from "react-icons/fa6"

import { PiStudentFill } from 'react-icons/pi'

import { ImPower } from "react-icons/im"

import { LiaSchoolSolid } from "react-icons/lia"

const iconComponents = {
    FaPeopleGroup,
    PiStudentFill,
    ImPower,
    LiaSchoolSolid
}

const Card = props => {
    const {cardData} = props 
    const {id, iconUrl, boldText, text} = cardData
    const IconComponent = iconComponents[iconUrl]
    return(
        <li className="card-holder">
            <div className="icon-holder">
                {IconComponent && <IconComponent/>}
            </div>
            <div className="text-holder">
                <h1 className="bold-text">{boldText}</h1>
                <p className="text">{text}</p>
            </div>
        </li>
    )
}

export default Card