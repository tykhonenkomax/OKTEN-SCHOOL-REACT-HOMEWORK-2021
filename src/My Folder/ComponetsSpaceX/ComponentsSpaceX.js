import {useEffect, useState} from "react";

function ComponentsSpaceX() {

    let [space, setSpace] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                let newArr = value.filter(s=>s.launch_year !== '2020')
                setSpace(newArr)
            });
        console.log(space)
    }, [])


    return (
        <div>
            {
                space.map(value => <div key={value.id}>
                    {value.flight_number}.) -
                    <strong>{value.mission_name}</strong>  -
                    {value.launch_year}
                    <img className={'photo'} src={value.links.mission_patch_small}/>
                    <hr/> </div>)

            }
        </div>
    )
}

export default ComponentsSpaceX;
