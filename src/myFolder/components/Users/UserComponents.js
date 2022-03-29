function UserComponents(props) {
    let {item:{id, name,username,email}} = props;

    return(
        <div>
            <h3>{id}</h3>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>

        </div>
    );
}
export default UserComponents;