import { useState } from "react";

export default function LightDark() {


  const [white, setWhite] = useState(true);

  return (
    <div className="darkLight" style={{ color: white ? 'black' : 'white', backgroundColor: white ? 'white' : 'black' }}>
      <button onClick={() => setWhite(!white)}>Change to {white ? 'Blackmode' : 'Whitemode'}</button>
    </div>
  )
}

