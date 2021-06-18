import React from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import ButtonPlay from '../Buttons/ButtonPlay';
import { GlobalContextFilmes } from '../../ContextFilmes/GlobalContextFilmes';

const WrapperContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-bottom: 4vw;

    
    ::-webkit-scrollbar{
        display: none;
    }


    .Capa{
        width: 16vw;
        height: 24vw;
        cursor: pointer;
        transition: 0.5s;
        object-fit: cover;
        margin-right: 1.6vw;
        margin-top: 10vw;
        margin-bottom: 4vw;

        &:hover{
            transform: scaleX(1.08) scaleY(1.08);
        }       
    }

    .ContainerMoreFilmes:nth-child(1){
        margin-left: 4vw;
    }

    .ContainerMoreFilmes{
        display: flex;

        .ContainerAnimate{
            width: 45vw;
            height: 100%;
            background-color: var(--shadow);
            margin-right: 1.6vw;
            margin-left: -1.6vw;
            
    
            .ContainerTrailer{
                .Video{
                    width: 45vw;
                    height: 25vw;
                }
            }

    
    
            .TextAndDescription{
                width: 100%;
                height: 100%;
                overflow: hidden;
                margin-bottom: 2vw;
                
                
                h3{
                    color: var(--white);
                    font-size: 2vw;
                    text-align: center;
                    font-family: 'Arial';
                    margin-bottom: 2vw;
                    margin-top: 2vw;
                }
    
                p{
                    margin: 0 auto;
                    width: 90%;
                    color: var(--white);
                    font-size: 1.4vw;
                    text-align: center;
                    font-family: 'Arial';
                }
            }
    
            .PlayAndStar{
                margin: 0 auto;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2vw;

                .DivStar{
                    width: 30%;
                    height: 4vw;
                    border-radius: 2vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--estrela);
                    h3{
                        color: var(--white);
                        font-size: 1.1vw;
                    }
                }
            }
        }


    }
    .ContainerAnimateTwo{
        width: 45vw;
        height: 100%;
        background-color: var(--shadow);
        margin-right: 0vw;
        margin-left: 1.6vw;
        margin-bottom: 2vw;
        

        .ContainerTrailerTwo{
            .VideoTwo{
                width: 45vw;
                height: 25vw;
            }
        }


        .TextAndDescriptionTwo{
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin-bottom: 2vw;
            
            
            h3{
                color: var(--white);
                font-size: 2vw;
                text-align: center;
                font-family: 'Arial';
                margin-bottom: 2vw;
                margin-top: 2vw;
            }

            p{
                margin: 0 auto;
                width: 90%;
                color: var(--white);
                font-size: 1.4vw;
                text-align: center;
                font-family: 'Arial';
            }
        }

        .PlayAndStar{
                margin: 0 auto;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2vw;

                .DivStar{
                    width: 30%;
                    height: 4vw;
                    border-radius: 2vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--estrela);
                    h3{
                        color: var(--white);
                        font-size: 1.1vw;
                    }
                }
            }

    }

`;

const Wrapper = ({arrayAllContainer, eventClick,
                arrayOfState, collection, eventUltimateFilme, divUltimoFilme}) => {


        const { moveFilmeAuto, moveFilmeAutoTwo } = React.useContext(GlobalContextFilmes)

    return (
        <WrapperContainer>

            {arrayAllContainer.map((filmes) => (
                <div key={filmes.title} className='ContainerMoreFilmes'  
                onMouseOver={moveFilmeAuto}
                onMouseMove={moveFilmeAuto}>

                    <img className='Capa'
                        onClick={eventClick}
                        id={filmes.id}
                        src={filmes.capa} 
                        alt={filmes.title}
                       
                    />

                    {arrayOfState[filmes.id] && (
                        <div className='ContainerAnimate'  onMouseOver={moveFilmeAutoTwo}
                        onMouseMove={moveFilmeAutoTwo}>

                            <div className='ContainerTrailer' onMouseOver={moveFilmeAutoTwo}  onMouseMove={moveFilmeAutoTwo}>

                                <Youtube className='Video' videoId={filmes.trailer} />

                            </div>

                            <div className='TextAndDescription' onMouseOut={moveFilmeAutoTwo} onMouseOver={moveFilmeAutoTwo} onMouseMove={moveFilmeAutoTwo}>

                                <h3>{filmes.title}</h3>

                                <p>{filmes.description}</p>

                            </div>

                            <div className='PlayAndStar'>

                                <ButtonPlay src={filmes.link} width='60%'>

                                    {'Play Filme: ' + filmes.title}
                                    
                                </ButtonPlay>

                                <div className='DivStar'>

                                    <h3>{'Avaliação: ' + filmes.stars}</h3>
                                
                                </div>

                            </div>

                        </div>
                )}

                 
             </div>

            ))}


                {divUltimoFilme && (
                    <div className='ContainerAnimateTwo'>
                        <div className='ContainerTrailerTwo' 
                        onMouseMove={moveFilmeAuto}
                        onMouseOver={moveFilmeAuto}>
                            


                            <Youtube className='VideoTwo' videoId={collection[9].trailer} />

                        </div>

                        <div className='TextAndDescriptionTwo' 
                        onMouseMove={moveFilmeAuto}
                        onMouseOver={moveFilmeAuto}>

                            <h3>{collection[9].title}</h3>

                            <p>{collection[9].description}</p>

                        </div>

                        <div className='PlayAndStar'>

                            <ButtonPlay>

                                {'Play Filme: ' + collection[9].title}
                                
                            </ButtonPlay>

                            <div className='DivStar'>

                                <h3>{'Avaliação: ' + collection[9].stars}</h3>
                            
                            </div>

                        </div>
                    </div>
                )}

                <img className='Capa'
                    onClick={eventUltimateFilme}
                    onMouseMove={moveFilmeAuto}
                    onMouseOver={moveFilmeAuto}
                    src={collection[9].capa} 
                    alt={collection[9].title}/>

            
        </WrapperContainer>
    )
}

export default Wrapper;
