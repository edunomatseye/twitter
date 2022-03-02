import {useRef} from 'react'
import useSWR from 'swr'

const API = "http://localhost:3001"

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    return [ htmlElRef, setFocus ] 
}

const fetcher = (...args) => fetch(...args).then(res => res.json())

const usePost = (id) => {
    const { data, error } = useSWR(`${API}/posts/${id}`, fetcher)
    return {
      post: data,
      isLoading: !error && !data,
      isError: error
    }
}

const usePosts = () => {
    const { data, error } = useSWR(`${API}/posts`, fetcher)
    return {
      posts: data,
      isLoading: !error && !data,
      isError: error
    }
}

export {
    useFocus,
    fetcher,
    usePost,
    usePosts
}