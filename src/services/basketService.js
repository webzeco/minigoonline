import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/basket`;
export function getAllBaskets() {
    return http.get(`${url}/getBaskets`);
}

const AllServices = {
    getAllBaskets
}
export default AllServices;