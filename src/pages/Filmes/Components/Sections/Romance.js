import React from 'react';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';
import BarTitle from '../BarTitle/BarTitle';
import Wrapper from '../Wrapper/Wrapper';
import styled from 'styled-components';


const RomanceContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 100%;
    background-image: url('imagens/filmes/romance/backgroundRomance.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2vw; 
    filter: ${({brilho}) => brilho ? 'brightness(100%)' : 'brightness(50%)'};
`;

const Romance = () => {

    const { arrayFilmesRomance, moreStateRomance, lastFilmeRomance,
        ultimoFilmeRomance, Romance, moveUltimoStateRomance } = React.useContext(GlobalContextFilmes);

        const [brilho, setBrilho] = React.useState(false);

            function adicionarBrilho(){
                setBrilho(true);
            }
    
            function removerBrilho(){
                setBrilho(false);
            }


    return (
        <RomanceContainer brilho={brilho} onMouseOver={adicionarBrilho} onMouseOut={removerBrilho}>

            <BarTitle colorText='#fff' bgcolor='#ebcfc3'>
                Romance
            </BarTitle>

            <Wrapper 
            arrayAllContainer={arrayFilmesRomance} 
            eventClick={moreStateRomance} 
            arrayOfState={lastFilmeRomance}
            divUltimoFilme={ultimoFilmeRomance}
            collection={Romance}
            eventUltimateFilme={moveUltimoStateRomance}/>
            
        </RomanceContainer>
    )
}

export default Romance;
