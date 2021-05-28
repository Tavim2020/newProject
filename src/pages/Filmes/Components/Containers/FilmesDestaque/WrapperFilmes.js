import React from 'react';
import { GlobalContextFilmes } from '../../../ContextFilmes/GlobalContextFilmes';

const WrapperFilmes = () => {

    const { normalLeft, normalRight, Destaque, newLoadLeft, retroLeft,
        resetFilmesTwo, moveManchete, newLoadRight, retroRight, 
        resetFilmes } = React.useContext(GlobalContextFilmes);

    return (
        <div className='Wrapper'>


            {normalLeft && <img className='First' id={Destaque[6].id} onClick={newLoadLeft} src={Destaque[6].capa} alt={Destaque[6].title} />}

            {retroLeft && <img className='First' id={Destaque[3].id} onClick={resetFilmesTwo} src={Destaque[3].capa} alt={Destaque[3].title} />}

            <img className='Second' id={Destaque[4].id} onClick={moveManchete} src={Destaque[4].capa} alt={Destaque[4].title} />

            <img className='Third' id={Destaque[2].id} onClick={moveManchete} src={Destaque[2].capa} alt={Destaque[2].title} />

            <img className='Fourth' id={Destaque[0].id} onClick={moveManchete} src={Destaque[0].capa} alt={Destaque[0].title} />

            <img className='Fifth' id={Destaque[1].id} onClick={moveManchete} src={Destaque[1].capa} alt={Destaque[1].title} />

            <img className='Sixth' id={Destaque[3].id} onClick={moveManchete} src={Destaque[3].capa} alt={Destaque[3].title} />

            {normalRight && <img className='Seventh' onClick={newLoadRight} id={Destaque[5].id} src={Destaque[5].capa} alt={Destaque[5].title} />}

            {retroRight && <img className='Seventh' onClick={resetFilmes}id={Destaque[4].id} src={Destaque[4].capa} alt={Destaque[4].title} />}

        </div>
    )
}

export default WrapperFilmes;
