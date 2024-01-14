import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BusinessCard} from './components/BusinessCard'

function App() {
  const[addCard,setAddCard] = useState(false);
  
  const[name,setName] = useState('')
  const[description,setDescription] = useState('')
  const[interests,setInterests] = useState([])
  const[socialMedia,setSocialMedia] = useState({})
  const[linkedin,setLinkedIn] = useState('')
  const[twitter,setTwitter] = useState('')

  const[interest1,setInterest1] = useState('')
  const[interest2,setInterest2] = useState('')
  const[interest3,setInterest3] = useState('')



  return (
    
    <div>
      <label for="name">Enter Name</label>
      <input id="name" type="text"  onChange={(e)=>{
        setName(e.target.value);
      }} /><br/>
      <label for="description">Enter description</label>
      <input id="description" type="text"  onChange={(e)=>{
        setDescription(e.target.value);
      }} /><br/>
      <label for="interests">Enter Interests</label><br/>
      <input id='interests' type="text" placeholder='Enter interest 1' onChange={(e)=>{
        setInterest1(e.target.value)
        
      }} /><br/>
      <input id='interests' type="text" placeholder='Enter interest 2' onChange={(e)=>{
        setInterest2(e.target.value)

      }} /><br/>
      <input id='interests' type="text" placeholder='Enter interest 3' onChange={(e)=>{
        setInterest3(e.target.value)

      }} /><br/>
       <label for="linkedin">Enter linkedin url</label><br/>
       <input id='linkedin' type="text" onChange={(e)=>{
        
        setLinkedIn(e.target.value);
      }} /><br/>
       <label for="twitter">Enter twitter url</label><br/>
       <input id='twitter' type="text" onChange={(e)=>{
        setTwitter(e.target.value)
      }} /><br/>
      <button onClick={()=>{
        setInterests([]);
        setInterests([interest1,interest2,interest3]);
        setSocialMedia({linkedin:linkedin,twitter:twitter});
        setAddCard(true);

      }}>Submit</button>
      {addCard &&  <BusinessCard name={name} description={description} interests={interests} socialmedia={socialMedia} ></BusinessCard>}

       





    
      
    </div>
  )
}



export default App
