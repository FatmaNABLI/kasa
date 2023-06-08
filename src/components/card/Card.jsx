import './Card.css'
function Card(props){
    const {title} = props;
    return(
        <div className="card">
            <h2>{title}</h2>
        </div>
    )
}
export default Card