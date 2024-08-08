import styled from 'styled-components'

const Container = styled.div `
background-color: black;
height: 100vh;
width: 100vw;
`


function Home (){
    return (
    

        <Container>
            <h1>Bem vindo ao Home</h1>
        </Container>

    )
}

export default Home;