import React from 'react';
import Destaque from '../../../Data/destaque';
import Lancamentos from '../../../Data/lancamentos';
import Acao from '../../../Data/acao';
import Comedia from '../../../Data/comedia';
import Aventura from '../../../Data/aventura';
import Drama from '../../../Data/drama';
import Terror from '../../../Data/terror';
import Ficcao from '../../../Data/ficcao-cientifica';
import Romance from '../../../Data/romance';
import Musical from '../../../Data/musical';
import Historico from '../../../Data/historico';






export const GlobalContextFilmes = React.createContext();


export const GlobalStorageFilmes = ({children}) =>{

    const backgroundImage = React.useRef(null);
    const title = React.useRef(null);
    const description = React.useRef(null);
    const capa = React.useRef(null);
    const estrelas = React.useRef(null);
    const FatherStar = React.useRef(null);
    const [srcManchete, setSrcManchete] = React.useState(Destaque[0].link);
    const [titlePlay, setTitlePlay] = React.useState(Destaque[0].title);


    const arrayLancamentos = Lancamentos.slice(1, 15);


    function moveManchete(event){  
        const id = event.target.id;
        backgroundImage.current.src = Destaque[id].background;
        title.current.textContent = Destaque[id].title;
        description.current.textContent = Destaque[id].description;
        capa.current.src = Destaque[id].capa;
        estrelas.current = Destaque[id].stars;
        setSrcManchete(Destaque[id].link);
        setTitlePlay(Destaque[id].title);


        const stars = document.querySelector('.Stars');

        while(stars.children.length >= 1){
            stars.removeChild(stars.firstChild);
        }

        if(!stars.firstChild){
            for(let i=1; i<=parseInt(estrelas.current); i++){
                const img = document.createElement('img');
                img.src = 'imagens/filmes/destaque/estrela.png';
                img.alt = 'estrela';
                img.classList.add('Star');
                
                stars.appendChild(img);
            }
        } 
        

        if(stars.children.length === FatherStar.current.children.length &&
            String(estrelas.current).replace(/\d/, '') === '.5'){
        
            const div = document.createElement('div');
            div.setAttribute('class', 'Half');

            const halfImg = document.createElement('img');
            halfImg.setAttribute('src', 'imagens/filmes/destaque/estrela.png');
            halfImg.setAttribute('alt', 'estrelas')
            div.appendChild(halfImg);

            const ultimaEstrela = FatherStar.current.children.length - 1;

            FatherStar.current.children[ultimaEstrela].after(div)

        }
    }

    function moveMancheteTwo(event){
        const id = event.target.id;
        backgroundImage.current.src = Lancamentos[id].background;
        title.current.textContent = Lancamentos[id].title;
        description.current.textContent = Lancamentos[id].description;
        capa.current.src = Lancamentos[id].capa;
        estrelas.current = Lancamentos[id].stars;
        setSrcManchete(Lancamentos[id].link);
        setTitlePlay(Lancamentos[id].title);
        const stars = document.querySelector('.Stars');

        while(stars.children.length >= 1){
            stars.removeChild(stars.firstChild);
        }

        if(!stars.firstChild){
            for(let i=1; i<=parseInt(estrelas.current); i++){
                const img = document.createElement('img');
                img.src = 'imagens/filmes/destaque/estrela.png';
                img.alt = 'estrela';
                img.classList.add('Star');
                
                stars.appendChild(img);
            }
        } 
        

        if(stars.children.length === FatherStar.current.children.length &&
            String(estrelas.current).replace(/\d/, '') === '.5'){
        
            const div = document.createElement('div');
            div.setAttribute('class', 'Half');

            const halfImg = document.createElement('img');
            halfImg.setAttribute('src', 'imagens/filmes/destaque/estrela.png');
            halfImg.setAttribute('alt', 'estrelas')
            div.appendChild(halfImg);

            const ultimaEstrela = FatherStar.current.children.length - 1;

            FatherStar.current.children[ultimaEstrela].after(div)

        }

        window.location.href = '/filmes#Manchete'
    }


    const [normalDiv, setNormalDiv] = React.useState(true);
    const [leftDiv, setLeftDiv] = React.useState(false);
    const [rightDiv, setRightDiv] = React.useState(false);


    function leftDivTrue(){
        setNormalDiv(false);
        setLeftDiv(true);
    }

    function resetFilmes(){
        setLeftDiv(false);
        setNormalDiv(true);
        setRightDiv(false);
    }

    function rightDivTrue(){
        setNormalDiv(false);
        setRightDiv(true);
    }



    const divLancamentosFilmes = React.useRef(null);
    
    function moveFilmeAuto(event){
        const scroll = event.target.parentNode.parentNode;
        const scrollFirst = event.target.parentNode;

        setTimeout(()=>{
            if(event.screenX >= 1200){
                    scroll.scrollLeft+= 100; 
                    scrollFirst.scrollLeft+= 100;   
            }
            else if(event.screenX <= 150){
                scroll.scrollLeft-= 100;
                scrollFirst.scrollLeft-= 100;
            }
    
        }, 500)
    }


    function moveFilmeAutoTwo(event){
        const scroll = event.target.parentNode.parentNode.parentNode;
        console.log(event)

            if(event.screenX >=1200){
                scroll.scrollLeft+= 100;     
            }
            else if(event.screenX <= 150){
                scroll.scrollLeft-= 100;
            }
    }


    // Acao - Estados e funções
    const [UltimoFilme, setUltimoFilme] = React.useState(false);
    const arrayFilmes = Acao.slice(0, 9);
    const lastFilme = [];
    const [state, setState] = React.useState(false);
    const [state1, setState1] = React.useState(false);
    const [state2, setState2] = React.useState(false);
    const [state3, setState3] = React.useState(false);
    const [state4, setState4] = React.useState(false);
    const [state5, setState5] = React.useState(false);
    const [state6, setState6] = React.useState(false);
    const [state7, setState7] = React.useState(false);
    const [state8, setState8] = React.useState(false);



    lastFilme[0] = state;
    lastFilme[1] = state1;
    lastFilme[2] = state2;
    lastFilme[3] = state3;
    lastFilme[4] = state4;
    lastFilme[5] = state5;
    lastFilme[6] = state6;
    lastFilme[7] = state7;
    lastFilme[8] = state8;

    function moreState(event){
        setUltimoFilme(false);
        
        if(Number(event.target.id) === 0){
            setState(true); 

            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false);
            setState5(false);
            setState6(false);
            setState7(false);
            setState8(false);
       }


       if(Number(event.target.id) === 1){
            setState1(true); 

            setState(false)
            setState2(false);
            setState3(false);
            setState4(false);
            setState5(false);
            setState6(false);
            setState7(false);
            setState8(false);;
       }

       if(Number(event.target.id) === 2){
            setState2(true); 


            setState(false)
            setState1(false);
            setState3(false);
            setState4(false);
            setState5(false);
            setState6(false);
            setState7(false);
            setState8(false);;
        }

        if(Number(event.target.id) === 3){
            setState3(true);

            setState(false);
            setState1(false);
            setState2(false);
            setState4(false);
            setState5(false);
            setState6(false);
            setState7(false);
            setState8(false); ;
       }

       if(Number(event.target.id) === 4){
            setState4(true); 

            setState(false);
            setState1(false);
            setState2(false);
            setState3(false);
            setState5(false);
            setState6(false);
            setState7(false);
            setState8(false);;
        }

        if(Number(event.target.id) === 5){
            setState5(true); 

            setState(false);
            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false);
            setState6(false);
            setState7(false);
            setState8(false);;
       }
       if(Number(event.target.id) === 6){
            setState6(true);

    
            setState(false);
            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false);
            setState5(false);
            setState7(false);
            setState8(false); ;
        }
        if(Number(event.target.id) === 7){
            setState7(true); 

    
            setState(false);
            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false);
            setState5(false);
            setState6(false);
            setState8(false);;
       }
       if(Number(event.target.id) === 8){
            setState8(true); 

    
            setState(false);
            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false);
            setState5(false);
            setState6(false);
            setState7(false);
        }
    }

    function moveUltimoState(){
        setState(false);
        setState1(false);
        setState2(false);
        setState3(false);
        setState4(false);
        setState5(false);
        setState6(false);
        setState7(false);
        setState8(false);

        setUltimoFilme(true);
    }
   

    // Comedia
    const [UltimoFilmeComedia, setUltimoFilmeComedia] = React.useState(false);
    const arrayFilmesComedia = Comedia.slice(0, 9);
    const lastFilmeComedia = [];


    const [stateComedia, setStateComedia] = React.useState(false);
    const [state1Comedia, setState1Comedia] = React.useState(false);
    const [state2Comedia, setState2Comedia] = React.useState(false);
    const [state3Comedia, setState3Comedia] = React.useState(false);
    const [state4Comedia, setState4Comedia] = React.useState(false);
    const [state5Comedia, setState5Comedia] = React.useState(false);
    const [state6Comedia, setState6Comedia] = React.useState(false);
    const [state7Comedia, setState7Comedia] = React.useState(false);
    const [state8Comedia, setState8Comedia] = React.useState(false);

    lastFilmeComedia[0] = stateComedia;
    lastFilmeComedia[1] = state1Comedia;
    lastFilmeComedia[2] = state2Comedia;
    lastFilmeComedia[3] = state3Comedia;
    lastFilmeComedia[4] = state4Comedia;
    lastFilmeComedia[5] = state5Comedia;
    lastFilmeComedia[6] = state6Comedia;
    lastFilmeComedia[7] = state7Comedia;
    lastFilmeComedia[8] = state8Comedia;



    function moreStateComedia(event){
        setUltimoFilmeComedia(false);

        if(Number(event.target.id) === 0){
            setStateComedia(true); 

            setState1Comedia(false);
            setState2Comedia(false);
            setState3Comedia(false);
            setState4Comedia(false);
            setState5Comedia(false);
            setState6Comedia(false);
            setState7Comedia(false);
            setState8Comedia(false);
       }



       if(Number(event.target.id) === 1){
            setState1Comedia(true); 

            setStateComedia(false);
            setState2Comedia(false);
            setState3Comedia(false);
            setState4Comedia(false);
            setState5Comedia(false);
            setState6Comedia(false);
            setState7Comedia(false);
            setState8Comedia(false);
       }

       if(Number(event.target.id) === 2){
            setState2Comedia(true); 

            setStateComedia(false);
            setState1Comedia(false);
            setState3Comedia(false);
            setState4Comedia(false);
            setState5Comedia(false);
            setState6Comedia(false);
            setState7Comedia(false);
            setState8Comedia(false);
        }

        if(Number(event.target.id) === 3){
            setState3Comedia(true);

            setStateComedia(false);
            setState1Comedia(false);
            setState2Comedia(false);
            setState4Comedia(false);
            setState5Comedia(false);
            setState6Comedia(false);
            setState7Comedia(false);
            setState8Comedia(false); 
       }

       if(Number(event.target.id) === 4){
            setState4Comedia(true); 

            setStateComedia(false);
            setState1Comedia(false);
            setState2Comedia(false);
            setState3Comedia(false);
            setState5Comedia(false);
            setState6Comedia(false);
            setState7Comedia(false);
            setState8Comedia(false);
        }

        if(Number(event.target.id) === 5){
            setState5Comedia(true); 

            setStateComedia(false);
            setState1Comedia(false);
            setState2Comedia(false);
            setState3Comedia(false);
            setState4Comedia(false);
            setState6Comedia(false);
            setState7Comedia(false);
            setState8Comedia(false);
       }

       if(Number(event.target.id) === 6){
            setState6Comedia(true);

            setStateComedia(false);
            setState1Comedia(false);
            setState2Comedia(false);
            setState3Comedia(false);
            setState4Comedia(false);
            setState5Comedia(false);
            setState7Comedia(false);
            setState8Comedia(false); 
        }

        if(Number(event.target.id) === 7){
            setState7Comedia(true); 

            setStateComedia(false);
            setState1Comedia(false);
            setState2Comedia(false);
            setState3Comedia(false);
            setState4Comedia(false);
            setState5Comedia(false);
            setState6Comedia(false);
            setState8Comedia(false);
       }

       if(Number(event.target.id) === 8){
            setState8Comedia(true); 

            setStateComedia(false);
            setState1Comedia(false);
            setState2Comedia(false);
            setState3Comedia(false);
            setState4Comedia(false);
            setState5Comedia(false);
            setState6Comedia(false);
            setState7Comedia(false);
        }

    }

    function moveUltimoStateComedia(){
        setStateComedia(false);
        setState1Comedia(false);
        setState2Comedia(false);
        setState3Comedia(false);
        setState4Comedia(false);
        setState5Comedia(false);
        setState6Comedia(false);
        setState7Comedia(false);
        setState8Comedia(false);

        setUltimoFilmeComedia(true);
    }


    // Aventura
    const [ultimoFilmeAventura, setUltimoFilmeAventura] = React.useState(false);
    const arrayFilmesAventura = Aventura.slice(0, 9);
    const lastFilmeAventura = [];


    const [stateAventura, setStateAventura] = React.useState(false);
    const [state1Aventura, setState1Aventura] = React.useState(false);
    const [state2Aventura, setState2Aventura] = React.useState(false);
    const [state3Aventura, setState3Aventura] = React.useState(false);
    const [state4Aventura, setState4Aventura] = React.useState(false);
    const [state5Aventura, setState5Aventura] = React.useState(false);
    const [state6Aventura, setState6Aventura] = React.useState(false);
    const [state7Aventura, setState7Aventura] = React.useState(false);
    const [state8Aventura, setState8Aventura] = React.useState(false);

    lastFilmeAventura[0] = stateAventura;
    lastFilmeAventura[1] = state1Aventura;
    lastFilmeAventura[2] = state2Aventura;
    lastFilmeAventura[3] = state3Aventura;
    lastFilmeAventura[4] = state4Aventura;
    lastFilmeAventura[5] = state5Aventura;
    lastFilmeAventura[6] = state6Aventura;
    lastFilmeAventura[7] = state7Aventura;
    lastFilmeAventura[8] = state8Aventura;



    function moreStateAventura(event){
        setUltimoFilmeAventura(false);

        if(Number(event.target.id) === 0){
            setStateAventura(true); 

            setState1Aventura(false);
            setState2Aventura(false);
            setState3Aventura(false);
            setState4Aventura(false);
            setState5Aventura(false);
            setState6Aventura(false);
            setState7Aventura(false);
            setState8Aventura(false);
       }



       if(Number(event.target.id) === 1){
            setState1Aventura(true); 

            setStateAventura(false);
            setState2Aventura(false);
            setState3Aventura(false);
            setState4Aventura(false);
            setState5Aventura(false);
            setState6Aventura(false);
            setState7Aventura(false);
            setState8Aventura(false);
       }

       if(Number(event.target.id) === 2){
            setState2Aventura(true); 

            setStateAventura(false);
            setState1Aventura(false);
            setState3Aventura(false);
            setState4Aventura(false);
            setState5Aventura(false);
            setState6Aventura(false);
            setState7Aventura(false);
            setState8Aventura(false);
        }

        if(Number(event.target.id) === 3){
            setState3Aventura(true);

            setStateAventura(false);
            setState1Aventura(false);
            setState2Aventura(false);
            setState4Aventura(false);
            setState5Aventura(false);
            setState6Aventura(false);
            setState7Aventura(false);
            setState8Aventura(false); 
       }

       if(Number(event.target.id) === 4){
            setState4Aventura(true); 

            setStateAventura(false);
            setState1Aventura(false);
            setState2Aventura(false);
            setState3Aventura(false);
            setState5Aventura(false);
            setState6Aventura(false);
            setState7Aventura(false);
            setState8Aventura(false);
        }

        if(Number(event.target.id) === 5){
            setState5Aventura(true); 

            setStateAventura(false);
            setState1Aventura(false);
            setState2Aventura(false);
            setState3Aventura(false);
            setState4Aventura(false);
            setState6Aventura(false);
            setState7Aventura(false);
            setState8Aventura(false);
       }

       if(Number(event.target.id) === 6){
            setState6Aventura(true);

            setStateAventura(false);
            setState1Aventura(false);
            setState2Aventura(false);
            setState3Aventura(false);
            setState4Aventura(false);
            setState5Aventura(false);
            setState7Aventura(false);
            setState8Aventura(false); 
        }

        if(Number(event.target.id) === 7){
            setState7Aventura(true); 

            setStateAventura(false);
            setState1Aventura(false);
            setState2Aventura(false);
            setState3Aventura(false);
            setState4Aventura(false);
            setState5Aventura(false);
            setState6Aventura(false);
            setState8Aventura(false);
       }

       if(Number(event.target.id) === 8){
            setState8Aventura(true); 

            setStateAventura(false);
            setState1Aventura(false);
            setState2Aventura(false);
            setState3Aventura(false);
            setState4Aventura(false);
            setState5Aventura(false);
            setState6Aventura(false);
            setState7Aventura(false);
        }

    }

    function moveUltimoStateAventura(){
        setStateAventura(false);
        setState1Aventura(false);
        setState2Aventura(false);
        setState3Aventura(false);
        setState4Aventura(false);
        setState5Aventura(false);
        setState6Aventura(false);
        setState7Aventura(false);
        setState8Aventura(false);

        setUltimoFilmeAventura(true);
    }
    

    // Drama
    const [ultimoFilmeDrama, setUltimoFilmeDrama] = React.useState(false);
    const arrayFilmesDrama = Drama.slice(0, 9);
    const lastFilmeDrama = [];


    const [stateDrama, setStateDrama] = React.useState(false);
    const [state1Drama, setState1Drama] = React.useState(false);
    const [state2Drama, setState2Drama] = React.useState(false);
    const [state3Drama, setState3Drama] = React.useState(false);
    const [state4Drama, setState4Drama] = React.useState(false);
    const [state5Drama, setState5Drama] = React.useState(false);
    const [state6Drama, setState6Drama] = React.useState(false);
    const [state7Drama, setState7Drama] = React.useState(false);
    const [state8Drama, setState8Drama] = React.useState(false);

    lastFilmeDrama[0] = stateDrama;
    lastFilmeDrama[1] = state1Drama;
    lastFilmeDrama[2] = state2Drama;
    lastFilmeDrama[3] = state3Drama;
    lastFilmeDrama[4] = state4Drama;
    lastFilmeDrama[5] = state5Drama;
    lastFilmeDrama[6] = state6Drama;
    lastFilmeDrama[7] = state7Drama;
    lastFilmeDrama[8] = state8Drama;



    function moreStateDrama(event){
        setUltimoFilmeDrama(false);

        if(Number(event.target.id) === 0){
            setStateDrama(true); 

            setState1Drama(false);
            setState2Drama(false);
            setState3Drama(false);
            setState4Drama(false);
            setState5Drama(false);
            setState6Drama(false);
            setState7Drama(false);
            setState8Drama(false);
       }



       if(Number(event.target.id) === 1){
            setState1Drama(true); 

            setStateDrama(false);
            setState2Drama(false);
            setState3Drama(false);
            setState4Drama(false);
            setState5Drama(false);
            setState6Drama(false);
            setState7Drama(false);
            setState8Drama(false);
       }

       if(Number(event.target.id) === 2){
            setState2Drama(true); 

            setStateDrama(false);
            setState1Drama(false);
            setState3Drama(false);
            setState4Drama(false);
            setState5Drama(false);
            setState6Drama(false);
            setState7Drama(false);
            setState8Drama(false);
        }

        if(Number(event.target.id) === 3){
            setState3Drama(true);

            setStateDrama(false);
            setState1Drama(false);
            setState2Drama(false);
            setState4Drama(false);
            setState5Drama(false);
            setState6Drama(false);
            setState7Drama(false);
            setState8Drama(false); 
       }

       if(Number(event.target.id) === 4){
            setState4Drama(true); 

            setStateDrama(false);
            setState1Drama(false);
            setState2Drama(false);
            setState3Drama(false);
            setState5Drama(false);
            setState6Drama(false);
            setState7Drama(false);
            setState8Drama(false);
        }

        if(Number(event.target.id) === 5){
            setState5Drama(true); 

            setStateDrama(false);
            setState1Drama(false);
            setState2Drama(false);
            setState3Drama(false);
            setState4Drama(false);
            setState6Drama(false);
            setState7Drama(false);
            setState8Drama(false);
       }

       if(Number(event.target.id) === 6){
            setState6Drama(true);

            setStateDrama(false);
            setState1Drama(false);
            setState2Drama(false);
            setState3Drama(false);
            setState4Drama(false);
            setState5Drama(false);
            setState7Drama(false);
            setState8Drama(false); 
        }

        if(Number(event.target.id) === 7){
            setState7Drama(true); 

            setStateDrama(false);
            setState1Drama(false);
            setState2Drama(false);
            setState3Drama(false);
            setState4Drama(false);
            setState5Drama(false);
            setState6Drama(false);
            setState8Drama(false);
       }

       if(Number(event.target.id) === 8){
            setState8Drama(true); 

            setStateDrama(false);
            setState1Drama(false);
            setState2Drama(false);
            setState3Drama(false);
            setState4Drama(false);
            setState5Drama(false);
            setState6Drama(false);
            setState7Drama(false);
        }

    }

    function moveUltimoStateDrama(){
        setStateDrama(false);
        setState1Drama(false);
        setState2Drama(false);
        setState3Drama(false);
        setState4Drama(false);
        setState5Drama(false);
        setState6Drama(false);
        setState7Drama(false);
        setState8Drama(false);

        setUltimoFilmeDrama(true);
    }


    // Terror
    const [ultimoFilmeTerror, setUltimoFilmeTerror] = React.useState(false);
    const arrayFilmesTerror = Terror.slice(0, 9);
    const lastFilmeTerror = [];


    const [stateTerror, setStateTerror] = React.useState(false);
    const [state1Terror, setState1Terror] = React.useState(false);
    const [state2Terror, setState2Terror] = React.useState(false);
    const [state3Terror, setState3Terror] = React.useState(false);
    const [state4Terror, setState4Terror] = React.useState(false);
    const [state5Terror, setState5Terror] = React.useState(false);
    const [state6Terror, setState6Terror] = React.useState(false);
    const [state7Terror, setState7Terror] = React.useState(false);
    const [state8Terror, setState8Terror] = React.useState(false);

    lastFilmeTerror[0] = stateTerror;
    lastFilmeTerror[1] = state1Terror;
    lastFilmeTerror[2] = state2Terror;
    lastFilmeTerror[3] = state3Terror;
    lastFilmeTerror[4] = state4Terror;
    lastFilmeTerror[5] = state5Terror;
    lastFilmeTerror[6] = state6Terror;
    lastFilmeTerror[7] = state7Terror;
    lastFilmeTerror[8] = state8Terror;



    function moreStateTerror(event){
        setUltimoFilmeTerror(false);

        if(Number(event.target.id) === 0){
            setStateTerror(true); 

            setState1Terror(false);
            setState2Terror(false);
            setState3Terror(false);
            setState4Terror(false);
            setState5Terror(false);
            setState6Terror(false);
            setState7Terror(false);
            setState8Terror(false);
       }



       if(Number(event.target.id) === 1){
            setState1Terror(true); 

            setStateTerror(false);
            setState2Terror(false);
            setState3Terror(false);
            setState4Terror(false);
            setState5Terror(false);
            setState6Terror(false);
            setState7Terror(false);
            setState8Terror(false);
       }

       if(Number(event.target.id) === 2){
            setState2Terror(true); 

            setStateTerror(false);
            setState1Terror(false);
            setState3Terror(false);
            setState4Terror(false);
            setState5Terror(false);
            setState6Terror(false);
            setState7Terror(false);
            setState8Terror(false);
        }

        if(Number(event.target.id) === 3){
            setState3Terror(true);

            setStateTerror(false);
            setState1Terror(false);
            setState2Terror(false);
            setState4Terror(false);
            setState5Terror(false);
            setState6Terror(false);
            setState7Terror(false);
            setState8Terror(false); 
       }

       if(Number(event.target.id) === 4){
            setState4Terror(true); 

            setStateTerror(false);
            setState1Terror(false);
            setState2Terror(false);
            setState3Terror(false);
            setState5Terror(false);
            setState6Terror(false);
            setState7Terror(false);
            setState8Terror(false);
        }

        if(Number(event.target.id) === 5){
            setState5Terror(true); 

            setStateTerror(false);
            setState1Terror(false);
            setState2Terror(false);
            setState3Terror(false);
            setState4Terror(false);
            setState6Terror(false);
            setState7Terror(false);
            setState8Terror(false);
       }

       if(Number(event.target.id) === 6){
            setState6Terror(true);

            setStateTerror(false);
            setState1Terror(false);
            setState2Terror(false);
            setState3Terror(false);
            setState4Terror(false);
            setState5Terror(false);
            setState7Terror(false);
            setState8Terror(false); 
        }

        if(Number(event.target.id) === 7){
            setState7Terror(true); 

            setStateTerror(false);
            setState1Terror(false);
            setState2Terror(false);
            setState3Terror(false);
            setState4Terror(false);
            setState5Terror(false);
            setState6Terror(false);
            setState8Terror(false);
       }

       if(Number(event.target.id) === 8){
            setState8Terror(true); 

            setStateTerror(false);
            setState1Terror(false);
            setState2Terror(false);
            setState3Terror(false);
            setState4Terror(false);
            setState5Terror(false);
            setState6Terror(false);
            setState7Terror(false);
        }

    }

    function moveUltimoStateTerror(){
        setStateTerror(false);
        setState1Terror(false);
        setState2Terror(false);
        setState3Terror(false);
        setState4Terror(false);
        setState5Terror(false);
        setState6Terror(false);
        setState7Terror(false);
        setState8Terror(false);

        setUltimoFilmeTerror(true);
    }


    // Ficcao Cientifica

     const [ultimoFilmeFiccao, setUltimoFilmeFiccao] = React.useState(false);
     const arrayFilmesFiccao = Ficcao.slice(0, 9);
     const lastFilmeFiccao = [];
 
 
     const [stateFiccao, setStateFiccao] = React.useState(false);
     const [state1Ficcao, setState1Ficcao] = React.useState(false);
     const [state2Ficcao, setState2Ficcao] = React.useState(false);
     const [state3Ficcao, setState3Ficcao] = React.useState(false);
     const [state4Ficcao, setState4Ficcao] = React.useState(false);
     const [state5Ficcao, setState5Ficcao] = React.useState(false);
     const [state6Ficcao, setState6Ficcao] = React.useState(false);
     const [state7Ficcao, setState7Ficcao] = React.useState(false);
     const [state8Ficcao, setState8Ficcao] = React.useState(false);
 
     lastFilmeFiccao[0] = stateFiccao;
     lastFilmeFiccao[1] = state1Ficcao;
     lastFilmeFiccao[2] = state2Ficcao;
     lastFilmeFiccao[3] = state3Ficcao;
     lastFilmeFiccao[4] = state4Ficcao;
     lastFilmeFiccao[5] = state5Ficcao;
     lastFilmeFiccao[6] = state6Ficcao;
     lastFilmeFiccao[7] = state7Ficcao;
     lastFilmeFiccao[8] = state8Ficcao;
 
 
 
     function moreStateFiccao(event){
         setUltimoFilmeFiccao(false);
 
         if(Number(event.target.id) === 0){
             setStateFiccao(true); 
 
             setState1Ficcao(false);
             setState2Ficcao(false);
             setState3Ficcao(false);
             setState4Ficcao(false);
             setState5Ficcao(false);
             setState6Ficcao(false);
             setState7Ficcao(false);
             setState8Ficcao(false);
        }
 
 
 
        if(Number(event.target.id) === 1){
             setState1Ficcao(true); 
 
             setStateFiccao(false);
             setState2Ficcao(false);
             setState3Ficcao(false);
             setState4Ficcao(false);
             setState5Ficcao(false);
             setState6Ficcao(false);
             setState7Ficcao(false);
             setState8Ficcao(false);
        }
 
        if(Number(event.target.id) === 2){
             setState2Ficcao(true); 
 
             setStateFiccao(false);
             setState1Ficcao(false);
             setState3Ficcao(false);
             setState4Ficcao(false);
             setState5Ficcao(false);
             setState6Ficcao(false);
             setState7Ficcao(false);
             setState8Ficcao(false);
         }
 
         if(Number(event.target.id) === 3){
             setState3Ficcao(true);
 
             setStateFiccao(false);
             setState1Ficcao(false);
             setState2Ficcao(false);
             setState4Ficcao(false);
             setState5Ficcao(false);
             setState6Ficcao(false);
             setState7Ficcao(false);
             setState8Ficcao(false); 
        }
 
        if(Number(event.target.id) === 4){
             setState4Ficcao(true); 
 
             setStateFiccao(false);
             setState1Ficcao(false);
             setState2Ficcao(false);
             setState3Ficcao(false);
             setState5Ficcao(false);
             setState6Ficcao(false);
             setState7Ficcao(false);
             setState8Ficcao(false);
         }
 
         if(Number(event.target.id) === 5){
             setState5Ficcao(true); 
 
             setStateFiccao(false);
             setState1Ficcao(false);
             setState2Ficcao(false);
             setState3Ficcao(false);
             setState4Ficcao(false);
             setState6Ficcao(false);
             setState7Ficcao(false);
             setState8Ficcao(false);
        }
 
        if(Number(event.target.id) === 6){
             setState6Ficcao(true);
 
             setStateFiccao(false);
             setState1Ficcao(false);
             setState2Ficcao(false);
             setState3Ficcao(false);
             setState4Ficcao(false);
             setState5Ficcao(false);
             setState7Ficcao(false);
             setState8Ficcao(false); 
         }
 
         if(Number(event.target.id) === 7){
             setState7Ficcao(true); 
 
             setStateFiccao(false);
             setState1Ficcao(false);
             setState2Ficcao(false);
             setState3Ficcao(false);
             setState4Ficcao(false);
             setState5Ficcao(false);
             setState6Ficcao(false);
             setState8Ficcao(false);
        }
 
        if(Number(event.target.id) === 8){
             setState8Ficcao(true); 
 
             setStateFiccao(false);
             setState1Ficcao(false);
             setState2Ficcao(false);
             setState3Ficcao(false);
             setState4Ficcao(false);
             setState5Ficcao(false);
             setState6Ficcao(false);
             setState7Ficcao(false);
         }
 
     }
 
     function moveUltimoStateFiccao(){
         setStateFiccao(false);
         setState1Ficcao(false);
         setState2Ficcao(false);
         setState3Ficcao(false);
         setState4Ficcao(false);
         setState5Ficcao(false);
         setState6Ficcao(false);
         setState7Ficcao(false);
         setState8Ficcao(false);
 
         setUltimoFilmeFiccao(true);
     }


    //  Romance

    const [ultimoFilmeRomance, setUltimoFilmeRomance] = React.useState(false);
    const arrayFilmesRomance = Romance.slice(0, 9);
    const lastFilmeRomance = [];


    const [stateRomance, setStateRomance] = React.useState(false);
    const [state1Romance, setState1Romance] = React.useState(false);
    const [state2Romance, setState2Romance] = React.useState(false);
    const [state3Romance, setState3Romance] = React.useState(false);
    const [state4Romance, setState4Romance] = React.useState(false);
    const [state5Romance, setState5Romance] = React.useState(false);
    const [state6Romance, setState6Romance] = React.useState(false);
    const [state7Romance, setState7Romance] = React.useState(false);
    const [state8Romance, setState8Romance] = React.useState(false);

    lastFilmeRomance[0] = stateRomance;
    lastFilmeRomance[1] = state1Romance;
    lastFilmeRomance[2] = state2Romance;
    lastFilmeRomance[3] = state3Romance;
    lastFilmeRomance[4] = state4Romance;
    lastFilmeRomance[5] = state5Romance;
    lastFilmeRomance[6] = state6Romance;
    lastFilmeRomance[7] = state7Romance;
    lastFilmeRomance[8] = state8Romance;



    function moreStateRomance(event){
        setUltimoFilmeRomance(false);

        if(Number(event.target.id) === 0){
            setStateRomance(true); 

            setState1Romance(false);
            setState2Romance(false);
            setState3Romance(false);
            setState4Romance(false);
            setState5Romance(false);
            setState6Romance(false);
            setState7Romance(false);
            setState8Romance(false);
       }



       if(Number(event.target.id) === 1){
            setState1Romance(true); 

            setStateRomance(false);
            setState2Romance(false);
            setState3Romance(false);
            setState4Romance(false);
            setState5Romance(false);
            setState6Romance(false);
            setState7Romance(false);
            setState8Romance(false);
       }

       if(Number(event.target.id) === 2){
            setState2Romance(true); 

            setStateRomance(false);
            setState1Romance(false);
            setState3Romance(false);
            setState4Romance(false);
            setState5Romance(false);
            setState6Romance(false);
            setState7Romance(false);
            setState8Romance(false);
        }

        if(Number(event.target.id) === 3){
            setState3Romance(true);

            setStateRomance(false);
            setState1Romance(false);
            setState2Romance(false);
            setState4Romance(false);
            setState5Romance(false);
            setState6Romance(false);
            setState7Romance(false);
            setState8Romance(false); 
       }

       if(Number(event.target.id) === 4){
            setState4Romance(true); 

            setStateRomance(false);
            setState1Romance(false);
            setState2Romance(false);
            setState3Romance(false);
            setState5Romance(false);
            setState6Romance(false);
            setState7Romance(false);
            setState8Romance(false);
        }

        if(Number(event.target.id) === 5){
            setState5Romance(true); 

            setStateRomance(false);
            setState1Romance(false);
            setState2Romance(false);
            setState3Romance(false);
            setState4Romance(false);
            setState6Romance(false);
            setState7Romance(false);
            setState8Romance(false);
       }

       if(Number(event.target.id) === 6){
            setState6Romance(true);

            setStateRomance(false);
            setState1Romance(false);
            setState2Romance(false);
            setState3Romance(false);
            setState4Romance(false);
            setState5Romance(false);
            setState7Romance(false);
            setState8Romance(false); 
        }

        if(Number(event.target.id) === 7){
            setState7Romance(true); 

            setStateRomance(false);
            setState1Romance(false);
            setState2Romance(false);
            setState3Romance(false);
            setState4Romance(false);
            setState5Romance(false);
            setState6Romance(false);
            setState8Romance(false);
       }

       if(Number(event.target.id) === 8){
            setState8Romance(true); 

            setStateRomance(false);
            setState1Romance(false);
            setState2Romance(false);
            setState3Romance(false);
            setState4Romance(false);
            setState5Romance(false);
            setState6Romance(false);
            setState7Romance(false);
        }

    }

    function moveUltimoStateRomance(){
        setStateRomance(false);
        setState1Romance(false);
        setState2Romance(false);
        setState3Romance(false);
        setState4Romance(false);
        setState5Romance(false);
        setState6Romance(false);
        setState7Romance(false);
        setState8Romance(false);

        setUltimoFilmeRomance(true);
    }



    // Musical

    const [ultimoFilmeMusical, setUltimoFilmeMusical] = React.useState(false);
    const arrayFilmesMusical = Musical.slice(0, 9);
    const lastFilmeMusical = [];


    const [stateMusical, setStateMusical] = React.useState(false);
    const [state1Musical, setState1Musical] = React.useState(false);
    const [state2Musical, setState2Musical] = React.useState(false);
    const [state3Musical, setState3Musical] = React.useState(false);
    const [state4Musical, setState4Musical] = React.useState(false);
    const [state5Musical, setState5Musical] = React.useState(false);
    const [state6Musical, setState6Musical] = React.useState(false);
    const [state7Musical, setState7Musical] = React.useState(false);
    const [state8Musical, setState8Musical] = React.useState(false);

    lastFilmeMusical[0] = stateMusical;
    lastFilmeMusical[1] = state1Musical;
    lastFilmeMusical[2] = state2Musical;
    lastFilmeMusical[3] = state3Musical;
    lastFilmeMusical[4] = state4Musical;
    lastFilmeMusical[5] = state5Musical;
    lastFilmeMusical[6] = state6Musical;
    lastFilmeMusical[7] = state7Musical;
    lastFilmeMusical[8] = state8Musical;



    function moreStateMusical(event){
        setUltimoFilmeMusical(false);

        if(Number(event.target.id) === 0){
            setStateMusical(true); 

            setState1Musical(false);
            setState2Musical(false);
            setState3Musical(false);
            setState4Musical(false);
            setState5Musical(false);
            setState6Musical(false);
            setState7Musical(false);
            setState8Musical(false);
       }



       if(Number(event.target.id) === 1){
            setState1Musical(true); 

            setStateMusical(false);
            setState2Musical(false);
            setState3Musical(false);
            setState4Musical(false);
            setState5Musical(false);
            setState6Musical(false);
            setState7Musical(false);
            setState8Musical(false);
       }

       if(Number(event.target.id) === 2){
            setState2Musical(true); 

            setStateMusical(false);
            setState1Musical(false);
            setState3Musical(false);
            setState4Musical(false);
            setState5Musical(false);
            setState6Musical(false);
            setState7Musical(false);
            setState8Musical(false);
        }

        if(Number(event.target.id) === 3){
            setState3Musical(true);

            setStateMusical(false);
            setState1Musical(false);
            setState2Musical(false);
            setState4Musical(false);
            setState5Musical(false);
            setState6Musical(false);
            setState7Musical(false);
            setState8Musical(false); 
       }

       if(Number(event.target.id) === 4){
            setState4Musical(true); 

            setStateMusical(false);
            setState1Musical(false);
            setState2Musical(false);
            setState3Musical(false);
            setState5Musical(false);
            setState6Musical(false);
            setState7Musical(false);
            setState8Musical(false);
        }

        if(Number(event.target.id) === 5){
            setState5Musical(true); 

            setStateMusical(false);
            setState1Musical(false);
            setState2Musical(false);
            setState3Musical(false);
            setState4Musical(false);
            setState6Musical(false);
            setState7Musical(false);
            setState8Musical(false);
       }

       if(Number(event.target.id) === 6){
            setState6Musical(true);

            setStateMusical(false);
            setState1Musical(false);
            setState2Musical(false);
            setState3Musical(false);
            setState4Musical(false);
            setState5Musical(false);
            setState7Musical(false);
            setState8Musical(false); 
        }

        if(Number(event.target.id) === 7){
            setState7Musical(true); 

            setStateMusical(false);
            setState1Musical(false);
            setState2Musical(false);
            setState3Musical(false);
            setState4Musical(false);
            setState5Musical(false);
            setState6Musical(false);
            setState8Musical(false);
       }

       if(Number(event.target.id) === 8){
            setState8Musical(true); 

            setStateMusical(false);
            setState1Musical(false);
            setState2Musical(false);
            setState3Musical(false);
            setState4Musical(false);
            setState5Musical(false);
            setState6Musical(false);
            setState7Musical(false);
        }

    }

    function moveUltimoStateMusical(){
        setStateMusical(false);
        setState1Musical(false);
        setState2Musical(false);
        setState3Musical(false);
        setState4Musical(false);
        setState5Musical(false);
        setState6Musical(false);
        setState7Musical(false);
        setState8Musical(false);

        setUltimoFilmeMusical(true);
    }


    // Historico

    const [ultimoFilmeHistorico, setUltimoFilmeHistorico] = React.useState(false);
    const arrayFilmesHistorico = Historico.slice(0, 9);
    const lastFilmeHistorico = [];


    const [stateHistorico, setStateHistorico] = React.useState(false);
    const [state1Historico, setState1Historico] = React.useState(false);
    const [state2Historico, setState2Historico] = React.useState(false);
    const [state3Historico, setState3Historico] = React.useState(false);
    const [state4Historico, setState4Historico] = React.useState(false);
    const [state5Historico, setState5Historico] = React.useState(false);
    const [state6Historico, setState6Historico] = React.useState(false);
    const [state7Historico, setState7Historico] = React.useState(false);
    const [state8Historico, setState8Historico] = React.useState(false);

    lastFilmeHistorico[0] = stateHistorico;
    lastFilmeHistorico[1] = state1Historico;
    lastFilmeHistorico[2] = state2Historico;
    lastFilmeHistorico[3] = state3Historico;
    lastFilmeHistorico[4] = state4Historico;
    lastFilmeHistorico[5] = state5Historico;
    lastFilmeHistorico[6] = state6Historico;
    lastFilmeHistorico[7] = state7Historico;
    lastFilmeHistorico[8] = state8Historico;



    function moreStateHistorico(event){
        setUltimoFilmeHistorico(false);

        if(Number(event.target.id) === 0){
            setStateHistorico(true); 

            setState1Historico(false);
            setState2Historico(false);
            setState3Historico(false);
            setState4Historico(false);
            setState5Historico(false);
            setState6Historico(false);
            setState7Historico(false);
            setState8Historico(false);
       }



       if(Number(event.target.id) === 1){
            setState1Historico(true); 

            setStateHistorico(false);
            setState2Historico(false);
            setState3Historico(false);
            setState4Historico(false);
            setState5Historico(false);
            setState6Historico(false);
            setState7Historico(false);
            setState8Historico(false);
       }

       if(Number(event.target.id) === 2){
            setState2Historico(true); 

            setStateHistorico(false);
            setState1Historico(false);
            setState3Historico(false);
            setState4Historico(false);
            setState5Historico(false);
            setState6Historico(false);
            setState7Historico(false);
            setState8Historico(false);
        }

        if(Number(event.target.id) === 3){
            setState3Historico(true);

            setStateHistorico(false);
            setState1Historico(false);
            setState2Historico(false);
            setState4Historico(false);
            setState5Historico(false);
            setState6Historico(false);
            setState7Historico(false);
            setState8Historico(false); 
       }

       if(Number(event.target.id) === 4){
            setState4Historico(true); 

            setStateHistorico(false);
            setState1Historico(false);
            setState2Historico(false);
            setState3Historico(false);
            setState5Historico(false);
            setState6Historico(false);
            setState7Historico(false);
            setState8Historico(false);
        }

        if(Number(event.target.id) === 5){
            setState5Historico(true); 

            setStateHistorico(false);
            setState1Historico(false);
            setState2Historico(false);
            setState3Historico(false);
            setState4Historico(false);
            setState6Historico(false);
            setState7Historico(false);
            setState8Historico(false);
       }

       if(Number(event.target.id) === 6){
            setState6Historico(true);

            setStateHistorico(false);
            setState1Historico(false);
            setState2Historico(false);
            setState3Historico(false);
            setState4Historico(false);
            setState5Historico(false);
            setState7Historico(false);
            setState8Historico(false); 
        }

        if(Number(event.target.id) === 7){
            setState7Historico(true); 

            setStateHistorico(false);
            setState1Historico(false);
            setState2Historico(false);
            setState3Historico(false);
            setState4Historico(false);
            setState5Historico(false);
            setState6Historico(false);
            setState8Historico(false);
       }

       if(Number(event.target.id) === 8){
            setState8Historico(true); 

            setStateHistorico(false);
            setState1Historico(false);
            setState2Historico(false);
            setState3Historico(false);
            setState4Historico(false);
            setState5Historico(false);
            setState6Historico(false);
            setState7Historico(false);
        }

    }

    function moveUltimoStateHistorico(){
        setStateHistorico(false);
        setState1Historico(false);
        setState2Historico(false);
        setState3Historico(false);
        setState4Historico(false);
        setState5Historico(false);
        setState6Historico(false);
        setState7Historico(false);
        setState8Historico(false);

        setUltimoFilmeHistorico(true);
    }


    return(
    <GlobalContextFilmes.Provider value={{
        moveManchete,
        moveMancheteTwo,
        leftDivTrue,
        resetFilmes,
        rightDivTrue,
        moveFilmeAuto,
        moveFilmeAutoTwo,
        moreState,
        moveUltimoState, 
        moreStateComedia,
        moveUltimoStateComedia,
        moreStateAventura,
        moveUltimoStateAventura,
        moreStateDrama,
        moveUltimoStateDrama,
        moreStateTerror,
        moveUltimoStateTerror,
        moreStateFiccao,
        moveUltimoStateFiccao,
        moreStateRomance,
        moveUltimoStateRomance,
        moreStateMusical,
        moveUltimoStateMusical,
        moreStateHistorico,
        moveUltimoStateHistorico,
        normalDiv,
        leftDiv,
        rightDiv,
        arrayLancamentos,
        backgroundImage,
        title,
        Destaque,
        Lancamentos,
        FatherStar,
        capa,
        description,
        divLancamentosFilmes,
        Acao,
        arrayFilmes,
        lastFilme,
        UltimoFilme,
        Comedia,
        UltimoFilmeComedia,
        arrayFilmesComedia,
        lastFilmeComedia,
        srcManchete,
        titlePlay,
        ultimoFilmeAventura,
        arrayFilmesAventura,
        Aventura,
        lastFilmeAventura,
        ultimoFilmeDrama,
        arrayFilmesDrama,
        Drama,
        lastFilmeDrama,
        ultimoFilmeTerror,
        arrayFilmesTerror,
        Terror,
        lastFilmeTerror,
        ultimoFilmeFiccao,
        arrayFilmesFiccao,
        Ficcao,
        lastFilmeFiccao,
        ultimoFilmeRomance,
        arrayFilmesRomance,
        Romance,
        lastFilmeRomance,
        ultimoFilmeMusical,
        arrayFilmesMusical,
        Musical,
        lastFilmeMusical,
        ultimoFilmeHistorico,
        arrayFilmesHistorico,
        Historico,
        lastFilmeHistorico,
    }}>
        {children}
    </GlobalContextFilmes.Provider>
    )
}