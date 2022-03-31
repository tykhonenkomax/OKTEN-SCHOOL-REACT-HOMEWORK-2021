function UserComponents({item,fatherFunction}) {
       return(
        <div>
            {item.id} -
            {item.name} -
            {item.email} -
            <button onClick={fatherFunction}>Push ME</button>
        </div>
    );
}
export default UserComponents;