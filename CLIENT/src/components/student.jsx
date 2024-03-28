import Table from 'react-bootstrap/Table';

function Stu() {
  return (
    <>
    <Table striped bordered hover size="sm" variant='dark'>
      <thead>
        <tr>
          
          <th>NAME</th>
          <th>GENDER</th>
          <th>COURSE</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
        
          <td>VIGNESH</td>
          <td>MALE</td>
          <td>COMPUTER SCIENCE</td>
        </tr>
        <tr>
          
          
          <td>RAHUL</td>
          <td>MALE</td>
          <td>CIVIL ENGINEERING</td>
        </tr>
        <tr>
          <td>ANUSHA</td>
          <td>FEMALE</td>
          <td>ELECTRICAL</td>
        </tr> 
        <tr>
          <td>VIJAYA</td>
          <td>FEMALE</td>
          <td>MECHANICAL ENGINEERING</td>
        </tr>
        
        


      </tbody>
    </Table>
    </>
  );
}

export default Stu;