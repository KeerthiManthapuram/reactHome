
import './index.css'

import { HiOutlineLightBulb } from "react-icons/hi"

import { BsPeopleFill } from "react-icons/bs"

import { SiWorkplace } from "react-icons/si"

const iconComponents = {
    HiOutlineLightBulb,
    BsPeopleFill,
    SiWorkplace,
}

const Box = props => {
    const {boxData} = props 
    const {id, iconUrl, boldText, text} = boxData
    const IconComponent = iconComponents[iconUrl]

    return(
        <li className="box-holder">
            <div className="icon-holder">
                {IconComponent && <IconComponent font-size="25px"/>}
            </div>
            <h1 className="section2-bold-text">{boldText}</h1>
            <p className="section2-text">{text}</p>
        </li>
    )
}

export default Box