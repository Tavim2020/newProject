import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    max-width: 60%;
    height: 4vw;
    border-radius: 2vw;
    background-color: var(--platium);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    position: relative;

    &:hover{
        background-color: #96F550;
        p{
            color: #fff;
        }
        &::before{
            content: '';
            width: 15%;
            height: 100%;
            position: absolute;
            left: 0;
            background-color: rgba(255, 255, 255, 0.3);
            border-top-left-radius: 2vw;
            border-bottom-left-radius: 2vw;
            animation: moveBar 500ms ease-in-out infinite forwards;
            animation-duration: 2s;
            @keyframes moveBar{
                to{
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    border-top-right-radius: 2vw;
                    border-bottom-right-radius: 2vw;
                    left: 85%;
                }
            }
        }
    }

    div{
        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        img{
            transition: 1s;
            width: 3vw;
            height: 3vw;
            background-color: var(--platium);
            border-radius: 50%;
        }
        
        p{
            font-size: 1.1vw;
            width: 70%;
            text-align: center;
            font-weight: bold;
        }
    }

`;



const ButtonPlay = ({children, src, width, id}) => {

    function filmeRedirect(){
        window.open(`${src}`, '_blank');
    }

    return (
        <Button className='ButtonPlay' src={src} onClick={filmeRedirect} style={{ width: width}} id={id}>
            <div>
                <img   src='imagens/iconesGerais/play.png' alt='playIcon' title='Play'/>
                <p>{children}</p>
            </div>
        </Button>
    )
}

export default ButtonPlay;
