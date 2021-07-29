import axios from 'axios'

export const fetchApi = async ({ api, method, data = null, }) => {
    const config = {
        headers: {
            "CONTENT-TYPE": "application/json"
        }
    }

    if (method === 'GET') {
        const res = await axios.get(api)
        if (res) {
            return res
        }
    }
    if (method === 'POST') {
        const stringData = JSON.stringify(data)
        const res = await axios.post(api, config, stringData)
        if (res) {
            return res.data()
        }
    }



}