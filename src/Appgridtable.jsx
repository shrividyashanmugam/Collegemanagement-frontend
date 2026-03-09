import StudentTable from "./components/StudentTable";
import Studentgrid from "./components/Studentgrid";
import Studentform from "./components/Studentform";
import data from "./data/Student_detail.json";
import'./App.css';
import { useState } from "react";

export default function App() {
  const [view, setView] = useState('grid')
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  
  const handleNameChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    
    // FIXED: Your JSON uses "Name" (capital N), not "name"
    // Search across ALL fields like Google
    setFilteredData(
      data.filter((student) =>
        student.Name.toLowerCase().includes(searchValue) ||
        student.Regno.toLowerCase().includes(searchValue) ||
        student.Course.toLowerCase().includes(searchValue) ||
        student.duration.toLowerCase().includes(searchValue)
      )
    );
  }
  
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder=" Search name, reg no, course, duration..."
          value={search}           
          onChange={handleNameChange}
        />
      </form>
      <button onClick={() => { setView("grid") }}>Grid</button>
      <button onClick={() => { setView("table") }}>table</button>
      
      {view === "grid" && <Studentgrid data={filteredData} />}
      {view === "table" && <StudentTable data={filteredData} />} 
    </div>
  );
}
