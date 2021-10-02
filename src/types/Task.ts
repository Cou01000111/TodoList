
export interface Task {
    "id": number,
    "priority": number,
    "deadline": string,
    "name": string,
    "parent_id": number,
    "description": string,
    "child_list": number[],
    "tag_id_list": number[]
}
