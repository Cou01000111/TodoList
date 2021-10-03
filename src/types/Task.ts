
export interface Task {
    "done": boolean
    "id": number,
    "priority": number,
    "deadline": string,
    "name": string,
    "parent_id": number,
    "description": string,
    "child_list": Task[],
    "tag_id_list": number[]
}
