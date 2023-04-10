import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);
function NewToDo({saveEdit,id,isShow,value,addTask,changeValue}){

    return(
        <div className='newTask'>
          <input type='text' onChange={changeValue} value={value} placeholder='what to do?'/>
          <lord-icon
              src="https://cdn.lordicon.com/xzksbhzh.json"
              trigger="hover"
              colors="primary:#000000,secondary:#16c72e"
              style={{width:"40px",height:"40px",cursor:"pointer"}}
              onClick={addTask}
              >
          </lord-icon>          
        </div>
    )
}
export default NewToDo;