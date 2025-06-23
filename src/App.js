import './App.css';

function App() {
  const user = {
    name: "MDevMod",
    age: 35,
    mail: "mdevmod@gmail.com",
    hobbies: ["Jeux vidéo", "Sport", "Lecture"]
  }

  const getAgeStyle = (age) => {
    if (age < 18) {
      return { background: "red"}
    }
    else if (age < 40){
      return { background: "green"}
    }
    else{
      return { background: "gray"}
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Profil</h1>
        <div className="user-card" style={ getAgeStyle(user.age)}>
          <div>{user.name}</div>
          <div>{user.age} ans</div>
          <div>{user.mail}</div>
          {user.hobbies.map((hobby, index) => (
            <div key={index} className="hobby">{hobby}</div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;
