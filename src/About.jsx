function About() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>About This App</h1>
      <p>
        This is a Todo List application built using React as part of the
        Full Stack Development course.
      </p>
      <p>
        Features include adding, editing, completing, and deleting tasks,
        with data saved permanently using localStorage.
      </p>
      <p>Developed by: Tisha Prajapati</p>
    </div>
  );
}

export default About;