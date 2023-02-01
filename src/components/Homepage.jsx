import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <h1>Kirim data ke blockchain</h1>
      <div>
        <form action="">
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <br />
            <button type="submit">Send</button>

        </form>
    </div>
    </div>
  )
}

export default App
