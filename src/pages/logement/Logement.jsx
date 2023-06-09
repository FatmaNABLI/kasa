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
    return (
        <div>
            <h1>{logement.title}</h1>
            <Carrousel pictures={logement.pictures}/>
            <div className="details-logement">
            <Collapse titre="description" description={logement.description}/>
            </div>
           
        </div>
        
    )
}
export default Logement