import React from "react";
import "./Wishlist.css"

function Vegetables() {

    const [count_1, setCount_1] = React.useState(10)
    const [count_2, setCount_2] = React.useState(8)
    const [count_3, setCount_3] = React.useState(5)
    const [count_4, setCount_4] = React.useState(7)

    const handlePlus_1 = ( value ) => {
        setCount_1( count_1 + value )
    } 

    const handlePlus_2 = ( value ) => {
        setCount_2( count_2 + value )
    } 

    const handlePlus_3 = ( value ) => {
        setCount_3( count_3 + value )
    } 

    const handlePlus_4 = ( value ) => {
        setCount_4( count_4 + value )
    } 

    return(
        <div className="Wishlist">
            <span><h2>Tomato - { count_1 }</h2></span>
            <button onClick={ () => handlePlus_1(1) }>+</button>
            <button onClick={ () => handlePlus_1(-1) }>-</button>
            <br></br>
            <span><h2>Potato - { count_2 }</h2></span>
            <button onClick={ () => handlePlus_2(1) }>+</button>
            <button onClick={ () => handlePlus_2(-1) }>-</button>
            <br></br>
            <span><h2>Carrot - { count_3 }</h2></span>
            <button onClick={ () => handlePlus_3(1) }>+</button>
            <button onClick={ () => handlePlus_3(-1) }>-</button>
            <br></br>
            <span><h2>Onion - { count_4 }</h2></span>
            <button onClick={ () => handlePlus_4(1) }>+</button>
            <button onClick={ () => handlePlus_4(-1) }>-</button>
        </div>
    )
}

export default Vegetables;

