import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '979d9ce7-5a57-44f9-9b9c-37da1881885c'
    }
})

type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

// type CreateTodoResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {
//         item: TodoType
//     }
// }
//
// type DeleteAndUpdateResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }

type CommonResponseType<T={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}


export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodoType>>('todo-lists')
    },

    postTodolists(title: string) {
        let promise = instance.post<CommonResponseType<{item: TodoType}>>('todo-lists',{title: title})
        return promise
    },

    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },

    updateTodo(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    }
}