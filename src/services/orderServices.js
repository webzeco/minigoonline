import http from './httpservice';
const url =`${process.env.REACT_APP_URL}/api/v1/order`;
export function getAllOrders() {
    return http.get(`${url}/allOrders`);
}
export function addOrder(data) {
    return http.post(`${url}/addOrder`, {
        data
});
}
export function addBalance(id,method,balance){
    return http.patch(`${url}/addBalance/${id}`, {
        method,
        balance
});
};


export function getUserTransactions(id) {
    return http.get(`${url}/${id}`);
}
export function getUserStats(id) {
    return http.get(`${url}/stats/${id}`);
}
export function createNewTransaction(trans) {
     const data={
    amount:parseInt(trans.amount),
    name:trans.name,
    method:trans.method
    }
    return http.post(url,data);
}
const AllServices = {
    getAllOrders,
    addOrder
}
export default AllServices;