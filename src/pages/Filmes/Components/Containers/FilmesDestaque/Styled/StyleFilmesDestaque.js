import styled from 'styled-components';

export const FilmesDestaqueContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }

    width: 100vw;
    height: 41vw;
    background-color: var(--shadow);
    padding-top: 2vw;
    overflow: hidden;

    .Title-Destaque{
        width: 21vw;
        height: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--white);
        border-top-right-radius: 0.7vw;
        border-bottom-right-radius: 0.7vw;

        h3{
            font-size: 3.5vw;
            font-family: 'BebaNeue';
            letter-spacing: 0.3vw;
            padding-top: 0.4vw;
        }
    }

    .Wrapper{
        width: auto;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        align-items: center;

        img{
            cursor: pointer;
            transition: 0.5s;
            object-fit: cover;
            &:hover{
                transform: scaleX(1.08) scaleY(1.08);
            }
            
        }

        .First{
            width: 12vw;
            
            margin-left: -6vw; 
            margin-right: 1.6vw;   
        }

        .Second{
            width: 14vw;
            
            margin-right: 1.6vw; 
        }

        .Third{
            width: 16vw;
            
            margin-right: 1.6vw; 
        }

        .Fourth{
            width: 18vw;
            margin-right: 1.6vw; 
            
        }

        .Fifth{
            width: 16vw;
            margin-right: 1.6vw; 
        }

        .Sixth{
            width: 14vw;
            margin-right: 1.6vw; 
            
        }

        .Seventh{
            width: 12vw;
            margin-right: 1.6vw; 
            
        }
    }

    

`;