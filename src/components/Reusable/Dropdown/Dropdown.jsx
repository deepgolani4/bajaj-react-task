import { useState } from "react";
import styles from './Dropdown.module.scss';


function Dropdown({title, updateCatagory, list}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.dropdown}>
            <div className={styles.default_value} onClick={()=>setOpen(!open)}>
                <span>{title}</span>
            </div>
            {open && (
            <div className={styles.list}>
                {list.map((item, index) => (
                    <p className={styles.list_item} onClick={()=> {
                        setOpen(false);
                        updateCatagory(item.name)
                    }}>{item.name}</p>
                ))}                
            </div>
            )}
        </div>
    )
}

export default Dropdown;