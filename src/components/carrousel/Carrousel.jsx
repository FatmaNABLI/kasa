import { useState } from 'react';
import './Carrousel.css'
function Carrousel(props){
    const {pictures} = props;
    const [currentIndex, setCurrentIndex] = useState(0)    
   /* const pictures =  [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ]*/
    const length = pictures.length;
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
        if(currentIndex == pictures.length - 1){
            setCurrentIndex(0)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        if (currentIndex == 0) {
            setCurrentIndex(pictures.length - 1)
        }
    }
    return(
        <div id="slider">
            {pictures.length>1 && <i className="fa-solid fa-chevron-right slider-arrow arrow-right" onClick={next}></i>}
            {pictures.length>1 && <i className="fa-solid fa-chevron-left slider-arrow arrow-left" onClick={prev}></i>}
            <div className="slide" style={{ backgroundImage: `url(${pictures[currentIndex]})` }}>
                {pictures.length>1 && <p>{`${currentIndex+1}/${pictures.length}`}</p>}
            </div>
        </div>
    )

}
export default Carrousel