import { useState } from 'react'
import './Collapse.css'
function Collapse(props){
    const {titre, description,type} = props;
    const [open,setOpen] = useState(false);
    
    return(
        <div className={`collapse ${type}`}>
            <div className='collapse-header' onClick={()=>setOpen(!open)}>
                <h2 >{titre}</h2>
                {!open && <i className="fa-solid fa-chevron-down"></i>}
                {open && <i className="fa-solid fa-chevron-up"></i>}
            </div>
            {open && <div className="collapse-body">{description}</div>}
        </div>
    )
}
export default Collapse