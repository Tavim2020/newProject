import React from 'react';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';
import Header from '../Containers/Manchete/Header';
import ContextCenter from '../Containers/Manchete/ContextCenter';
import Stars from '../Containers/Manchete/Stars';
import { MancheteContainer } from '../Containers/Manchete/Style/StyleManchete';


const Manchete = () => {

    const { backgroundImage, Destaque } = React.useContext(GlobalContextFilmes);

    return (
        <MancheteContainer id='Manchete'>

            <img  ref={backgroundImage} className='Background-Image' src={Destaque[0].background} alt={Destaque[0].title}/>

            <Header />
            

            <ContextCenter />

            <Stars />


        </MancheteContainer>  
    )
}

export default Manchete;
