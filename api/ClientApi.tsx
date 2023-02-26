import { create } from "apisauce";

const apiClient = create({
    //baseURL: 'http://192.168.1.39:3000',
    baseURL: 'http://172.20.10.10:3000',
    headers: { Accept: 'application/vnd.github.v3+json' },
})
export default apiClient