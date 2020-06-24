import React from 'react'
import filterEmoji from './filterEmoji'

const Search = ({loadEmoji}) => {
    function search(e){
        loadEmoji(filterEmoji(e.target.value))
    }

    return(
        <div className="search">
            <input onChange={search} placeholder="search here" />
        </div>
    )
}

export default Search