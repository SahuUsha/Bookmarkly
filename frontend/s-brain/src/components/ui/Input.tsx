export function Input({onChange , placeholder} : {placeholder : string ; onChange: ()=>void}){

    return(
        <input type="text" onChange={onChange} placeholder={placeholder} className="border-2 font-semibold text-black border-gray-500 rounded-md p-2 " />
    )
}