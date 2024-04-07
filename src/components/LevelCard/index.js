
import './index.css'

const LevelCard = props => {
    const {levelCardData} = props 
    const {id, level, points, papers} = levelCardData
    return(
        <div className="level-card-holder">
            <div className="header">
                <h1 className="heading">{level}</h1>
            </div>
            <p className="text">{points}</p>
            <div className="footer">
            <h1 className="heading">{papers}</h1>
            </div>
        </div>
    )
}

export default LevelCard