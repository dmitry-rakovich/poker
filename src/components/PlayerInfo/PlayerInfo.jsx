import { useState } from "react";
import { USER } from "../../mock-data";
import "./PlayerInfo.less";
const PlayerInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="player-info">
            <div className="player-info__name">
                <span>{USER.name}</span>
                <div className="player-info__rating">
                    {Array.from({ length: USER.rating }).map((_, index) => <img key={index} src="/star.svg" />)}
                </div>
            </div>
            <div className="player-info__avatar">
                <img onClick={() => { }} src={USER.avatar} />
            </div>
            <button onClick={() => { setIsOpen(!isOpen) }} className={`player-info__balance ${isOpen ? "open" : ""}`}>
                <img src={!isOpen ? "/visible.svg" : "/unvisible.svg"} />
                <span>{isOpen ? <span className="player-info__balance-value">{USER.balance}</span> : "Show balance"}</span>
            </button>
        </div >
    )
}

export default PlayerInfo