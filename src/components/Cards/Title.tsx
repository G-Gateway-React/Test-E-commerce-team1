import {TitleStyle, TitleMaskStyle } from './Style';

const  Title:React.FC=()=> {

    return (
        <>
        <TitleStyle>
        <span>CATEGOR</span>IES
        </TitleStyle>
        </>
    )
}

export default Title;

export const  TitleMask:React.FC=()=> {

    return (
        <>
         <TitleMaskStyle> 
       NEW BOOTS ADDED RECENTLY
      </TitleMaskStyle>
        </>
    )
}

