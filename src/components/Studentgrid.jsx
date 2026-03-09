import './Studentgrid.css';

export default function Studentgrid({data}) {
    return (
        <div className="Container">
            <h2 className='title'>Student Grid</h2>
            <div className="grid-container">
                {data.map(student => (  
                    <div key={student.id} className="student-card">
                        <h1 className='card'>{student.Name}</h1>
                        <p>{student.Regno}</p>
                        <p>{student.Course}</p>
                        <p>{student.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
