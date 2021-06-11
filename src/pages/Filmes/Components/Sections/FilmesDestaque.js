import React from 'react';
import BarTitle from '../BarTitle/BarTitle';
import { FilmesDestaqueContainer } from '../Containers/FilmesDestaque/Styles/StyleFilmesDestaque';
import WrapperFilmes from '../Containers/FilmesDestaque/WrapperFilmes';

const FilmesDestaque = () => {


    return (
        <FilmesDestaqueContainer>

            <BarTitle colorText='#000' bgcolor='#fff'>
                Destaque
            </BarTitle>

            <WrapperFilmes />
            
        </FilmesDestaqueContainer>   
    )
}

export default FilmesDestaque;
