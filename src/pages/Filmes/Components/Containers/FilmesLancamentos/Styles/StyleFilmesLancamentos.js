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