import React from 'react'
import { MessageCircleMore , UserRound , UserPlus , Receipt , Mail } from 'lucide-react'


import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='card-container'>
        <div className="top-container">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <div className='user-container'>
                <p>{props.id}</p>
                <p>{props.gmail}</p>
            </div>
            <p>{props.country}</p>
         </div>
         <div className="middle-container">
         <div className='icon-name-container'>
         <MessageCircleMore className='icon' />
         <p>{props.messagesCount}</p>
         </div>
         <div className='icon-name-container'>
         <UserRound className ='icon' />
         <p>{props.followingCount}</p>
         </div>
         <div className='icon-name-container'>
         <UserPlus color  = 'skyblue'/>
         <p style = {{color : "skyblue"}} >{props.followersCount}</p>
         </div>
         <div className='icon-name-container'>
         <Receipt className ='icon' />
         <p>{props.dollarCount}</p>
         </div>

         </div>
         <div className="third-container">
            <p>{props.description}</p>
         </div>
         <div className="fourth-container">
            <div className='follow-section'>
                <UserPlus color='skyblue'/>
                <p>Follow</p>
            </div>
            <div className='follow-section'>
                <Mail color='skyblue' />
                <p>Message</p>
            </div>
         </div>
         <div className="bottom-container">
            <div className="bottom-first">
                <p>Markets</p>
                <p>{props.role}</p>
            </div>
            <div className='line'></div>
            <div className="bottom-first">
                <p>Qualification</p>
                <p>{props.qualification} </p>
            </div>
         </div>
      
    </div>
  )
}

export default UserCard
