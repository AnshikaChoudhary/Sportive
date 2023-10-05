import axios from 'axios'
import { Alert } from 'react-bootstrap';
import { toast } from 'react-toastify'
const tokenKey = sessionStorage.getItem('token_key')
const customId = 'custom-id-yes'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const InstanceAxios = axios.create({
    rejectUnauthorized: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': tokenKey,
        'Content-Type': 'application/json',
        'x-testing-platform': 'web',
        'x-testing-version': '1.0.0',
        'accept-language': 'en',
    },
})

const UploadAxios = axios.create({
    rejectUnauthorized: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': tokenKey,
        'Content-Type': 'multipart/form-data',
        'x-testing-platform': 'web',
        'x-testing-version': '1.0.0',
        'accept-language': 'en',
    },
})

export const handleMultiPart = (apiOptions) => {
    return new Promise((callback) => {
        UploadAxios({
            method: apiOptions.method,
            url: apiOptions.url,
            data: apiOptions.data,
            params: apiOptions.params,
        })
            .then((response) => {
                if (response?.data?.statusCode === 500) {
                    toast.error(response?.data?.message, {
                        toastId: customId,
                    })
                    return
                }
                if (response?.data.statusCode === 413) {
                    Alert('Image is too large');
                    return
                }
                if (response?.data?.success) {
                    return callback({
                        success: true,
                        data: response?.data,
                    })
                } else {
                    return callback({
                        success: false,
                        data: response?.data,
                    })
                }
            })

            .catch((err) => {
                if (err?.response?.status === 500 && err?.response?.data?.message) {
                    return toast.error(err?.response?.data?.message, {
                        toastId: customId,
                    })
                }

                if (err?.code === 'ERR_NETWORK') {
                    return alert('No internet connection.')
                }
                if (err?.response?.status === 401) {
                    localStorage.clear()
                    toast.error('token has been expired')
                    console.log(err);
                    window.location.href = '/login'
                }
                if (err?.response?.status === 404 && err.response.data.message === 'USER_NOT_EXIST') {
                    localStorage.clear()
                    console.log(err);
                    window.location.href = '/'
                }

                if (err?.response?.status === 404) {
                    // toast.info("Page not exist");
                }
            })
    })
}

export const makeTheApiCall = (apiOptions) => {
    return new Promise((callback) => {
        InstanceAxios({
            method: apiOptions.method,
            url: apiOptions.url,
            data: apiOptions.data,
            params: apiOptions.params,
        })
            .then((response) => {
                if (response?.data?.statusCode === 500) {
                    toast.error(response?.data?.message, {
                        toastId: customId,
                    })
                    return
                }
                if (response?.data?.success) {
                    return callback({
                        success: true,
                        data: response?.data,
                    })
                } else {
                    return callback({
                        success: false,
                        data: response?.data,
                    })
                }
            })

            .catch((err) => {
                if (err?.response?.status === 500 && err?.response?.data?.message) {
                    return toast.error(err?.response?.data?.message, {
                        toastId: customId,
                    })
                }

                if (err?.code === 'ERR_NETWORK') {
                    return alert('No internet connection.')
                }
                if (err?.response?.status === 401) {
                    localStorage.clear()
                    toast.error('token has been expired')
                    console.log(err);
                    window.location.href = '/login'
                }
                if (err?.response?.status === 404 && err.response.data.message === 'USER_NOT_EXIST') {
                    localStorage.clear()
                    console.log(err);
                    window.location.href = '/'
                }

                if (err?.response?.status === 404) {
                    // toast.info("Page not exist");
                }
            })
    })
}
