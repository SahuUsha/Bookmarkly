
interface InputProps{
    placeholder : string;
    ref ?: any;
    
}


export function Input({ref , placeholder} : InputProps){

    return(
        <input ref={ref} type="text" placeholder={placeholder} className="border-2 font-semibold text-black border-gray-500 rounded-md p-2 " />
    )
}