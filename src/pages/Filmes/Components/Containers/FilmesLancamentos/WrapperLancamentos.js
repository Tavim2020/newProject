import React from 'react'
import { GlobalContextFilmes } from '../../../ContextFilmes/GlobalContextFilmes';

const WrapperLancamentos = () => {

    const { moveMancheteTwo, moveFilmeAuto, Lancamentos, arrayLancamentos,
        divLancamentosFilmes  } = React.useContext(GlobalContextFilmes);

    return (
        <div className='Wrapper' ref={divLancamentosFilmes} onFocus={moveFilmeAuto}>

            <img className='First' 
                onMouseMove={moveFilmeAuto} 
                id={Lancamentos[0].id} 
                onClick={moveMancheteTwo} 
                src={Lancamentos[0].capa} 
                alt={Lancamentos[0].title} 
            />

            {arrayLancamentos.map((filmes) => (
                    <div key={filmes.title}>

                        <img  id={filmes.id} 
                            onMouseMove={moveFilmeAuto} 
                            className='LancamentosFilmes' 
                            onClick={moveMancheteTwo} 
                            src={filmes.capa} 
                            alt={filmes.title}
                        />

                    </div>
            ))}

        </div>
    )
}

export default WrapperLancamentos
