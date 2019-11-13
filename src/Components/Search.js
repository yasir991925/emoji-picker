import React , {useState} from 'react'
import filterEmoji from './filterEmoji'

const Search = ({loadEmoji}) => {

    const [value,setValue] = useState('')

    function search(e){
        setValue(e.target.value)
        loadEmoji(filterEmoji(value))
    }

    return(
        <div className="search">
            <input value={value} onChange={search} />
        </div>
    )
}

export default Search