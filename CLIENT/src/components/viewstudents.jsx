import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
function Viewstudents() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    viewdata();
  }, []);
  async function viewdata() {
    let res = await axios.get("http://localhost:8010/view-students");
    setStudent(res.data.data);
  }
  console.log(student);
  return (
    <>
      <div>
        <h1>hello</h1>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>GENDER</th>
              <th>COURSE</th>
            </tr>
          </thead>
          <tbody>
            {student.map((stud,index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{stud.sname}</td>
                  <td>{stud.sage}</td>
                  <td>{stud.semail}</td>
                  <td>{stud.sgender}</td>
                  <td>{stud.scourse}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Viewstudents;
