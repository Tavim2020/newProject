import React from 'react';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';
import BarTitle from '../BarTitle/BarTitle';
import Wrapper from '../Wrapper/Wrapper';
import styled from 'styled-components';

export const FilmesComediaContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 100%;
    background-image: url('imagens/filmes/comedia/backgroundComedia.jpg');
    box-shadow:  0 4vw 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2vw;
    filter: ${({brilho}) => brilho ? 'brightness(100%)' : 'brightness(50%)'};
`;


const Comedia = () => {

    const { arrayFilmesComedia, moreStateComedia, lastFilmeComedia,
            UltimoFilmeComedia, Comedia, moveUltimoStateComedia} = React.useContext(GlobalContextFilmes);


            const [brilho, setBrilho] = React.useState(false);

            function adicionarBrilho(){
                setBrilho(true);
            }
    
            function removerBrilho(){
                setBrilho(false);
            }

    return (
        <FilmesComediaContainer brilho={brilho} onMouseOver={adicionarBrilho} onMouseOut={removerBrilho}>

            <BarTitle colorText='#fff' bgcolor='#008000'>
                Comédia
            </BarTitle>

            <Wrapper 
            arrayAllContainer={arrayFilmesComedia} 
            eventClick={moreStateComedia} 
            arrayOfState={lastFilmeComedia}
            divUltimoFilme={UltimoFilmeComedia}
            collection={Comedia}
            eventUltimateFilme={moveUltimoStateComedia}/>

            
        </FilmesComediaContainer>
    )
}

export default Comedia;
