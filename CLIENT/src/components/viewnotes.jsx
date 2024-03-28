import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
function Viewnotes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    let res = await axios.get("http://localhost:8010/get-note");
    setNotes(res.data.data);

    console.log(res);
  }
  console.log(notes);

  return (
    <>
      <div>
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>AUTHOR</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
           
            {notes.map((note, index) => {
              return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{note.author}</td>
                  <td> {note.title} </td>
                  
                  <td>{note.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Viewnotes;
