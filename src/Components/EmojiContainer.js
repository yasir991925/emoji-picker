import React from 'react'
import Emoji from './Emoji.js'

const EmojiCointainer = ({data}) => {
    const d = data.map(e => <Emoji>{e.symbol}</Emoji>)
    return(
        <div>
            {d}
        </div>
    )
}

export default EmojiCointainer