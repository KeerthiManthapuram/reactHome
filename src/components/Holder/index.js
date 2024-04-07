
import './index.css'

import { SiLevelsdotfyi } from "react-icons/si" 

import { GoClockFill } from "react-icons/go"

import { PiExamFill, PiStudentBold } from "react-icons/pi"

const iconComponents = {
    SiLevelsdotfyi,
    GoClockFill,
    PiExamFill,
    PiStudentBold,
}

const Holder = props => {
    const {holderData} = props 
    const {id, boldText, iconUrl, text} = holderData 
    const IconComponent = iconComponents[iconUrl]
    return(
    <div className="holder-bg-container">
        <h1 className="sec2-bold-text">{boldText}</h1>
        <div className="icon-text-holder">
            <div className="icon-holder">
            {IconComponent && <IconComponent font-size="15"/>}
            </div> 
            <p className="text">{text}</p>
        </div>

    </div>
    )
}

export default Holder