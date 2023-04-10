import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);
function List({edit,deleteToDo,item,editToDo,saveEdit,changeEditValue,editValue}){
    
    return(
        <div className="toDoItem">
            {edit===item.id ?
                <span className="editInputButton">
                    <input onChange={changeEditValue} value={editValue}/>
                    <lord-icon
                        src="https://cdn.lordicon.com/ivayzoru.json"
                        trigger="hover"
                        colors="outline:#121331,primary:#000000,secondary:#30e849"
                        style={{width:"30px",height:"30px", cursor:"pointer"}}
                        onClick={()=>saveEdit(item.id)}>
                    </lord-icon>
                </span>
                :
                <span>
                    <span className="title">
                        <li>{item.title}</li>
                    </span>
                    <span className="editDelete">
                        <span className="delete">
                        <lord-icon
                            src="https://cdn.lordicon.com/exkbusmy.json"
                            trigger="hover"
                            colors="outline:#121331,primary:#646e78,secondary:#e83a30,tertiary:#000000"
                            style={{width:"30px",height:"30px",cursor:"pointer"}}
                            onClick={()=>deleteToDo(item.id)}>
                        </lord-icon>
                        </span>
                        <span className="edit">
                            <lord-icon
                                src="https://cdn.lordicon.com/alzqexpi.json"
                                trigger="hover"
                                style={{width:"40px", height:"40px",cursor:"pointer"}}
                                onClick={()=>editToDo(item.id,item.title)}>
                            </lord-icon>
                        </span>
                    </span>
                </span>
            }
            
        </div>
            
    )
}
export default List;