

let jsonRequest =process.env.REACT_APP_API

let jsonRequests ={
    users: './users',
    posts:'./posts',
    comments:'./comments'
}

export default jsonRequest;

export {jsonRequests};