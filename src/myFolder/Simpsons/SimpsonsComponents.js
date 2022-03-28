import './StyleSimpsons.css'

function SimpsonsComponents(props) {
  let {name,img,about}=props;
    return(
        <div>
            <div>
                <h2>{name}</h2>
                <img src={img}/>
                <p>{about}</p>

            </div>

        </div>
    );
}
export default SimpsonsComponents;