import { Link } from 'react-router-dom';
import './Card.css'
function Card(props){
    const {id,title,imgCover} = props;
    return(
        <Link className="card-link" to ={`logement/${id}`}>
            <div className="card" style={{background:`url(${imgCover})`, backgroundSize:"cover"}}>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}
export default Card