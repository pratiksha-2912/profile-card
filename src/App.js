

export default function App() {
return(
  <div className="profile-card">
  <Avtar/>
  <ProfileCard/>
  </div>
)
}
function Avtar(){
  return <img className="avatar" src= "p.jpg" alt="pratiksha"/>
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <h2>Pratiksha</h2>
        <p>A brief description about yourself goes here. You can talk about your experience, interests, or any other details you find relevant.</p>
        <div className="technologies">
          <span>JavaScript</span>
          <span>React</span>
          <span>CSS</span>
        </div>
      </div>
    </div>
  );
}

 
