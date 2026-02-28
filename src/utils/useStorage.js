import {ref, watch} from 'vue'

export function useStorage(key, value = []) {
    const storage = localStorage.getItem(key)
    const data = ref(storage  ? JSON.parse(storage) : value )

    watch(data, (value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }, {deep: true})

    function setValue(task) {
        if (!task || Object.keys(task).length === 0) return;
        data.value.push(task)
    }

    function removeValue(id) {
        data.value = data.value.filter(i => i.id !== id)
    }

    function updateItem(updated) {
        const index = data.value.findIndex(i => i.id === updated.id)
        if (index !== -1) {
            data.value[index] = updated
        }
    }

    return {data, setValue, removeValue, updateItem}
}