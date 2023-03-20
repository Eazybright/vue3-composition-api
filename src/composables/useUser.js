import { ref } from 'vue'

export default function useUser() {
    const user = ref([])
    const baseURL = 'https://jsonplaceholder.typicode.com/users'
    const fetchAll = async () => {
        const response = await fetch(baseURL)
        user.value = await response.json()
    }

    const fetchOne = async (id) => {
        const response = await fetch(`${baseURL}/${id}`)
        user.value = await response.json()
    }

    return { user, fetchAll, fetchOne }
}