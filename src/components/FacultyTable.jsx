import './FacultyTable.css';

export default function FacultyTable({ data }) {
  return (
    <div className="faculty-table-container">
      <h2 className="faculty-table-title">Faculty Table</h2>

      <table className="faculty-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((faculty) => (
            <tr key={faculty?.id}>
              <td>{faculty?.id}</td>
              <td>{faculty?.name}</td>
              <td>{faculty?.department}</td>
              <td>{faculty?.designation}</td>
              <td>{faculty?.experience}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}