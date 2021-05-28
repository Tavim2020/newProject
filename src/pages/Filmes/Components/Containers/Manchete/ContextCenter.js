import React from 'react';
import { GlobalContextFilmes } from '../../../ContextFilmes/GlobalContextFilmes';

const ContextCenter = () => {
    
    const { title, Destaque, description, capa} = React.useContext(GlobalContextFilmes);

    return (

        <div className='Main-Context'>

            <div className='Title-Description'>

                <h1 ref={title}>{Destaque[0].title}</h1>

                <p ref={description}>{Destaque[0].description}</p>

            </div>

            <div className='Capa-Filme'>

                <img ref={capa} src={Destaque[0].capa} alt={Destaque[0].title} />

            </div>
            
        </div>
    

    )
}

export default ContextCenter;
