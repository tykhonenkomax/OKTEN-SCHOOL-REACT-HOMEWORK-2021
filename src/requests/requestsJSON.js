let linkRequestFromJson = process.env.REACT_APP_API

let requestUserPostComment ={
    users: './users',
    posts: './posts',
    comments:'./comments'
}
export default linkRequestFromJson;
export {requestUserPostComment};