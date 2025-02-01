import { useState } from "react";
import "./PlayerInfo.less";
const PlayerInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="player-info">
            <p className="player-info__name">LongUserName</p>
            <div className="player-info__avatar">
                <img onClick={() => { }} src="/avatar.png" />
            </div>
            <button onClick={() => { setIsOpen(!isOpen) }} className={`player-info__balance ${isOpen ? "open" : ""}`}>
                <img src={!isOpen ? "/visible.svg" : "/unvisible.svg"} />
                <span>{isOpen ? <span className="player-info__balance-value">$100,500.00</span> : "Show balance"}</span>
            </button>
        </div >
    )
}

export default PlayerInfo