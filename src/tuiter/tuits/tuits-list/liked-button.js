import React, {useState} from 'react';

export default function Likes() {
    const [like, setLike] = useState(false);
    return(
            <a onClick={() => setLike((prevLike) => !prevLike)}>
                {like ? "❤️": <i className="bi bi-suit-heart"></i>}
            </a>
    )
}