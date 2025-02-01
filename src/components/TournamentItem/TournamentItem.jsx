/* eslint-disable react/prop-types */
import "./TournamentItem.less";

const TournamentItem = ({ title, date, status, gameType, players, reward, pinned, tournamentFeatures }) => {
    return (
        <div className={`tournament ${status}`}>
            <span className={`tournament__status ${status}`}>{status}</span>
            <div className="tournament__game">
                {pinned && <img src="/pin.svg" />}
                <span>{gameType}</span>
                <div className="tournament__features">
                    {tournamentFeatures?.map((feature, index) => (
                        <img key={index} src={`/${feature}.svg`} />
                    ))}
                </div>
            </div>
            <h4 className="tournament__title">{title}</h4>
            <div className="tournament__info">
                <p className="tournament__info-item">
                    <img src="/date.svg" />
                    <span>{date}</span>
                </p>
                <p className="tournament__info-item">
                    <img src="/players.svg" />
                    <span>{players}</span>
                </p>
                <p className="tournament__info-item">
                    <img src="/tourney.svg" />
                    <span>{reward}</span>
                </p>
            </div>
            <button className={`tournament__button`} disabled={status === "cancelled"}>
                {status === "registering" ? "Join Table" : "cancelled"}
            </button>
        </div>
    );
};

export default TournamentItem