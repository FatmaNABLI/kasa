import './Banner.css'
function Banner(props){
    //destructuration
    const {image,texte} = props
    //const pathImg = "src/assets/img-banner.png"
    return(
        <div className="div-banner" style={{backgroundImage :`url(${image})` }}>
            <h1>{texte}</h1>
        </div>
    )
}
export default Banner