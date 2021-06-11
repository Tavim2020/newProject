import React from 'react'
import BarTitle from '../BarTitle/BarTitle';
import { FilmesLancamentosContainer } from '../Containers/FilmesLancamentos/Styles/StyleFilmesLancamentos';
import WrapperLancamentos from '../Containers/FilmesLancamentos/WrapperLancamentos';

const FilmesLanccamentos = () => {
    return (
        <FilmesLancamentosContainer >

            <BarTitle colorText='#F93535' bgcolor='#fff'>
                Lançamentos
            </BarTitle>

            <WrapperLancamentos />

        </FilmesLancamentosContainer>  
    )
}

export default FilmesLanccamentos
