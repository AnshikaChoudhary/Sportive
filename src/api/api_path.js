// let appMode = process.env.REACT_APP_APP_MODE
// let prodURL = process.env.REACT_APP_PROD_URL
// let devURL = process.env.REACT_APP_DEV_URL


//let URL = appMode === 'production' ? prodURL : devURL
let URL = 'https://api.sportive365.com/'

let pathApiObj = {
    BASE_URL: URL,

    //authentication
    LOGIN: 'auth/adminlogin',

    //user list
    USERS_LIST: 'users/list',
    USER_SUSPEND: 'users/update',
    USER_UPDATE: 'users/update',
    USER_CREATE: 'auth/signup',
    ROLE_LIST: 'role/list',
    ROLE_CREATE: 'role/create',

    //Report list
    REPORT_LIST: 'report/list',


    //promotion list
    PROMOTION_LIST: 'promotion/list',
    Add_PROMOTION_LIST: 'promotion/create',
    Remove_PROMOTION: 'promotion/delete',
    Remove_Template: 'template/delete',

    //Notification
    NOTIFICATIO_LIST: 'notification/list',
    NOTIFICATIO_REMOVE: 'notification/delete',

    // Template
    CREATE_TEMPLATE: 'temple/create',
    LIST_TEMPLATE: 'temple/list',
    DELETE_TEMPLATE: 'temple/delete',

    // Content
    CREATE_CONTENT: 'content/create',
    LIST_CONTENT: 'content/list',
    DELETE_CONTENT: 'content/delete',

    // GROUP
    CREATE_GROUP: 'group/create',
    UPDATE_GROUP: 'group/update',
    LIST_GROUP: 'group/list',
    DELETE_GROUP: 'group/delete',

    // POLL
    CREATE_POLL: 'pole/create',
    LIST_POLL: 'pole/list',
    DELETE_POLL: 'pole/delete',
    UPDATE_POLL: 'pole/update',

    // OCCUPATION
    LIST_OCCUPATION: 'occupation/list',
    DELETE_OCCUPATION: 'occupation/delete',
    CREATE_OCCUPATION: 'occupation/create',


}
export default pathApiObj
