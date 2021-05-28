import React from 'react'
import BarTitleLancamentos from '../Containers/FilmesLancamentos/BarTitleLancamentos';
import { FilmesLancamentosContainer } from '../Containers/FilmesLancamentos/Styles/StyleFilmesLancamentos';
import WrapperLancamentos from '../Containers/FilmesLancamentos/WrapperLancamentos';

const FilmesLanccamentos = () => {
    return (
        <FilmesLancamentosContainer >

            <BarTitleLancamentos />

            <WrapperLancamentos />

        </FilmesLancamentosContainer>  
    )
}

export default FilmesLanccamentos
