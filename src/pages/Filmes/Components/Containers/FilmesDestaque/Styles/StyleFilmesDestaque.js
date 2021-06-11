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

        .Hidden{
            visibility: hidden;
            pointer-events: none;
            width: 12vw;
            
            margin-left: -6vw; 
            margin-right: 1.6vw; 
        }

        .HiddenRight{
            visibility: hidden;
            pointer-events: none;
            width: 12vw;
            margin-right: 1.6vw;
        }

    }

    

`;