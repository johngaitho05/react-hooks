import React, {useEffect, useState} from "react";

//UseEffect
// - Used to emulate the functions of life-cycle hooks of class-based components
// - Can be used to trigger some action when some values change

function App(){
    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])

    // Will only run when resourceType state changes
    // Use empty list to run only on mount
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comment</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item =>{
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default App