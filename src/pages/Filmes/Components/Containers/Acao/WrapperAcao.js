import React from 'react';
import { GlobalContextFilmes } from '../../../ContextFilmes/GlobalContextFilmes';
import Youtube from 'react-youtube';

const WrapperAcao = () => {

    const { Acao, moveState, firstFilme, arrayFilmes, moreState, 
            lastFilme, UltimoFilme, moveUltimoState}= React.useContext(GlobalContextFilmes);

    return (
        <div className='WrapperAcao'>

            <img className='First' 
            onMouseOver={moveState}
            src={Acao[0].capa} 
            alt={Acao[0].title}/>

            {firstFilme && (
                <div className='ContainerAnimate'>
                    <div className='ContainerTrailer'>

                        <Youtube className='Video' videoId={Acao[0].trailer} />

                    </div>

                    <div className='TextAndDescription'>

                        <h3>{Acao[0].title}</h3>

                        <p>{Acao[0].description}</p>

                    </div>

                </div>
            )}

            {arrayFilmes.map((filmes) =>(
                <div key={filmes.title} className='ContainerMoreFilmes'>
                    <img className={'acao' + filmes.id} 
                        onMouseOver={moreState}
                        id={filmes.id}
                        src={filmes.capa} 
                        alt={filmes.title}
                    />

                    {lastFilme[filmes.id] && (
                        <div className='ContainerAnimate'>
                            <div className='ContainerTrailer'>

                                <Youtube className='Video' videoId={filmes.trailer} />

                            </div>

                            <div className='TextAndDescription'>

                                <h3>{filmes.title}</h3>

                                <p>{filmes.description}</p>

                            </div>

                        </div>
                    )}

                    
                </div>
            ))}


                {UltimoFilme && (
                    <div className='ContainerAnimateTwo'>
                        <div className='ContainerTrailerTwo'>

                            <Youtube className='VideoTwo' videoId={Acao[9].trailer} />

                        </div>

                        <div className='TextAndDescriptionTwo'>

                            <h3>{Acao[9].title}</h3>

                            <p>{Acao[9].description}</p>

                        </div>

                    </div>
                )}

                <img onMouseOver={moveUltimoState}
                    src={Acao[9].capa} 
                    alt={Acao[9].title}/>

            
              

        </div>
    )
}

export default WrapperAcao;
