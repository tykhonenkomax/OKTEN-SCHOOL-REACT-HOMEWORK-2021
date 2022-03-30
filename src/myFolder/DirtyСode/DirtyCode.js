function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())
}

function idUsers(id) {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id).then(value => value.json())
}
export {getUsers, idUsers}