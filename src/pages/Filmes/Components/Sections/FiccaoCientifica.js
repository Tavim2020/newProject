import React from 'react';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';
import BarTitle from '../BarTitle/BarTitle';
import Wrapper from '../Wrapper/Wrapper';
import styled from 'styled-components';


const FiccaoContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 100%;
    background-image: url('imagens/filmes/ficcaoCientifica/backgroundFiccaoCientifica.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2vw; 
    filter: ${({brilho}) => brilho ? 'brightness(100%)' : 'brightness(50%)'};
`;

const Ficcao = () => {

    const { arrayFilmesFiccao, moreStateFiccao, lastFilmeFiccao,
        ultimoFilmeFiccao, Ficcao, moveUltimoStateFiccao } = React.useContext(GlobalContextFilmes);

        const [brilho, setBrilho] = React.useState(false);

            function adicionarBrilho(){
                setBrilho(true);
            }
    
            function removerBrilho(){
                setBrilho(false);
            }


    return (
        <FiccaoContainer brilho={brilho} onMouseOver={adicionarBrilho} onMouseOut={removerBrilho}>

            <BarTitle colorText='#fff' bgcolor='#8f038f'>
                Ficção Científica
            </BarTitle>

            <Wrapper 
            arrayAllContainer={arrayFilmesFiccao} 
            eventClick={moreStateFiccao} 
            arrayOfState={lastFilmeFiccao}
            divUltimoFilme={ultimoFilmeFiccao}
            collection={Ficcao}
            eventUltimateFilme={moveUltimoStateFiccao}/>
            
        </FiccaoContainer>
    )
}

export default Ficcao
