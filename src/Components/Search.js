
import React from 'react'
import StarsR from './StarsRating'

function Search({searchWord , rate , setRate }) {
    return (
        <div className="Bar">
            <h3 className="titre">Movie App</h3>
            <input className="form-control form-control-sm ml-3 w-75" onChange={(e)=>searchWord(e)} type="text" placeholder="Search" aria-label="Search"></input>
            <StarsR count={rate} setRate={setRate} />
        </div>

    )   
}

export default Search
