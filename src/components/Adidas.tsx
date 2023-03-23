import React from 'react';

type dataType = {
    id: number,
    model: string,
    price: number
}
type PropsType = {
    prices: dataType[]
    children?: React.ReactNode
}


export const Adidas = (props: PropsType) => {
    return (
        <div>
            {props.prices.map(el => {
                return (
                    <div>
                        <span>{el.id}</span>
                        <span>{el.model}</span>
                        <span>{el.price}</span>
                    </div>
                )
            })}
            <div>{props.children}</div>
            <div>-----------------------------------------------------------------</div>
        </div>
    );
};