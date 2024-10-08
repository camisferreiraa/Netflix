import styled from 'styled-components'
import NavBar from '../Components/NavBar';
import backgroundImage from '../Images/backgroundnetflix.jpg';
import popcorn from '../Images/popcorn-svgrepo-com.svg';
import '../Styles/LandingPage.css'
import Footer from '../Components/Rodape'
import tv from '../Images/tv.png'
import device from '../Images/device-pile.png'
import infantil from '../Images/Infantil.png'
import mobilepng from '../Images/mobile-stranger things.jpg'
import Accordion from '../Components/Accordion';



const Container = styled.div `

height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

justify-content: space-between;
&::before {
   
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

}


`

const Title = styled.h1 `
font-size: 56px;
text-align: center;
margin-bottom: 15%;
font-weight: 700;
z-index: 10;
color: white;
display: flex;
flex-direction: column;
gap: 20px;
text-shadow: 2px rgba(0, 0, 0, 0.971);;

`
const Box = styled.div `
width: 80%;
height: 200px;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 10px;


background: rgb(201,4,171);
background: radial-gradient(circle, rgba(201,4,171,1) 24%, rgba(82,34,255,1) 80%, rgba(10,12,53,1) 95%);
`




function LandingPage (){
    return (
    <>
        
        <Container style={{backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',}}>
        <NavBar/>
            <Title>
                Filmes, séries e muito mais, sem limites
                <p>
                    Assista onde quiser. Cancele quando quiser.
                    Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
                </p>
                <div className='submit_email'>
                    <input type="text" placeholder='Envie seu e-mail' />
                    <button type="submit">Vamos Lá</button>
                </div>

            </Title>
        
        <Box>
            <img src={popcorn} alt="pipoca" />
            <div className='text_box'>
            <h3>A Netflix que você adora por apenas R$ 20,90.</h3>
            <p>Assine o plano Padrão com anúncios.</p>
            <a href="https://www.netflix.com/br/" target='_blank'>Saiba Mais</a>
            </div>
        </Box>
        </Container>
        <div className="banner_information">
            <div className="texts">
               
                <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
            </div>
            <img src={tv} alt="" />
        </div>
        <div className="banner_information" style={{
            flexDirection: 'row-reverse'
        }}>
            <div className="texts">
                
                <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
            </div>
            <img src={device} alt="" />
        </div>
        <div className="banner_information">
            <div className="texts">
                
                <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
            </div>
            <img src={infantil} alt="" />
        </div>
        <div className="banner_information" style={{
            flexDirection: 'row-reverse'
        }}>
            <div className="texts">
                
                <p>Assista em um avião, trem ou submarino...</p>
            </div>
            <img src={mobilepng} alt="" />
        </div>

        
        <div className="ask">
            <h1>Perguntas Frequentes</h1>
            <Accordion/>
        </div>

        <Footer/>
    </>
    )
}

export default LandingPage;