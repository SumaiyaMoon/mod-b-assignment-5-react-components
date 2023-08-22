function Table(props) {
  const { studentId, degreeProgram, cGPA } = props;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Degree Program</th>
          <th>CGPA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{studentId}</td>
          <td>{degreeProgram}</td>
          <td>{cGPA}</td>
        </tr>
      </tbody>
    </table>
  );
}

  
export default Table;