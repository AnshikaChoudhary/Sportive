import apiPath from "../api/api_path";
import { makeTheApiCall, handleMultiPart } from "../../src/api/axios.config";

// User LIst
export async function list(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.USERS_LIST,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

//Role List
export async function roleList(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.ROLE_LIST,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Update User Role
export async function updateRole(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.USER_SUSPEND,
        method: "put",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Create Role
export async function createRole(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.ROLE_CREATE,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

export async function updateUser(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.USER_UPDATE,
        method: "put",
        data: content,
    };
    const res = await handleMultiPart(options);

    return res;
}

export async function createUser(content) {
    console.log(content);
    let options = {
        url: apiPath.BASE_URL + apiPath.USER_CREATE,
        method: "post",
        data: content
    };
    const res = await handleMultiPart(options);

    return res;
}


export async function suspendUser(content) {
    var bodyFormData = new FormData();
    bodyFormData.append('_id', content._id);
    bodyFormData.append('isSuspended', content.isSuspended);
    let options = {
        url: apiPath.BASE_URL + apiPath.USER_SUSPEND,
        method: "put",
        data: bodyFormData,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Report List 
export async function postlist(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.REPORT_LIST,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}


// Promotion List 
export async function getpromotionlist(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.PROMOTION_LIST,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

export async function addPromotionList(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.Add_PROMOTION_LIST,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}
// Notification List 
export async function getNotificationlist(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.NOTIFICATIO_LIST,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Promotion Remove 
export async function removePromotion(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.Remove_PROMOTION,
        method: "delete",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// LIST New Template
export async function listTemplate(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.LIST_TEMPLATE,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Create New Template
export async function createTemplate(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.CREATE_TEMPLATE,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}


// Templates Remove 
export async function removeTemplate(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.DELETE_TEMPLATE,
        method: "delete",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// LIST New Content
export async function listContent(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.LIST_CONTENT,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Create New Template
export async function createContent(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.CREATE_CONTENT,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}


// Templates Remove 
export async function removeContent(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.DELETE_CONTENT,
        method: "delete",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Notification Remove 
export async function removeNotification(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.NOTIFICATIO_REMOVE,
        method: "delete",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Groups
export async function listGroups(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.LIST_GROUP,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

export async function updateGroup(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.UPDATE_GROUP,
        method: "put",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

export async function deleteGroup(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.DELETE_GROUP,
        method: "delete",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// POllS
export async function listPolls(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.LIST_POLL,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

export async function updatePolls(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.UPDATE_POLL,
        method: "put",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

export async function deletePoll(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.DELETE_POLL,
        method: "delete",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Occupation

export async function listOccupation(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.LIST_OCCUPATION,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

// Role Manager

export async function listMangerRole(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.LIST_OCCUPATION,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}


export async function createRoleManager(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.CREATE_OCCUPATION,
        method: "post",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}

export async function deleteRoleManager(content) {
    let options = {
        url: apiPath.BASE_URL + apiPath.DELETE_OCCUPATION,
        method: "delete",
        data: content,
    };
    const res = await makeTheApiCall(options);

    return res;
}
