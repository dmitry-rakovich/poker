import "./Loader.less";
const Loader = () => {
    return (
        <div className="loading-container">
            <div className="loading-bar">
                <div className="progress"></div>
            </div>
            <div className="loading-text"></div>
        </div>
    )
}

export default Loader