import classes from './Button.module.css' 

console.log(classes)

export function Button({children, isActive, ... props}){

    return(
        <button disabled={props.disabled} className={isActive ? `${classes.btn} ${classes.active}` : classes.btn} onClick={props.onClick}>{children}</button>
    );
}