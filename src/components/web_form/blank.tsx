import Autoris from "./childrens/autorisation"
import Accept from "./childrens/podtversdenie"
import RegistAcc from "./childrens/registration.request"
import styles from "./blank.module.sass"
import Contacts from "./childrens/contatcts"


function formBlank(){
    return (
        <div className={styles["form-blank"]}>
            <Contacts />
        </div>
    )
}
export default formBlank;