import { getStudentById } from '../data/student_api';

function Student() {

  return (
    <div>
      <h2>Student</h2>
      <p>
        Name: student.name
        <br />
        Id: student.id
        <br />
        Grade: student.grade
      </p>
      
    </div>
  );
}

export default Student;
