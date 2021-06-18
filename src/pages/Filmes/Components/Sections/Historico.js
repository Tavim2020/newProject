import React from 'react';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';
import BarTitle from '../BarTitle/BarTitle';
import Wrapper from '../Wrapper/Wrapper';
import styled from 'styled-components';


const HistoricoContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 100%;
    background-image: url('imagens/filmes/historico/backgroundHistorico.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2vw; 
    filter: ${({brilho}) => brilho ? 'brightness(100%)' : 'brightness(50%)'};
`;

const Historico = () => {

    const { arrayFilmesHistorico, moreStateHistorico, lastFilmeHistorico,
        ultimoFilmeHistorico, Historico, moveUltimoStateHistorico } = React.useContext(GlobalContextFilmes);

        const [brilho, setBrilho] = React.useState(false);

            function adicionarBrilho(){
                setBrilho(true);
            }
    
            function removerBrilho(){
                setBrilho(false);
            }


    return (
        <HistoricoContainer brilho={brilho} onMouseOver={adicionarBrilho} onMouseOut={removerBrilho}>

            <BarTitle colorText='#fff' bgcolor='#4b3029'>
                Histórico
            </BarTitle>

            <Wrapper 
            arrayAllContainer={arrayFilmesHistorico} 
            eventClick={moreStateHistorico} 
            arrayOfState={lastFilmeHistorico}
            divUltimoFilme={ultimoFilmeHistorico}
            collection={Historico}
            eventUltimateFilme={moveUltimoStateHistorico}/>
            
        </HistoricoContainer>
    )
}

export default Historico;
