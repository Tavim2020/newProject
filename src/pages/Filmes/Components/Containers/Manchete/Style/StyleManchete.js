import styled from 'styled-components';

export const MancheteContainer = styled.section`

    @font-face {
        font-family: 'Adios';
        src: url('/fonts/Adios.woff');
        font-weight: bold;
    }
    
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    

    .Background-Image{
        width: 100vw;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top:0;
        filter: brightness(0.7);
        z-index: -1;
        image-rendering: pixelated;
    }

    .Header{
        margin: 0 auto;
        width: 75%;
        height: 7vw;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .Home{
            font-family: 'Adios';
            font-size: 5vw;
            color: var(--white);
            cursor: pointer;  
            transition: 0.5s;

            &:hover{
                font-size: 5.5vw;
            }
        }

        h2{
            font-family: 'Adios';
            font-size: 5vw;
            color: var(--white);
            cursor: pointer; 
            transition: 0.5s;
            
            &:hover{
                font-size: 5.5vw;
            }
        }
    }


    .Main-Context{
        margin: 0 auto;
        width: 75%;
        height: 70%;
        display: flex;

        .Title-Description{
            width: 50%;
            height: 100%;

            h1{
                font-size: 6vw;
                font-family: Arial, Helvetica, sans-serif;
                text-align: center;
                color: var(--white);
                margin-top: 10vw;
                margin-bottom: 6vw;
            }

            p{
                font-size: 1.6vw;
                text-align: center;
                color: var(--white);
                width: 90%;
            }
        }

        .Capa-Filme{
            width: 50%;

            img{
                margin-left: 5vw;
                width: 29.5vw;
                height: 100%;
                object-fit: cover;
                image-rendering: pixelated;
            }
        }
    }

    .FooterManchete{
        margin: 0 auto;
        width: 65%;
        display: flex;
        align-items: center;

        .Stars{
            margin: 0 auto;
            width: 20%;
            height: 5vw;
            margin-top: 3vw;
            margin-bottom: 3vw;
            margin-left: 20vw;
            display: flex;
            align-items: center;

            .Star{
                width: 2vw;
                height: 2vw;;
            }

            img:nth-child(1),
            img:nth-child(2),
            img:nth-child(3),
            img:nth-child(4){
                margin-right: 0.7vw;
            }
            
            .Half{
                width: 1vw;
                overflow-x: hidden;

                img{
                    width: 2vw;
                    height: 2vw;;
                }
            }
        }

    }
    

`;