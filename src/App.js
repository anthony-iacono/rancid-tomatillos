import movieData from './movieData.js';
import './App.css';

const App = () => {
  return (
    <main>
      <form>
        <input type='text' placeholder='username' required />
        <input type='text' placeholder='password' required />
        <button>Log in</button>
      </form>
    </main>
  )
}

export default App;
