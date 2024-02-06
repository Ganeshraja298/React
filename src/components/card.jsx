import React from "react";

export default function card(props){
        const {name,age} = props.member;
        const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9b62_bfgYUkecspFqTPkSBJf-ufUiMOrag&usqp=CAU'
    return(
        <>  
              <div className="member_card"> 
              <img src={image} alt="My car" style={{maxWidth: '100%'}}/>  
              <div style={{padding:'20px'}}>
               <h5>{`${name}`}</h5>    
               <h6>{`${age}`}</h6>
              </div>                                
              </div>
                
        </>
    )
}
