import './Studentform.css';
import { useState } from "react"
export default function App()
{
    const [name,setName] = useState("");
    const [rollno,setRollno] = useState("");
    const [regno,setRegno] = useState("");
    const [course,setCourse] = useState("");
    const [duration,setDuration] = useState("");
    const handleNameChange=(e) =>{
      if(e.target.value.length<10){
         setName(e.target.value)
    }
   }
    function handleFormSubmit(e){
      e.preventDefault();
      let obj={
         name :name,
         rollno :rollno,
         regno :regno,
         course :course,
         duration :duration
      }
      console.log(obj)
    }
    return(
    <div>
        <form onSubmit={handleFormSubmit}>
            <input 
             type="text"
             name="fname"
             placeholder="First Name" 
             onChange={handleNameChange}
             value={name}
            /><br/>
             <input 
             type="text"
             name="rollnumber"
             placeholder="Rollnumder" 
             onChange={(e) =>{
                setRollno(e.target.value)
             }}
             value={rollno}
            /><br/>
            <input 
             type="text"
             name="registernumber"
             placeholder="Registernumber" 
             onChange={(e) =>{
                setRegno(e.target.value)
             }}
             value={regno}
            /><br/>
             <input 
             type="text"
             name="course"
             placeholder="Course" 
             onChange={(e) =>{
                setCourse(e.target.value)
             }}
             value={course}
            /><br/>
            <input 
             type="number"
             name="duration"
             placeholder="Duration" 
             onChange={(e) =>{
                setDuration(e.target.value)
             }}
             value={duration}
            /><br/> 
            <input type="submit"/>
        </form>
        
    </div>
    )
}