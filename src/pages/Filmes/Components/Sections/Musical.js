import React from 'react';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';
import BarTitle from '../BarTitle/BarTitle';
import Wrapper from '../Wrapper/Wrapper';
import styled from 'styled-components';


const MusicalContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 100%;
    background-image: url('imagens/filmes/musical/backgroundMusical.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2vw; 
    filter: ${({brilho}) => brilho ? 'brightness(100%)' : 'brightness(50%)'};
`;

const Musical = () => {

    const { arrayFilmesMusical, moreStateMusical, lastFilmeMusical,
        ultimoFilmeMusical, Musical, moveUltimoStateMusical } = React.useContext(GlobalContextFilmes);

        const [brilho, setBrilho] = React.useState(false);

            function adicionarBrilho(){
                setBrilho(true);
            }
    
            function removerBrilho(){
                setBrilho(false);
            }


    return (
        <MusicalContainer brilho={brilho} onMouseOver={adicionarBrilho} onMouseOut={removerBrilho}>

            <BarTitle colorText='#fff' bgcolor='#808080'>
                Musical
            </BarTitle>

            <Wrapper 
            arrayAllContainer={arrayFilmesMusical} 
            eventClick={moreStateMusical} 
            arrayOfState={lastFilmeMusical}
            divUltimoFilme={ultimoFilmeMusical}
            collection={Musical}
            eventUltimateFilme={moveUltimoStateMusical}/>
            
        </MusicalContainer>
    )
}

export default Musical



