import './StudentTable.css';

export default function StudentTable({ data }) {
  return (
    <div className="table-container">
      <h2 className="table-title">Student Table</h2>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Roll No</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((student) => (
            <tr key={student?.id}>
              <td>{student?.id}</td>
              <td>{student?.name}</td>
              <td>{student?.course}</td>
              <td>{student?.rollNo}</td>
              <td>{student?.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}