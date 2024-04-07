import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Section5 = () => {
    return(
        <div className="sec5-bg-container">
            <div className="sec5-left">
                <h1 className="sec5-heading">Kick off your ACCA Prep journey with IndigoLearn</h1>
                <p className="sec5-text">Sign-in and get access to our FREE Courses</p>
                <button className="sign-up-button">Sign in</button>
            </div>
            <div className="sec5-right">
                <form className="sec5-form-holder">
                <h1 className="sec5-form-heading">Aspiring to be an ACCA? Get in touch with us!</h1>
                <input className="sec5-input-element" placeholder="Phone Number"/>
                <input className="sec5-input-element" placeholder="Email ID"/>
                <input className="sec5-input-element" placeholder="Current Qualification"/>
                <input className="sec5-input-element" placeholder="Watsapp Number"/>
                <Popup
                modal 
                trigger = {
                <button type="button" className="sec5-call-back-button">Request Call Back</button>
                }
                >
                {close => (
                <>
                <div className="popup-container">
                <p className='success-text'>Thank you.</p>
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
    )
}

export default Section5