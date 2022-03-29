function ComponentsUsers(props) {
    let {name, age, status} = props;

    let classNameItem = 'card';
    return(
        <div>
<h2>{name} {status.toString()}</h2>
            <p> мій особистий вік: {age}</p>

        </div>
    );
}
export default ComponentsUsers;