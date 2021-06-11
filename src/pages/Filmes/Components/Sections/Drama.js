import React from 'react';
import styled from 'styled-components';
import BarTitle from '../BarTitle/BarTitle';
import Wrapper from '../Wrapper/Wrapper';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';


const DramaContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 100%;
    background-image: url('imagens/filmes/drama/backgroundDrama.jpg');
    box-shadow:  0 4vw 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2vw;
    filter: ${({brilho}) => brilho ? 'brightness(100%)' : 'brightness(50%)'};
`;

const Drama = () => {

    const { arrayFilmesDrama, ultimoFilmeDrama, moreStateDrama,
            moveUltimoStateDrama, lastFilmeDrama, Drama} = React.useContext(GlobalContextFilmes);

        const [brilho, setBrilho] = React.useState(false);

        function adicionarBrilho(){
            setBrilho(true);
        }

        function removerBrilho(){
            setBrilho(false);
        }

    return (
        <DramaContainer brilho={brilho} onMouseOver={adicionarBrilho} onMouseOut={removerBrilho}>

            <BarTitle colorText='#fff' bgcolor='#F93535'>
                Drama
            </BarTitle>

            <Wrapper 
            arrayAllContainer={arrayFilmesDrama} 
            eventClick={moreStateDrama} 
            arrayOfState={lastFilmeDrama}
            divUltimoFilme={ultimoFilmeDrama}
            collection={Drama}
            eventUltimateFilme={moveUltimoStateDrama}/>
            
        </DramaContainer>
    )
}

export default Drama;
