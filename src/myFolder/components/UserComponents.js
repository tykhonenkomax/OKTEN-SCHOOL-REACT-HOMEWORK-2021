function UserComponents({item,search}) {
       return(
        <div>
            {item.id} -
            {item.name} -
            {item.username};

            <button onClick={()=> search(item.id)}>Push ME</button>
        </div>
    );
}
export default UserComponents;