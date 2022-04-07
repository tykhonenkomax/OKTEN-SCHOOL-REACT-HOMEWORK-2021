function RequesrUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}
export default (RequesrUsers)
