import './Home.css'
import Banner from '../../components/banner/Banner.jsx'
import Card from '../../components/card/Card.jsx'
import {logementList} from '../../datas/logementList'
import image from '../../assets/img-banner.png'
function Home() {

  return (
    <main>
        <Banner  image={image} texte='Chez vous, partout et ailleurs'/>
        <section className='div-cartes'>
          {logementList.map(logement => (
            <Card key={logement.id} id={logement.id} title={logement.title} imgCover={logement.cover}/>
          ))}
        </section>
    </main>
  )
}
export default Home
