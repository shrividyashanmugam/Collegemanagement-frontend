import "./Sidebar.css";

export default function Sidebar({ setModule }) {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">Dashboard</h2>

      <div className="sidebar-menu">

        <div
          className="menu-item"
          onClick={() => setModule("student")}
        >
          Student
        </div>

        <div
          className="menu-item"
          onClick={() => setModule("faculty")}
        >
          Faculty
        </div>

        <div
          className="menu-item"
          onClick={() => setModule("admin")}
        >
          Admin
        </div>

      </div>

    </div>
  );
}