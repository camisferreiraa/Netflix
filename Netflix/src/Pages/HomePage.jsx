import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { api } from '../api';
import NavBar from '../Components/NavBar'
import '../Styles/HomePage.css'

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
    // Buscar banners
    api.get('/movie/popular')
      .then(response => {
        setBanners(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao buscar banners:', error);
      });

    // Buscar catálogo
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

    <div >
      

      <h1>Banner de Filmes</h1>
      {banners.length > 0 && (
        <div className="banner-container">
          <button className="nav-button" onClick={prevBanner}>{"<"}</button>
          <div className="banner">
            <img
              src={`https://image.tmdb.org/t/p/original${banners[currentIndex].backdrop_path}`}
              alt={banners[currentIndex].title}
              style={{ width: '100%', height: '100%' }}
            />
            <h2>{banners[currentIndex].title}</h2>
          </div>
          <button className="nav-button" onClick={nextBanner}>{">"}</button>
        </div>
      )}

      
      <section className="bestfilms">
        <h1>Os Melhores Filmes</h1>
          <div className="catalog">
            {catalog.map(movie => (
              <div key={movie.id} className="catalog-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '400px' }}
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
      </section>
    </div>

        </Container>
</>
    )
}

export default Home;