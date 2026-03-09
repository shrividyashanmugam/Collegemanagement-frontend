import Studentgrid from "./components/Studentgrid";
import data from './data/Student_detail.json'
import { useState } from "react";
import StudentTable from "./components/StudentTable";
export default function App() {
  const [view, setView] = useState('grid')
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const handleNameChange = (e) => {
    setSearch(e.target.value)
    setFilteredData(
      data.filter(
        (val) => val.name.toLowerCase().includes(e.target.value)
      )
    )
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search by name"
          onChange={handleNameChange}
          name={search}
        />
      </form>
      <button onClick={() => { setView("grid") }}>grid</button>
      <button onClick={() => { setView("table") }}>table</button>
      {view === "grid" && <Studentgrid data={filteredData} />}
      {view === "table" && <Student data={filteredData} />}
    </div>
  )
}
