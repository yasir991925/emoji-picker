import React from 'react'
import Emoji from './Emoji.js'

const EmojiCointainer = ({data,copyEmoji}) => {
    var d
    if(data === 'Null'){
        d = <h1 className="oops">Hey there!</h1>
    }else if(data.length > 0){
        d = data.map((e,i) => <Emoji key={i} click={copyEmoji}>{e.symbol}</Emoji>)
    }else{
        d = <h1 className="oops">OOPS!</h1>
    }
    return(
        <div className="emoji-container">
            {d}
        </div>
    )
}

export default EmojiCointainer