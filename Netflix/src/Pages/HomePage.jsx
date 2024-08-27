import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { api } from '../api';
import NavBar from '../Components/NavBar'
import '../Styles/HomePage.css'
import { FaPlay } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";
import Footer from '../Components/Rodape';




const Container = styled.div `
background-color: black;
height: 100vh;
width: 100vw;
`


function Home (){
    const [banners, setBanners] = useState([]);
    const [catalog, setCatalog] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    api.get('/movie/popular')
      .then(response => {
        setBanners(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar banners:', error);
      });

    
    api.get('/movie/now_playing')
      .then(response => {
        setCatalog(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar catálogo:', error);
      });
  }, []);



  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

    return (
    <>
    
    <Container>
    <NavBar/>

    <div className='hero-container' >
      {banners.length > 0 && (
        <div className="banner-container">

          <div className="banner">

          
              <button className="prev-button" onClick={prevBanner}><FaCaretLeft/></button>
                <img
                  src={`https://image.tmdb.org/t/p/original${banners[currentIndex].backdrop_path}`}
                  alt={banners[currentIndex].title}
                  style={{ width: '100%', height: '100%',  margin: 0}}
                />
                <button className="play-button">
                <FaPlay/> Play
                </button>
                <h2>{banners[currentIndex].title}</h2>
                <p>{banners.desc}</p>
                <button className="next-button" onClick={nextBanner}><FaCaretRight/></button>
              
          </div>
          
        </div>
      )}

      
      <section className="bestfilms">
        <h1>Popular on Netflix</h1>
          <div className="catalog">
            {catalog.map(movie => (
              <div key={movie.id} className="catalog-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className='box-play'>
                    <h3>{movie.title}</h3>
                    <button className='play-btn'><FaPlay/></button>
                </div> 
              </div>
            ))}
          </div>
      </section>
    </div>
        <Footer/>
        </Container>
</>
    )
}

export default Home;