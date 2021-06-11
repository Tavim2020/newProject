import React from 'react';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';
import BarTitle from '../BarTitle/BarTitle';
import Wrapper from '../Wrapper/Wrapper';
import styled from 'styled-components';


const AcaoContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 100%;
    background-image: url('imagens/filmes/acao/backgroundAcao.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 2vw; 
    filter: ${({brilho}) => brilho ? 'brightness(100%)' : 'brightness(50%)'};
`;

const Acao = () => {

    const { arrayFilmes, moreState, lastFilme,
        UltimoFilme, Acao, moveUltimoState } = React.useContext(GlobalContextFilmes);

        const [brilho, setBrilho] = React.useState(false);

            function adicionarBrilho(){
                setBrilho(true);
            }
    
            function removerBrilho(){
                setBrilho(false);
            }


    return (
        <AcaoContainer brilho={brilho} onMouseOver={adicionarBrilho} onMouseOut={removerBrilho}>

            <BarTitle colorText='#fff' bgcolor='#5976DE'>
                Ação
            </BarTitle>

            <Wrapper 
            arrayAllContainer={arrayFilmes} 
            eventClick={moreState} 
            arrayOfState={lastFilme}
            divUltimoFilme={UltimoFilme}
            collection={Acao}
            eventUltimateFilme={moveUltimoState}/>
            
        </AcaoContainer>
    )
}

export default Acao
