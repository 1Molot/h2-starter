import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {Adidas} from "./components/Adidas";



function App() {
    const prices = [
        { id: 1, model: "HTML&CSS", price: 100200 },
        { id: 2, model: "HTML&CSS222", price: 100200 },
        { id: 3, model: "HTML&CSS333", price: 100200 },
        { id: 4, model: "HTML&CSS444", price: 100200 },

    ]


    return (
        <div>
            {/*<SuperButton name={'RedButton'} callBack={()=>{}} color={'red'}/>*/}


            <Adidas prices={prices}>
                <SuperButton  callBack={()=>{}} color={'red'}>RedButton</SuperButton>
                <SuperButton  callBack={()=>{}} color={'secondary'}>RedButton</SuperButton>
                <SuperButton  callBack={()=>{}} disabled>RedButton</SuperButton>
            </Adidas>
            <Adidas prices={prices}>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <input type="text"/>
                </div>

                <input type="text"/>
                <input type="text"/>
                <SuperButton  callBack={()=>{}} disabled>RedButton</SuperButton>
            </Adidas>
            <Adidas prices={prices}></Adidas>


        </div>
    );
}



export default App;