/** TO Access Token From Local Storage */
export default function getAuthHeaders() {
    return { authorization: localStorage.getItem('AcessToken') }
}
