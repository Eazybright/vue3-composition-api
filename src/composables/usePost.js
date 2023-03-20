import { ref } from 'vue'

export default function usePost() {
    const post = ref([])
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'
    const fetchAll = async () => {
        const response = await fetch(baseURL)
        post.value = await response.json()
    }

    const fetchOne = async (id) => {
        const response = await fetch(`${baseURL}/${id}`)
        post.value = await response.json()
    }

    return { post, fetchAll, fetchOne }
}