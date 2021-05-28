import styled from 'styled-components';

export const FilmesLancamentosContainer = styled.section`
    @font-face {
        font-family: 'BebaNeue';
        src: url('/fonts/bebas_neue/BebasNeue-Regular.woff');
        font-weight: 400;
    }
    
    width: 100vw;
    height: 41vw;
    background-color: var(--shadow);
    padding-top: 2vw;

    .Title-Lancamentos{
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
            color: var(--red);
        }
    }

    .Wrapper{
        width: auto;
        height: 90%;
        display: flex;
        overflow-x: auto;
        align-items: center;
        scroll-behavior: smooth;
        position: relative;

        &::-webkit-scrollbar{
            display: none;
        }


        img{
            width: 16vw;
            height: 24vw;
            cursor: pointer;
            transition: 0.5s;
            object-fit: cover;
            margin-right: 1.6vw;

            &:hover{
                transform: scaleX(1.08) scaleY(1.08);
            }       
        }

        .First{
            margin-left: 4vw;
        }
    }

    

`;