import apipath from "../api/api_path";
import axios from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.ssl = false;
export async function Loginapi(body) {
    try {
        const res = await axios.post(apipath.BASE_URL + apipath.LOGIN, body, {
            rejectUnauthorized: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                "x-testing-platform": "web",
                "x-testing-version": "1.0.0",
                "accept-language": 'en',
            },
        });
        return res?.data;
    } catch (error) {
        console.log(error);
        return error?.res?.data;
    }
}
