import './Banner.css'
function Banner(props){
    //destructuration
    const {image,texte} = props
    //const pathImg = "src/assets/img-banner.png"
    return(
        <div className="div-banner">
              <div className="div-banner-bg" style={{backgroundImage :`url(${image})` }}>
              </div>
              <h1>{texte}</h1>
        </div> 
      
    )
}
export default Banner