import React, {useRef} from 'react'

const Emoji = (props) => {
    const emojiRef = useRef(null);
    function copyToClipboard(e) {
        props.click(emojiRef.current.innerText)
      };
    return(
        <div className="emoji" ref={emojiRef} onClick={copyToClipboard}>{props.children}</div>
    )
}

export default Emoji