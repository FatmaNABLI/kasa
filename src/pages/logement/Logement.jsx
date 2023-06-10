import { useParams } from 'react-router-dom'
import Carrousel from '../../components/carrousel/Carrousel'
import './Logement.css'
import {logementList} from '../../datas/logementList'
import Error from '../error/Error.jsx';
import Collapse from '../../components/collapse/Collapse';

function Logement(){
    const {idLogement} = useParams()
    const logement = logementList.find(logement => logement.id==idLogement)
    if (!logement) {
     return (<Error/>);
    }
    const equipments = <ul>{logement.equipments.map((equipement,i)=>
        <li key={`equipment-${i}`}>{equipement}</li>)}</ul>
    let tabStars=[1,2,3,4,5]
    return (

        <div>
            <Carrousel pictures={logement.pictures}/>

            <div className="log-infos">
                <div>
                <h1 id="log-title">{logement.title}</h1>
                <span id="log-location">{logement.location}</span>
                </div>
                <div className="log-host">
                    <span>{logement.host.name}</span>
                    <img id="img-host" src={logement.host.picture} alt="" />
                </div>
            </div>
            <div id="tags-stars">
                <div id="tags">
                    {logement.tags.map(tag => <span className='tag'>{tag}</span>)}
                </div>
                <div id="stars">
                {tabStars.map((index) =>(
                 (index <= logement.rating)? <i key={`star-${index}`} className="fa-solid fa-star red-star"></i>:<i key={`star-${index}`} className="fa-solid fa-star gray-star"></i>
                    )
                )}
                </div>
                
            </div>

           
            <div className="details-logement">
                <Collapse titre="Description" description={logement.description} type="small-collapse" />
                <Collapse titre="Equipements" description={equipments} type="small-collapse" />
            </div>
           
        </div>
        
    )
}
export default Logement