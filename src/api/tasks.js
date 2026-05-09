import client from "./client";

export async function createTask(taskName, taskDesc, taskStart, taskEnd) {
    try{
        const response = await client.post(
            "/tasks/",
            {
                taskName: taskName,
                taskDesc: taskDesc,
                taskStart: taskStart,
                taskEnd: taskEnd
            }
        )
        return response.data
    }
    catch(error){
        return {error: error.response?.data?.detail}
    }

}

export async function getTask() {
    try {
        const response = await client.get(
            "/tasks/",
        )
        return response.data
    } catch (error) {
        return {error: error.response?.data?.detail}
    }

}

export async function deleteTask(id) {
    try {
        const response = await client.delete(
            `/tasks/${id}/`
        )
        return response.data

    } catch (error) {
        return {error: error.response?.data?.detail}
    }

}

export async function updateTask(id) {
    try {
        const response = await client.patch(
            `/task/${id}/`
        )
        return response.data

    } catch (error) {
        return {error: error.response?.data?.detail}
    }
}