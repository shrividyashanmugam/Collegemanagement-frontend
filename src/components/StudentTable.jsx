import'./StudentTable.css';
export default function StudentTable({data}) {
    return (
        <div className='whole'>
            <h2>Student Table</h2>
            <table border="1" class="design">
                <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Reg no</th>
                        <th>Course</th>
                        <th>Duration</th>
                </tr>
                {data.map(student => (  
                <tr key={student.id} class="tool">  
                    <td>{student.id}</td>
                    <td>{student.Name}</td>
                    <td>{student.Regno}</td>
                    <td>{student.Course}</td>
                    <td>{student.duration}</td>

                </tr>
))}

            </table>
        </div>
    );
}
