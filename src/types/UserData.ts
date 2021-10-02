import { Tag } from "./Tag";
import { Task } from "./Task";

export interface UserData {
    user_data: {
        task_list: Task[], global_tag_list: Tag[]
    }
}
