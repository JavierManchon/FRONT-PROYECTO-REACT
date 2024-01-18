import { useAuth } from "../../context/AuthContext"

function Games() {

  const {user} = useAuth();
  console.log(user);

  return (
    <div>
      <h4>Games</h4>
    </div>
  )
}

export default Games
