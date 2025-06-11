import type {ReactElement} from 'react'

interface SidebarItemsProps {
    text: string;
    Icon: ReactElement;
    }

const SidebarItems = ({text , Icon} : SidebarItemsProps) => {
   
  return (
    <div className='flex text-gray-600 py-2 cursor-pointerv rounded  max-w-48 pl-4 hover:bg-gray-200 transition-all duration-150'>
     
          <div className='pr-2'>
 {Icon}
        </div>
        <div className=' font-semibold'>

        {text}
        </div> 
      
    </div>
  )
}

export default SidebarItems
