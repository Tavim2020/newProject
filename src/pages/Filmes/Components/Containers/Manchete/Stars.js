import React from 'react';
import { GlobalContextFilmes } from '../../../ContextFilmes/GlobalContextFilmes'
import ButtonPlay from '../../Buttons/ButtonPlay';

const Stars = () => {

    const { FatherStar, srcManchete, titlePlay} = React.useContext(GlobalContextFilmes);


    return (
        <div className='FooterManchete'>


            <ButtonPlay src={srcManchete} width='40%' id='ManchetePlay'>

                Play Filme: {titlePlay}

            </ButtonPlay>


            <div className='Stars' ref={FatherStar}>

                <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

                <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

                <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

                <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

            
                    
                <div className='Half'>  

                    <img id='Star' src='imagens/filmes/destaque/estrela.png' alt='estrelas' />

                </div>
                    
            </div>

        </div>
    )
}

export default Stars;
