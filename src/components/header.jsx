import React, { useEffect, useState } from 'react'
import {Link} from  'react-router-dom'
 const Header = ({openSideNav,changePageName}) =>{
    const [page,setPage] = useState('')
    const menus = [
        {
            name:'Home',
            route:'/',
        },
        {
            name:'Services',
            route:'/services',
        },
        {
            name:'Projects',
            route:'/project',
        },
        {
          name:'About Us',
          route:'/about',
       },
       {
        name:'Our Vision & Policy',
        route:'/policy',
     },
     {
        name:'Gallery',
        route:'/gallery',
     },
    ]
    
    useEffect(()=>{
        let location = window.location
        setPage(location.pathname)
    },[])
    const setPageName = (route) => {
       setPage(route)
    }
    // const is_logged_in
    return(
        <>
           <div className='d_flex_s header_container' style={{borderBottom:'1px solid #ddd',minHeight:'60px',paddingInline:'20px'}}>
            <div>
            <img src='https://st3.depositphotos.com/5040187/19111/v/450/depositphotos_191119630-stock-illustration-logo-swoosh-ellipse-red-letter.jpg' height={'50px'} width={'100px'} alt="" />
            {/* <img src='/favicon.jpg' height={'50px'} width={'100px'} alt="" /> */}
            {/* <h4 className='primary_color'>SR Interiors</h4> */}
            </div>
            <div className='header_link'>
               {menus.map((menu,menu_key)=>{
                return(    
                    <Link onClick={()=>{setPageName(menu.route);changePageName(menu.route)}} key={menu_key} className={`link font-semibold text-[15px]  ${menu.route==page ? 'text-primary_color' : ''}`} 
                    style={{ textDecoration: 'none',marginLeft:'20px' }} to={menu.route}>{menu.name}</Link>                   
                )
               })}
            </div>
            <div>
              {localStorage.email ? 
               <div className="user_batch mouse">
               <p> {localStorage.email[0]}</p>{console.log(this.props)}
              </div>
              :
              <button className='secondary_button text-[14px] px-[15px] py-[5px] rounded'>
              <a href="tel:999424 41630">Call Us : 999424 41630 </a> 
            </button>    
            }         
               </div>
           </div>
        </>
    )
}
export default Header