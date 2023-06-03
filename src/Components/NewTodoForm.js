import {useState} from 'react';
export function NewTodoForm({onSubmit}){
    
  const [newItem, setNewItem] = useState("");

    function handleSubmit(e){
        e.preventDefault()

        if(newItem==="") return

        onSubmit(newItem)

          setNewItem("")
      }
    

    return(
        <div className="form-row">
           <form onSubmit={handleSubmit}>
              <label>New Item</label>
              <input type="txt" 
              value={newItem} 
              onChange={e=>setNewItem(e.target.value)} 
              className="input-item"/><br/>
              <button className="add-btn">Add</button>
           </form>
        </div>
    )
}