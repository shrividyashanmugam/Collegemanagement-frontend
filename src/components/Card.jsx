import './Card.css';
import studentImg from '../assets/student1.png'
export default function Card({name,rollno,cgpa})
{
    return(
        <div>
            <div class="table">
                <img src={studentImg} alt="student"/>
                <h2>name</h2>
                <p>rollno</p>
                <p>cgpa</p>
            </div>
        </div>
    );
}