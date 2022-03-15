import Score from './Score'

const Student = (props) => {
  return ( 
    <div>
    <h1 className="studentList" >Our Student List</h1>
    <div class="card-body">
      {props.students.map((student, idx) => 
        <div key={idx} className="card-title">
          <h2 className="card-subtitle text-muted">Name: {student.name} <br /></h2>
          <p className="card-subtitle text-muted">Bio: {student.bio}<br /></p>
          <p className="card-subtitle text-muted">Score: <br />
          <br /> <Score scores={student.scores}/>
          </p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Student;