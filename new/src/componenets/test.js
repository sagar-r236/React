import { useState } from "react"

const Test = () => {
    const [count, setCount] = useState(1);

    function onClick() {
        setCount(count + 1);
        console.log(count)
    }

    console.log(count);

    return(
        <button onClick={onClick}>increment count</button>
    )
}

export default Test;