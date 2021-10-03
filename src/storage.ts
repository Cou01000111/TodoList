import DUMMY_DATA from "./dummyData.json";
import { Task } from "./types/Task";
import { Tag } from "./types/Tag";

export function getUserData(): any {
    return DUMMY_DATA
}

/*

userDataProblemExits // user_dataの問題があるか
    isTaskListNormal  // task_listに問題があるか
        foreach isTask // taskが型として問題ないか
        isTaskValueNormal // task_listの値に問題があるか
            exitsTaskListSomeId // idに重複しているidがないか
    isTagListNormal // tag_listに問題があるか
        foreach isTag // tagが型として問題ないか
        isTagValueNormal // tag_listの値に問題がないか
            exitsTagListSomeId // 重複しているidはないか


*/


function userDataProblemExists(): boolean {
    return true;
}

function isTaskValueNormal(task: Task): boolean {
    task.id
}

function exitsTaskListSomeId(task_list: Task[]) {
    const id_list = new Set(task_list.map((task: Task) => task.id));
    return (task_list.map((task: Task) => task.id).length != id_list.size)
}



function isTask(task: any): task is Task {
    let exits_child_list_normal = Array.isArray(task.child_list);
    if (exits_child_list_normal && task.child_list.length == 0)
        exits_child_list_normal = true
    else (exits_child_list_normal && task.child_list.length != 0)
    exits_child_list_normal = isTask(task.child_list[0])

    return (
        typeof task === "object" &&
        typeof task.done === "boolean" &&
        typeof task.id === "number" &&
        typeof task.priority === "number" &&
        typeof task.deadline === "string" &&
        typeof task.name === "string" &&
        typeof task.description === "string" &&
        exits_child_list_normal &&
        Array.isArray(task.tag_id_list) &&
        isArrayTypeValid(task.tag_id_list, "number")
    );
}

function isArrayTypeValid(items: any[], type: string): boolean {
    let rtn_value = true;
    items.forEach((item: any) => {
        rtn_value = typeof item === type;
    });
    return rtn_value;
}

function isTag(tag: any): tag is Tag {
    return (
        typeof tag.id === "number" &&
        typeof tag.name === "string" &&
        typeof tag.color === "string"
    )
}
