import { useState, useEffect } from "react";
import Studentgrid from "./components/Studentgrid";
import StudentTable from "./components/StudentTable";
import Studentform from "./components/Studentform";
import data from './data/Student_detail.json';

export default function App() {
  const [view, setView] = useState('grid');           // grid or table
  const [search, setSearch] = useState('');          // search input
  const [filteredData, setFilteredData] = useState(data); // filtered student list

  // handle search input
  const handleNameChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = data.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  }

  // handle new student submission
  const handleFormSubmit = (studentObj) => {
    // Add new student to data and filteredData
    const updatedData = [...data, studentObj];
    setFilteredData(updatedData);
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      
      {/* Student Form */}
      <Studentform onSubmit={handleFormSubmit} />

      <hr style={{ margin: "30px 0" }}/>

      {/* Search + Toggle */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleNameChange}
          style={{ padding: "10px", width: "60%", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <div>
          <button onClick={() => setView("grid")} style={{ marginRight: "10px" }}>Grid</button>
          <button onClick={() => setView("table")}>Table</button>
        </div>
      </div>

      {/* Student Display */}
      {view === "grid" && <Studentgrid data={filteredData} />}
      {view === "table" && <StudentTable data={filteredData} />}
    </div>
  );
}