import React, { useState } from "react";
import Picker from "emoji-picker-react";

function Testing() {
//   const [chosenEmoji, setChosenEmoji] = useState(null);

//   const onEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
//     console.log('emojiObject',emojiObject);
//   }
//   return (
//     <>
//     <h1 style={{textAlign: 'center'}}>Demo emoji picker</h1>
//         <div style={{textAlign: 'center', marginLeft: '810px'}}>
//             <Picker onEmojiClick={onEmojiClick}/>
//             {chosenEmoji && <EmojiData chosenEmoji = {chosenEmoji} />}
//         </div>
//     </>
//   );
// }

// const EmojiData = ({chosenEmoji}) => {
//     <div style={{textAlign: 'center', marginRight: '810'}}>
//         <br></br>
//         <br></br>
//         <br></br>
//         <hr></hr>
//         <strong>Names : </strong> {chosenEmoji.names}<br />
//         <strong>Symbol : </strong> {chosenEmoji.emoji}
//     </div>
const [chosenEmoji, setChosenEmoji] = useState(null);
 
const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log('emojiObject',emojiObject.target);
};

return (
    <div>
        <h3>GeeksforGeeks Emoji Picker</h3>
        {chosenEmoji ? (
            <span>
                Your Emoji:
                <img
                    style={{ width: "15px" }}
                    src={chosenEmoji.target.src}
                />
            </span>
        ) : (
            <span>No Emoji</span>
        )}
        <Picker onEmojiClick={onEmojiClick} />
    </div>
);
}
export default Testing;
