import type { ReactElement } from "react";



interface ButtonProps{
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon ?: ReactElement;
    endIcon ?: ReactElement;
    onClick : () => void;
    fullWidth ?: boolean;
    loading ?: boolean;

}


const variantStyle ={
    "primary" : "bg-[#5046e4]  text-white font-semibold",
    "secondary" : "bg-[#e0e7fe] text-[#5046e4] font-semibol",
}
const sizeStyle = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg": "py-4 px-6"
}

const defaultStyles = "rounded-md flex font-light item-center text-center"


export const Button = (props : ButtonProps)=>{
  
    return <button onClick={props.onClick} className={`${variantStyle[props.variant]} ${defaultStyles} ${sizeStyle[props.size]}  ${props.fullWidth? "w-full flex justify-center items-center" : "" }  ${props.loading ? "opacity-45" : ""}`} disabled={props.loading}>{props.startIcon ?<div className="pr-2">{props.startIcon}</div>:null}{props.text} {props.endIcon}</button>
}

<Button variant="primary"  size="md" onClick={()=>{}}  text="hello"/>