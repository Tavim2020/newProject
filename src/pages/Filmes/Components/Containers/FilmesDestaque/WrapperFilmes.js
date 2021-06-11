import React from 'react';
import { GlobalContextFilmes } from '../../../ContextFilmes/GlobalContextFilmes';

const WrapperFilmes = () => {

    const { Destaque, normalDiv, moveManchete, leftDivTrue, 
            leftDiv, resetFilmes, rightDivTrue, rightDiv} = React.useContext(GlobalContextFilmes);

    return (
        <div>
             {leftDiv && (
                <div className='Wrapper'>
                    <img className='Hidden' src={Destaque[6].capa} alt={Destaque[6].title} />

                    <img className='Second' id={Destaque[14].id} onClick={moveManchete} src={Destaque[14].capa} alt={Destaque[14].title} />

                    <img className='Third' id={Destaque[12].id} onClick={moveManchete} src={Destaque[12].capa} alt={Destaque[12].title} />

                    <img className='Fourth' id={Destaque[10].id} onClick={moveManchete} src={Destaque[10].capa} alt={Destaque[10].title} />

                    <img className='Fifth' id={Destaque[8].id} onClick={moveManchete} src={Destaque[8].capa} alt={Destaque[8].title} />

                    <img className='Sixth' id={Destaque[6].id} onClick={moveManchete} src={Destaque[6].capa} alt={Destaque[6].title} />

                    <img className='Seventh' onClick={resetFilmes} id={Destaque[4].id} src={Destaque[4].capa} alt={Destaque[4].title} />
                </div>
            )}



            {normalDiv && (
                <div className='Wrapper'>
                    <img className='First' onClick={leftDivTrue} id={Destaque[6].id} src={Destaque[6].capa} alt={Destaque[6].title} />

                    <img className='Second' id={Destaque[4].id} onClick={moveManchete} src={Destaque[4].capa} alt={Destaque[4].title} />

                    <img className='Third' id={Destaque[2].id} onClick={moveManchete} src={Destaque[2].capa} alt={Destaque[2].title} />

                    <img className='Fourth' id={Destaque[0].id} onClick={moveManchete} src={Destaque[0].capa} alt={Destaque[0].title} />

                    <img className='Fifth' id={Destaque[1].id} onClick={moveManchete} src={Destaque[1].capa} alt={Destaque[1].title} />

                    <img className='Sixth' id={Destaque[3].id} onClick={moveManchete} src={Destaque[3].capa} alt={Destaque[3].title} />

                    <img className='Seventh' onClick={rightDivTrue} id={Destaque[5].id} src={Destaque[5].capa} alt={Destaque[5].title} />
                </div>
            )}




            {rightDiv && (
                <div className='Wrapper'>
                    <img className='First' onClick={resetFilmes} id={Destaque[3].id} src={Destaque[3].capa} alt={Destaque[3].title} />

                    <img className='Second' id={Destaque[5].id} onClick={moveManchete} src={Destaque[5].capa} alt={Destaque[5].title} />

                    <img className='Third' id={Destaque[7].id} onClick={moveManchete} src={Destaque[7].capa} alt={Destaque[7].title} />

                    <img className='Fourth' id={Destaque[9].id} onClick={moveManchete} src={Destaque[9].capa} alt={Destaque[9].title} />

                    <img className='Fifth' id={Destaque[11].id} onClick={moveManchete} src={Destaque[11].capa} alt={Destaque[11].title} />

                    <img className='Sixth' id={Destaque[13].id} onClick={moveManchete} src={Destaque[13].capa} alt={Destaque[13].title} />

                    <img className='HiddenRight' id={Destaque[5].id} src={Destaque[5].capa} alt={Destaque[5].title} />
                </div>
            )}
        </div>
)}

export default WrapperFilmes;
