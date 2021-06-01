import styled from 'styled-components';


export const AcaoContainer = styled.section`
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

    
    .Title-Acao{
        width: 21vw;
        height: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--blue);
        border-top-right-radius: 0.7vw;
        border-bottom-right-radius: 0.7vw;

        h3{
            font-size: 3.5vw;
            font-family: 'BebaNeue';
            letter-spacing: 0.3vw;
            padding-top: 0.4vw;
            color: var(--white);
        }
    }

    .WrapperAcao{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        overflow-x: auto;
        scroll-behavior: smooth;
        padding-bottom: 4vw;
        

        /* &::-webkit-scrollbar{
            display: none;
        } */


        img{
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

        .First{
            margin-left: 4vw;
        }

        .ContainerMoreFilmes{
            display: flex;
        
        }

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

        }

        .hidden{
            display: none;
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

        }

    }
`;