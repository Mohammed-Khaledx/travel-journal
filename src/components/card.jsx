import '../App.css';

function Card({info}) {
    console.log(info)
    return(
    <div className='main'>
        <div className="card">
            <img src={info.coverImg} alt="Mount Fuji" className="card-image"/>
            <div className="card-content">
                <div className="location">
                    <img src={info.locationIcon} alt="Location Icon" className="location-icon"/>
                    <span>{info.location}</span>
                    <a href={info.href} className="google-maps-link">View on Google Maps</a>
                </div>
                <h2 className="card-title">{info.title}</h2>
                <p className="card-date">{info.date}</p>
                <p className="card-description">{info.description}</p>
            </div>
        </div>
    </div>
    );
}

export default Card;