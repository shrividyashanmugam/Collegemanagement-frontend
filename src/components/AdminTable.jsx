
export default function AdminTable({data}) {
    return (
        <div className='whole'>
            <h2>Admin Table</h2>
            <table border="1" className="design">
                <thead>
                <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Destination</th>
                        
                </tr>
                </thead>
                <tbody>
                {data?.map(faculty => (  
                <tr key={faculty?.id} className="tool">  
                    <td>{faculty?.id}</td>
                    <td>{faculty?.name}</td>
                    <td>{faculty?.destination}</td>
                    <td>{faculty?.Experience}</td>
                   

                </tr>
))}
</tbody>

            </table>
        </div>
    );
}
