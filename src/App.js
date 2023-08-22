import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Import Components
import Button from './components/button';
import Card from './components/card';
import Input from './components/input';
import Select from './components/select';
import Table from './components/table';

function App() {
 

  // select.js
  let options = ['Apple', 'Banana', 'Grapes', 'Apricot']
  // table.js
  let students=[
    {
      studentId: "04-122",
      degreeProgram: "BSCS",
      cGPA: 3.2,
    },
    {
      studentId: "03-022",
      degreeProgram: "BSSE",
      cGPA: 3.0,
    },
    {
      studentId: "04-131",
      degreeProgram: "BEd",
      cGPA: 3.8,
    },
  ]



  return (
    <div>
      <div>
        <p className='m-2 fw-bold'>Button Component</p>
        <Button btnValue='Button 1' />
        <Button btnValue='Button 2' />
        <Button btnValue='Button 3' />
      </div>
      <div>
        <p className='m-2 fw-bold'>Card Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Card cardId='Card 1' cardName='ABC' cardInstitute='SAIMS' cardActive='true' />
          <Card cardId='Card 2' cardName='DEF' cardInstitute='SAIMS' cardActive='true' />
          <Card cardId='Card 3' cardName='GHI' cardInstitute='SAIMS' cardActive='false' />
        </div>
      </div>
      <div>
        <p className='m-2 fw-bold'>Input Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Input inputType='text' inputValue='Henry James' />
          <Input inputType='password' inputValue='JohnDoe0123' />
          <Input inputType='email' inputValue='williamstone@gmail.com' />
        </div>
      </div>
      <div>
        <p className='m-2 fw-bold'>Select Component</p>
        <div className='d-flex align-items-center justify-content-around'>
          <Select options={options} />
          <Select options={options} />
          <Select options={options} />
        </div>
      </div>
     
    <div>
      <p className='m-2 fw-bold'>Table Component</p>
      {students.map((student, index) => (
        <div key={index} className='d-flex align-items-center justify-content-around'>
          <Table {...student} />
        </div>
      ))}
    </div>

    </div>
  );
}

export default App;
