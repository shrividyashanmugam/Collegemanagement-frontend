import './Facultygrid.css';

export default function Facultygrid({ data }) {
  return (
    <div className="faculty-container">
      <h2 className="faculty-title">Faculty Details</h2>

      <div className="faculty-grid">
        {data?.map((faculty) => (
          <div key={faculty?.id} className="faculty-card">

            <h3 className="faculty-name">{faculty?.name}</h3>

            <p><strong>Department:</strong> {faculty?.department}</p>
            <p><strong>Designation:</strong> {faculty?.designation}</p>
            <p><strong>Experience:</strong> {faculty?.experience}</p>

          </div>
        ))}
      </div>
    </div>
  );
}