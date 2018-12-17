exports.get = () => {
    let token = localStorage.getItem('token')
    return token
}
exports.set = (token) => {
    console.log(token)
    localStorage.setItem('token', token)
}