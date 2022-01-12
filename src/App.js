import {useState} from 'react';
import axios from 'axios';
import './App.css';
import film from './images/film.svg'
import error from './images/error.png'


function App() {
const [query,setquery] = useState("");
const [result,setresult]=useState([]);

 const handleapi =  () =>{
  axios.get("https://www.omdbapi.com/?s="+query+"&apikey=a8032f36")
  .then(res=>{setresult((res.data.Search))
  console.log(result)})
  .catch(err => console.log(err))
 }

const handleinput = (e) =>{
  setquery(e.target.value);
   }

const handlesubmit = (e) =>{
  e.preventDefault();
  if(query.trim().length === 0)
  {
    return
  }
  setquery('');
  handleapi();
   }

  return (
    <div>
      <nav>
        <div className='logo'>
        <img src={film} alt='logo'/>
          <h1>Movie<span>A</span>pp</h1>
        </div>
      <form onSubmit={handlesubmit}>
 <input type="text" value={query} onChange={handleinput} placeholder='Type here to Search...'/>
 <button type='submit'>Search</button>
 </form>
 </nav>


{ typeof result !== 'undefined' ?
 <div className='data'>
   {result.map(res1=>{
     return (
       <div className='cardcon'>
     <div key={Math.random().toString()}>
       <div className='card'>
       <li><img src={res1.Poster} alt='Movie Poster'/></li>
       <li>{res1.Title}</li>
       </div>
     </div>
    </div>)
   })}</div>

  :<div className='error'>
    <h1>Oops!</h1>
    <img src={error} alt='error'/>
    <h2>Error 404</h2>
  <p>searched movie not found </p>
  </div>}
    </div>
  );
}

export default App;

