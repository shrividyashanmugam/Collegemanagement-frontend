import Card from './Card'
import './Cardsection.css'

export default function Cardsection(){
    let data=[
        {id:1,heading:"Ravi Kumar",paragraph:"Student ID: STU001 | CGPA: 8.75 | B.Tech Computer Science, 3rd Year, 156 credits completed"},
        {id:2,heading:"Priya Sharma",paragraph:"Student ID: STU002 | CGPA: 9.12 | B.Tech Information Technology, 3rd Year, 162 credits completed"},
        {id:3,heading:"Arun Patel",paragraph:"Student ID: STU003 | CGPA: 7.89 | B.Tech Electronics, 2nd Year, 112 credits completed"},
        {id:4,heading:"Sneha Gupta",paragraph:"Student ID: STU004 | CGPA: 8.45 | B.Sc Mathematics, 2nd Year, 98 credits completed"},
        {id:5,heading:"Vikram Singh",paragraph:"Student ID: STU005 | CGPA: 9.35 | B.Tech Mechanical, 4th Year, 198 credits completed"},
        {id:6,heading:"Anjali Reddy",paragraph:"Student ID: STU006 | CGPA: 8.23 | BCA, 3rd Year, 145 credits completed"},
        {id:7,heading:"Karthik M",paragraph:"Student ID: STU007 | CGPA: 8.98 | B.Tech AI & ML, 2nd Year, 108 credits completed"},
    ]
    return (
        <div className="container">
            {
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <Cardsection head={item.heading} para={item.paragraph} />
                        </div>
                    );
                })
            }
        </div>
    );
}
