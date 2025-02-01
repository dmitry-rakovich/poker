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
            <div className="player-info__balance">
                <img onClick={() => { setIsOpen(!isOpen) }} src={isOpen ? "/visible.svg" : "/unvisible.svg"} />
                <span>{isOpen ? "$100,500.00" : "****"}</span>
            </div>
        </div>
    )
}

export default PlayerInfo