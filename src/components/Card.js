function Card(props) {
    return (
			<div className="card" style={{ "width": "18rem" }}>
				<img src={props.Image} className="card-img-top  w-100 h-50" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.CardTitle}</h5>
					<p className="card-text">{props.CardText}</p>
				</div>
				<div className="card-footer">
					<a href={props.Link1} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Source</a>
					<a href={props.Link2} target="_blank" rel="noopener noreferrer" className="btn btn-primary ms-2">Try the App!</a>
				</div>
        </div>
    )
};

export default Card;
