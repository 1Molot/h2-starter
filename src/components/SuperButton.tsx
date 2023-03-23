import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    name?: string,
    callBack: () => void
    color?: string
    children?: React.ReactNode
    disabled?: boolean
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {name, callBack, color, ...restProps} = props
    const onClickHandler = () => {
        callBack()
    }

    // //в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx
    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')
    // const finalClassName=`${s.button} ${s.default}`
    // const finalClassName=`
    // ${s.button}
    // ${color==='red' ? s.red : s.default} ${s.default}
    // ${restProps.disabled ? s.disabled: ''}`

    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default
        ${restProps.disabled ? s.disabled: ''}`
    
    
    return (
        <button className={finalClassName} onClick={onClickHandler}>{restProps.children}</button>
    );
};




//------------------------------------------------------

// export const SuperButton: React.FC<PropsType> = ({
//                                                      name,
//                                                      callBack,
//                                                     ...props
//                                                  }) => {
//     const onClickHandler = () => {
//         callBack()
//     }
//
//     console.log(props.color)
//     return (
//         <button onClick={onClickHandler}>{props.name}</button>
//     );
// };
// export const SuperButton = (props: PropsType) => {
//     const onClickHandler = () => {
//         props.onClick()
//     }
//     return (
//         <button onClick={onClickHandler}>{props.name}</button>
//     );
// };