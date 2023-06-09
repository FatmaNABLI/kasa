import { Link } from 'react-router-dom';
import './Card.css'
function Card(props){
    const {id,title} = props;
    return(
        <Link to ={`logement/${id}`}>
       
        <div className="card">
            <h2>{title}</h2>
        </div>
        </Link>
    )
}
export default Card