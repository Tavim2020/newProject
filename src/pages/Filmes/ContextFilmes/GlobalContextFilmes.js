import React from 'react';
import Destaque from '../../../Data/destaque';
import Lancamentos from '../../../Data/lancamentos';




export const GlobalContextFilmes = React.createContext();


export const GlobalStorageFilmes = ({children}) =>{

    const backgroundImage = React.useRef(null);
    const title = React.useRef(null);
    const description = React.useRef(null);
    const capa = React.useRef(null);
    const estrelas = React.useRef(null);
    const FatherStar = React.useRef(null);

    const [retroRight, setRetroRight] = React.useState(false);
    const [normalRight, setNormalRight] = React.useState(true);

    const [retroLeft, setRetroLeft] = React.useState(false);
    const [normalLeft, setNormalLeft] = React.useState(true);


    const arrayLancamentos = Lancamentos.slice(1, 15);




    function moveManchete(event){  
        const id = event.target.id;
        backgroundImage.current.src = Destaque[id].background;
        title.current.textContent = Destaque[id].title;
        description.current.textContent = Destaque[id].description;
        capa.current.src = Destaque[id].capa;
        estrelas.current = Destaque[id].stars;
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


    function newLoadLeft(event){
        setNormalRight(false);
        setRetroRight(true);
        const childrenOfFather = event.target.parentNode.children;

        const primeiraImg = childrenOfFather.length - 7;
        childrenOfFather[primeiraImg].style.visibility = 'hidden';

        const penultimaImg = childrenOfFather.length - 2;
        const antiPenultimaImg = childrenOfFather.length - 3;
        const centroImg = childrenOfFather.length - 4;
        const terceiraImg = childrenOfFather.length - 5;
        const segundaImg = childrenOfFather.length - 6;

        childrenOfFather[penultimaImg].src = Destaque[6].capa;
        childrenOfFather[antiPenultimaImg].src = Destaque[8].capa;
        childrenOfFather[centroImg].src = Destaque[10].capa;
        childrenOfFather[terceiraImg].src = Destaque[12].capa;
        childrenOfFather[segundaImg].src = Destaque[14].capa;


        childrenOfFather[penultimaImg].id = Destaque[6].id;
        childrenOfFather[antiPenultimaImg].id = Destaque[8].id;
        childrenOfFather[centroImg].id = Destaque[10].id;
        childrenOfFather[terceiraImg].id = Destaque[12].id;
        childrenOfFather[segundaImg].id = Destaque[14].id;

    }

    function resetFilmes(event){
        setRetroRight(false);
        setNormalRight(true);

        const childrenOfFather = event.target.parentNode.children;

        const primeiraImg = childrenOfFather.length - 7;
        childrenOfFather[primeiraImg].style.visibility = 'visible';

        const penultimaImg = childrenOfFather.length - 2;
        const antiPenultimaImg = childrenOfFather.length - 3;
        const centroImg = childrenOfFather.length - 4;
        const terceiraImg = childrenOfFather.length - 5;
        const segundaImg = childrenOfFather.length - 6;

        childrenOfFather[penultimaImg].src = Destaque[3].capa;
        childrenOfFather[antiPenultimaImg].src = Destaque[1].capa;
        childrenOfFather[centroImg].src = Destaque[0].capa;
        childrenOfFather[terceiraImg].src = Destaque[2].capa;
        childrenOfFather[segundaImg].src = Destaque[4].capa;


        childrenOfFather[penultimaImg].id = Destaque[3].id;
        childrenOfFather[antiPenultimaImg].id = Destaque[1].id;
        childrenOfFather[centroImg].id = Destaque[0].id;
        childrenOfFather[terceiraImg].id = Destaque[2].id;
        childrenOfFather[segundaImg].id = Destaque[4].id;
    }


    function newLoadRight(event){
        setNormalLeft(false);
        setRetroLeft(true);

        const childrenOfFather = event.target.parentNode.children;

        const ultimaImg = childrenOfFather.length - 1;
        childrenOfFather[ultimaImg].style.visibility = 'hidden';

        const penultimaImg = childrenOfFather.length - 2;
        const antiPenultimaImg = childrenOfFather.length - 3;
        const centroImg = childrenOfFather.length - 4;
        const terceiraImg = childrenOfFather.length - 5;
        const segundaImg = childrenOfFather.length - 6;

        childrenOfFather[penultimaImg].src = Destaque[13].capa;
        childrenOfFather[antiPenultimaImg].src = Destaque[11].capa;
        childrenOfFather[centroImg].src = Destaque[9].capa;
        childrenOfFather[terceiraImg].src = Destaque[7].capa;
        childrenOfFather[segundaImg].src = Destaque[5].capa;


        childrenOfFather[penultimaImg].id = Destaque[13].id;
        childrenOfFather[antiPenultimaImg].id = Destaque[11].id;
        childrenOfFather[centroImg].id = Destaque[9].id;
        childrenOfFather[terceiraImg].id = Destaque[7].id;
        childrenOfFather[segundaImg].id = Destaque[5].id;
    }


    function resetFilmesTwo(event){
        setRetroLeft(false);
        setNormalLeft(true);

        const childrenOfFather = event.target.parentNode.children;

        const ultimaImg = childrenOfFather.length - 1;
        childrenOfFather[ultimaImg].style.visibility = 'visible';

        const penultimaImg = childrenOfFather.length - 2;
        const antiPenultimaImg = childrenOfFather.length - 3;
        const centroImg = childrenOfFather.length - 4;
        const terceiraImg = childrenOfFather.length - 5;
        const segundaImg = childrenOfFather.length - 6;

        childrenOfFather[penultimaImg].src = Destaque[3].capa;
        childrenOfFather[antiPenultimaImg].src = Destaque[1].capa;
        childrenOfFather[centroImg].src = Destaque[0].capa;
        childrenOfFather[terceiraImg].src = Destaque[2].capa;
        childrenOfFather[segundaImg].src = Destaque[4].capa;


        childrenOfFather[penultimaImg].id = Destaque[3].id;
        childrenOfFather[antiPenultimaImg].id = Destaque[1].id;
        childrenOfFather[centroImg].id = Destaque[0].id;
        childrenOfFather[terceiraImg].id = Destaque[2].id;
        childrenOfFather[segundaImg].id = Destaque[4].id;
    }


    const divLancamentosFilmes = React.useRef(null);
    
    function moveFilmeAuto(event){
        const scroll = divLancamentosFilmes.current;

        setTimeout(()=>{
            if(event.screenX >= 1200){
                    scroll.scrollLeft+= 100;     
            }
            else if(event.screenX <= 150){
                scroll.scrollLeft-= 100;
            }
    
        }, 500)
    }



    return(
    <GlobalContextFilmes.Provider value={{
        moveManchete,
        moveMancheteTwo,
        newLoadLeft,
        resetFilmes,
        newLoadRight,
        resetFilmesTwo,
        moveFilmeAuto,
        retroLeft,
        normalRight,
        retroRight,
        normalLeft,
        arrayLancamentos,
        backgroundImage,
        title,
        Destaque,
        Lancamentos,
        FatherStar,
        capa,
        description,
        divLancamentosFilmes,
    }}>
        {children}
    </GlobalContextFilmes.Provider>
    )
}