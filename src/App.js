import './App.css';
import List from './components/List';
import Screen from './components/Screen';
import {useState,useEffect} from 'react';
import NewToDo from './components/NewToDo';
import morning from "./images/morning.jpg";
import day from "./images/day.jpg";
import evening from "./images/evening.jpg";
import night from "./images/night.jpg";

function App() {
  const [toDo,setToDo]=useState(localStorage.getItem("toDo") ? JSON.parse(localStorage.getItem("toDo")):[])
  const [value,setValue]=useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [edit,setEdit]=useState("")
  const [editValue,setEditValue]=useState('')
  const [weekday,setWeekDay]=useState('')

  useEffect(() => {
    const today = new Date();
      const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][today.getDay()];
      setWeekDay(week)
      // console.log("Today is " + weekday);
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      
  
      if (hours >= 6 && hours < 12) {
        setImageUrl(morning);
      } else if (hours >= 12 && hours < 18) {
        setImageUrl(day);
      } else if (hours >= 18 && hours < 22) {
        setImageUrl(evening);
      } else {
        setImageUrl(night);
      }
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
     return () => clearInterval(intervalId);
  }, []);

  const changeValue=(e)=>{
    setValue(e.target.value)
  }
    const addTask=()=>{
      let list=[...toDo,{
        title:value,
        id:Date(),
      }]
      if(list.value===''){
        alert("error")
      }
      setToDo(list)
      localStorage.setItem("toDo",JSON.stringify(list))
      setValue('')
    }

  const deleteToDo=(id)=>{
    let newToDo=[...toDo].filter(item=>item.id!==id)
    setToDo(newToDo)
    localStorage.setItem("toDo",JSON.stringify(newToDo))
  }
  const changeEditValue=(e)=>{
    setEditValue(e.target.value)
  }
  const editToDo=(id,title)=>{
    setEdit(id)
    setEditValue(title)
  }
  const saveEdit=(id)=>{
    let saveToDo=[...toDo].map(item=>{
      if(item.id===id){
        item.title=editValue
      }  
      return item
    })
    setToDo(saveToDo)
    setEdit('')
    localStorage.setItem("toDo",JSON.stringify(saveToDo))
  }

  
  return (
    <div className="App">
      <div className='toDo'>
        <div className='screen'>
        <Screen src={imageUrl}/>
        <div className='day'>
          {weekday}
        </div>
        <div className='time'>
          
          {currentTime}
          
        </div>
        
        </div>
        <NewToDo  changeValue={changeValue} addTask={addTask} value={value}/>
        <div className='toDoList'>
          {toDo.map(item=><List key={item.id} item={item} deleteToDo={deleteToDo} saveEdit={saveEdit} edit={edit} editToDo={editToDo} changeEditValue={changeEditValue} editValue={editValue} />)}
        </div>
          
      </div>
    </div>
  );
}

export default App;
