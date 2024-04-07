
import './index.css'

import Header from '../Header'

import Card from '../Card'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const cardDetailsList = [
    {
        id: 1,
        iconUrl: "FaPeopleGroup",
        boldText: "3 Lakh+",
        text: "Students Trained",
    },
    {
        id: 2,
        boldText: "1200+",
        iconUrl: "PiStudentFill",
        text: "Rankers till Date",
    },
    {
        id: 3,
        iconUrl: "ImPower",
        boldText: "33+",
        text: "Years of Legacy",
    },
    {
        id: 4,
        iconUrl: "LiaSchoolSolid",
        boldText: "150+",
        text: "Study Centers in India",
    },
]

const Section1 = () => {
    return(
        <div className="section1-bg-container">
            <Header/>
            <div className="left-right-section">
                <div className="left-section">
                    <h1 className="sec1-heading">Become a ACCA in 18 months</h1>
                    <p className="text">Aquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>
                    <div className="cards-unordered-list">
                        {cardDetailsList.map(eachCard => (
                            <Card key={eachCard.id} cardData={eachCard}/>
                        ))}
                    </div>
                    <div className="buttons-holder">
                        <button className="button1">First button</button>
                        <button className="button2">Second button</button>
                    </div>
                </div>
                <div className="right-section">
                    <form className="form-holder">
                        <h1 className="sec1-form-text">Aspiring to be an ACCA? Get in touch with us!</h1>
                        <input className="input-element" placeholder="Phone Number"/>
                        <input className="input-element" placeholder="Email Id"/>
                        <input className="input-element" placeholder="Watsapp Number"/>
                        <input className="input-element" placeholder="Name"/>
                        <Popup
                        modal 
                        trigger = {
                        <button type="button" className="call-back-button">Request Call Back</button>
                        }
                        >
                        {close => (
                            <>
                            <div className="popup-container">
                                <p className='success-text'>Thanks for your interest. we will soon get back to you</p>
                                <button 
                                type="button" 
                                className="close-button"
                                onClick={() => close()}
                                >close</button>
                            </div>
                            </>
                        )}

                        </Popup>
                        </form>
                </div>
            </div>    
        </div>
    )
}

export default Section1