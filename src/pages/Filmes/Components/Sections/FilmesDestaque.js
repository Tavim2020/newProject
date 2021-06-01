import React from 'react';
import BarTitle from '../Containers/FilmesDestaque/BarTitle';
import { FilmesDestaqueContainer } from '../Containers/FilmesDestaque/Styles/StyleFilmesDestaque';
import WrapperFilmes from '../Containers/FilmesDestaque/WrapperFilmes';

const FilmesDestaque = () => {


    return (
        <FilmesDestaqueContainer>

            <BarTitle />

            <WrapperFilmes />
            
        </FilmesDestaqueContainer>   
    )
}

export default FilmesDestaque;
