import Score from './Score'

const Student = (props) => {
  return ( 
    <div>
    <h1 className="studentList">Our Student List</h1>
      {props.students.map((student, idx) => 
        <div key={idx}>
          <h2>Name: {student.name} <br /></h2>
          <p className="bio">Bio: {student.bio}<br /></p>
          <p className="score">Score: 
            <Score scores={student.scores}/>
          </p>
        </div>
      )}
    </div>
  );
}

export default Student;