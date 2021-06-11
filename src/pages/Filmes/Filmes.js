import React from 'react';
import { FilmesPage } from '../styles/StyleFilmes';
import Manchete from './Components/Sections/Manchete';
import FilmesDestaque from './Components/Sections/FilmesDestaque';
import FilmesLancamentos from './Components/Sections/FilmesLancamentos';
import Acao from './Components/Sections/Acao';
import Comedia from './Components/Sections/Comedia';
import Aventura from './Components/Sections/Aventura';
import Drama from './Components/Sections/Drama';
import Terror from './Components/Sections/Terror';


const Filmes = () => {

   
    
    React.useEffect(()=>{
        const head = document.querySelector('head');
        const meta = head.children[2];
        const shortcut = document.createElement('link');
        shortcut.setAttribute('rel', 'icon');
        shortcut.setAttribute('href', 'imagens/iconesGerais/pipoca.svg');
        head.insertBefore(shortcut,meta)
    }, [])


    return (
        <FilmesPage>

            <Manchete />

            <FilmesDestaque />

            <FilmesLancamentos />

            <Acao />

            <Comedia />

            <Aventura />

            <Drama />

            <Terror />
        
        </FilmesPage>
    )
}

export default Filmes;
