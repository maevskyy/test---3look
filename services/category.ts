import { TCategory } from "@/types/Tcategory"

const API__URL = 'http://localhost:3000/api/category'

export const getCategories = async () => {
    const res = await fetch(API__URL, { method: 'GET' })
    const data = await res.json()
    return data
}

// cause of dragAndDrop
export const fullUpdate = async (allCategories: TCategory[]) => {
    const res = await fetch(API__URL, {
        body: JSON.stringify(allCategories),
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    return data
}

// i had to do here a lot more requests with changes without drag and drop functionality, but just dont have time, it was nice experience thx