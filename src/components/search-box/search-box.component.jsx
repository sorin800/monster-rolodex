import React from "react";
import './search-box.style.css'

//componentele functii nu au access la state si
// nici la metode de lifecycle pentru ca nu mostenesc Component,
// practic nu au acces la constructor
// o componenta functionala e doar o componenta care primeste
// niste props si returneaza html

//({placeholder, handleChange}) am facut desctructure adica
//extragem placeholder si handleChange din ce primeste functia, props
export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input className="search" type="search"
               placeholder={placeholder}
               onChange={handleChange}/>
    )


}