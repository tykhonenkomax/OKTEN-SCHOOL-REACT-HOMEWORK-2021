function UserComponents(props) {

let {item:{ id, name, username, email,address}}=props;
    return(
        <div>
            <p><strong>Id №:</strong> {id} <strong> <br/>
                Name:</strong> {name} <br/>
                <strong>Surname:</strong> {username} <br/>
                <strong>Email:</strong> {email} <br/>
                <strong>ADDRESS:</strong> <br/>
                <strong>Street:</strong> {address.street} <br/>
                <strong>Suite:</strong> {address.suite} <br/>
                <strong>City:</strong> {address.city} <br/>
                <strong>ADDRESS:</strong> <br/>
                <strong>Street:</strong> {address.street} <br/>
                <strong>Suite:</strong> {address.suite} <br/>
                <strong>City:</strong> {address.city} <br/>
                <strong>Zipcode:</strong> {address.zipcode} <br/>
                <strong>GEO:</strong> <br/>
                <strong>lat:</strong> {address.geo.lat} <br/>
                <strong>lng:</strong> {address.geo.lng} <br/>


            </p>

        </div>
    );
}
export default UserComponents;