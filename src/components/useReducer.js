import React, {useState,useReducer} from "react";
import {INITIAL_STATE, postReducer} from "./helpers/postReducer";
import {ACTION_TYPES} from "./helpers/postActionTypes";


//When to use useReducer
// i. When two or more states changes together
// ii. When you have a complex state, and you need to update every single item inside it


const App =  ()=> {
    //USING STATE
    // const [loading,setLoading] = useState(false)
    // const [post,setPost] = useState({})
    // const [error,setError] = useState(false)

    //USING USEREDUCER
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    //USING STATE
    // const handleFetch = ()=>{
    //     setLoading(true)
    //     setError(false)
    //     setPost({})
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //         .then((res)=>res.json())
    //         .then((data)=>{
    //             setLoading(false)
    //             console.log(data)
    //             setPost(data)
    //         }).catch((err)=>{
    //         setLoading(false)
    //         setError(true)
    //     })
    // }

    //USING USEREDUCER
    const handleFetch = ()=>{
        dispatch({type:ACTION_TYPES.FETCH_START})
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res)=>res.json())
            .then((data)=>{
                dispatch({type:ACTION_TYPES.FETCH_SUCCESS,payload:data})
            }).catch((err)=>{
            dispatch({type:ACTION_TYPES.FETCH_ERROR})
        })
    }

    //USING STATE
    // return (
    //     <div>
    //         <button onClick={handleFetch}>
    //             {loading ? "Wait..." : "Fetch the post"}
    //         </button>
    //         <p>{post?.title}</p><span>{error && "Something went wrong!"}</span>
    //     </div>
    // )

    //USING USEREDUCER
    return (
        <div>
            <button onClick={handleFetch}>
                {state.loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{state.post?.title}</p><span>{state.error && "Something went wrong!"}</span>
        </div>
    )
}

export default App