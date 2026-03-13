import StudentTable from "./components/StudentTable";
import Studentgrid from "./components/Studentgrid";
import Facultygrid from "./components/Facultygrid";
import FacultyTable from "./components/FacultyTable";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {

  const [module, setModule] = useState("student"); // student or faculty
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data depending on module
  useEffect(() => {

    let url =
      module === "student"
        ? "http://localhost:8080/api/student"
        : "http://localhost:8080/api/faculty";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });

  }, [module]);

  const handleNameChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = data.filter((item) =>
      item.name?.toLowerCase().includes(value) ||
      item.department?.toLowerCase().includes(value) ||
      item.course?.toLowerCase().includes(value) ||
      item.rollNo?.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  return (
    <div>

      <Header />

      {/* Search + Toggle */}
      <div className="search-section">

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleNameChange}
          className="search-input"
        />

        <div className="toggle-buttons">
          <button onClick={() => setView("grid")}>Grid</button>
          <button onClick={() => setView("table")}>Table</button>
        </div>

      </div>

      {/* Main Layout */}
      <div className="main-layout">

        <Sidebar setModule={setModule} />

        <div className="content-area">

          {/* STUDENT MODULE */}
          {module === "student" && view === "grid" && (
            <Studentgrid data={filteredData} />
          )}

          {module === "student" && view === "table" && (
            <StudentTable data={filteredData} />
          )}

          {/* FACULTY MODULE */}
          {module === "faculty" && view === "grid" && (
            <Facultygrid data={filteredData} />
          )}

          {module === "faculty" && view === "table" && (
            <FacultyTable data={filteredData} />
          )}

        </div>

      </div>

    </div>
  );
}