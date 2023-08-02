function Card(props) {
    return (
        <div className="card col mx-2" style={{ "width": "18rem" }}>
            <img src={props.Image} className="card-img-top w-100 h-50" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.CardTitle}</h5>
                <p className="card-text">{props.CardText}</p>
                <a href={props.Link1} target="_blank" rel="noopener noreferrer" className="btn btn-primary position-absolute bottom-0 mb-3 mx-2">View Source</a>
                <a href={props.Link2} target="_blank" rel="noopener noreferrer" className="btn btn-primary position-absolute bottom-0 start-50 mb-3 mx-2">Try the App!</a>
            </div>
        </div>
    )
};

export default Card;