import React from 'react';
import { GlobalContextFilmes } from '../../../ContextFilmes/GlobalContextFilmes'

const Stars = () => {

    const { FatherStar } = React.useContext(GlobalContextFilmes);


    return (
        <div className='Stars' ref={FatherStar}>

            <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

            <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

            <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

            <img className='Star' src='imagens/filmes/destaque/estrela.png' alt='Star' />

        
                
            <div className='Half'>  

                <img id='Star' src='imagens/filmes/destaque/estrela.png' alt='estrelas' />

            </div>
                
        </div>
    )
}

export default Stars;
