import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapse/Collapse'
import './APropos.css'
import image from '../../assets/banner-a-propos.png'
import {collapseList} from '../../datas/collapseList'
function APropos(){
    return(
        <div>
            <Banner image={image} text=''/>
            {collapseList.map((collapse)=>(
                <Collapse key={`collapse-${collapse.id}`} titre={collapse.titre} description={collapse.description} type="big-collapse" />            
                ))   
            }
            

        </div>
    )
}
export default APropos