import './Studentgrid.css';

export default function Studentgrid({ data, search }) {

  const highlight = (text) => {
    if (!search || !text) return text;

    const parts = text.split(new RegExp(`(${search})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase()
        ? <span key={index} className="highlight">{part}</span>
        : part
    );
  };

  return (
    <div className="student-container">

      <h2 className="student-title">Student Details</h2>

      <div className="student-grid">

        {data?.map((student) => (
          <div key={student?.id} className="student-card">

            <h3 className="student-name">
              {highlight(student?.name)}
            </h3>

            <p>
              <strong>Course:</strong> {highlight(student?.course)}
            </p>

            <p>
              <strong>Register No:</strong> {highlight(student?.rollNo)}
            </p>

            <p>
              <strong>Duration:</strong> {highlight(student?.duration)}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}