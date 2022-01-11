import {useState} from 'react';
import axios from 'axios';
import './App.css';
import film from './images/film.svg'


function App() {
const [query,setquery] = useState("");
const [result,setresult]=useState([]);

 const handleapi =  () =>{
  axios.get("http://www.omdbapi.com/?s="+query+"&apikey=a8032f36")
  .then(res=>setresult((res.data.Search)))
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
        <img src={film}/>
          <h1>Movie<span>A</span>pp</h1>
        </div>
      <form onSubmit={handlesubmit}>
 <input type="text" value={query} onChange={handleinput} placeholder='Type here to Search...'/>
 <button type='submit'>Search</button>
 </form>
 </nav>

 <div className='data'>
   {result.map(res1=>{
     return (
       <div className='cardcon'>
     <div key={Math.random().toString()}>
       <div className='card'>
       <li><img src={res1.Poster}/></li>
       <li>{res1.Title}</li>
       </div>
     </div>
    </div>)
   })}</div>
    </div>
  );
}

export default App;
