import React, {useState} from 'react'
import './Sidebar.css'
import { CgCloseR, CgMenu } from "react-icons/cg";

const imgs = [
    {
        id:1,
        img : 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
        alt: 'description 01'
    },
    {
        id:2,
        img : 'https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'description 02'
    },
    {
        id:3,
        img : 'https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'description 03'
    }
]

const Sidebar = () => {
  const [ sidebarToggle, setSidebarToggle ]=useState(false);
  
  const  sidebarClose =() =>{
        setSidebarToggle(!sidebarToggle);
        console.log(sidebarToggle)
  } 
  return (
    <aside className={ sidebarToggle ? 'sidebar-container active' : 'sidebar-container' }>
        <div className='contents'>
             {
                imgs.map(img=>(
                    <div>
                        <img src={img.img} alt={img.alt}  />
                    </div>
                ))
             }
        </div>
        {/* <button onClick={ sidebarClose }>{sidebarToggle ? "열기" : "닫기"}</button> */}
        <div className='button'
             onClick={ sidebarClose }
        >
            {
                sidebarToggle ? <CgCloseR /> : <CgMenu />
            }
        </div>
    </aside>
  )
}

export default Sidebar