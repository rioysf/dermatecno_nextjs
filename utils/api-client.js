import axios from 'axios';

// ignore cert
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// get token

let token = ""

if (typeof window !== 'undefined') {
    token = localStorage.getItem("token") || ""
}

class ApiClient {
    
    async get(path) {
        const options = {
            'Authorization': `Bearer ${token}`,
            'Content-Type' : 'application/json',
            'method' : 'GET'
        }
        const res = await axios.get(`${path}`, options)
        return res
    }

    async post(path, payload) {
        const options = {
            'Authorization': `Bearer ${token}`,
            'method' : 'POST',
            'headers': {
                'Content-Type' : 'application/json',
            }
        }
        const res = await axios.post(`${path}`, payload, options);
        return res
    }

    async put(path, payload) {
        const options = {
            'Authorization': `Bearer ${token}`,
            'method' : 'PUT',
            'headers': {
                'Content-Type' : 'application/json',
            },
            'body' : JSON.stringify(payload),
        }
        const res = await axios.put(`${path}`, payload, options);
        return res
    }

    async delete(path) {
        const options = {
            'Authorization': `Bearer ${token}`,
            'method' : 'DELETE',
        }
        const res = await axios.delete(`${path}`, options);
        return res
    }

}

export default ApiClient