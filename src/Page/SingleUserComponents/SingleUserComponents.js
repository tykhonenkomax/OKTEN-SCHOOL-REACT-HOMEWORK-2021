import css from './SingleUserComponents.module.css'
import {CvComponents} from '../CvComponents'


const SingleUserComponents = ({userItem}) => {
    const{id,name,username,email,phone,website}=userItem;
    

    return (
        <div>
            <div className={css.generalword}>
            <div className={css.photoGeneral}>
                <p className={css.idFont}>Manager №: {id}</p>
                <button className={css.button1} onClick={()=><CvComponents/>}>More information</button>
            </div>
              <div className={css.generalAboutWorker}>

         <div className={css.informationAboutWorker}>

            <h5>Name: {name} </h5>
            <h5>Username: {username} </h5>
            <p>Email: {email}</p>
            <p>My phone number: {phone}</p>
            <p>Website: {website}</p>
         </div>
                  <div>
                      <img className={css.photo} src="https://www.brandinginasia.com/wp-content/uploads/2021/06/Corbin-Branding-in-Asia.jpg" alt=""/>
                  </div>

              </div>
            </div>
            <hr/>
        </div>
    );
};

export {SingleUserComponents};