import { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0)
    return (
        <div>
            <button onMouseOver={() => {setCounter(count+1)}}>button pressed {count} times </button>
        </div>
    )
}

export default Counter
