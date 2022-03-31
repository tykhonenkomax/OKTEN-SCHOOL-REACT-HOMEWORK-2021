function userComponents({item}) {
       return(
        <div>
            {item.id}
            {item.name}
            {item.email};
        </div>
    );
}
export default userComponents;