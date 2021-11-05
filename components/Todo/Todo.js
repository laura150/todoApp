import { useState } from "react";
import styles from './Todo.module.css';

 function Todo() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [filteredlist, setFilteredList] = useState([])
  const [purpleset, setPurpleset] = useState(false)
  const [greenset, setGreenset] = useState(false)
  
  let date = new Date().toDateString()
  const handleClick = (incomingcolor)=>{
    if(incomingcolor === 'green'){
      const greenlist = list.filter((item)=>{
        return   item.color == incomingcolor;
       })
       setFilteredList(greenlist)
      setGreenset(!greenset)
      return
    } else{
      const purpleset = list.filter((item)=>{
        return   item.color == incomingcolor;
      })
      setFilteredList(purpleset)
      setPurpleset(!purpleset)
    }
  }
 
  const handleSubmit1 = (e)=>{
    e.preventDefault()
    if(name){
      const newItem = {id: new Date().toString(), title: name, color: 'purple' }
    setList([...list, newItem])
    setFilteredList([...list, newItem])
    setName('')
    console.log(newItem)
    console.log(list)
    }else{
      alert('Please input something')
    }
  }

  const handleSubmit2 = (e)=>{
    e.preventDefault()
    if(name){
      const newItem = {id: new Date().toString(), title: name, color: 'green' }
    setList([...list, newItem])
    setFilteredList([...list, newItem])
    setName('')
    console.log(newItem)
    console.log(list)
    }else{
      alert('Please input something')
    }
    
  }
  return (
    <div className={styles.App}>
     <div className={styles.topbar}>
      Today, {date}
     </div>
     <div className={styles.showtasksection}>
      <div className={styles.task}>{purpleset||greenset? null : `showing ${filteredlist.length} task${filteredlist.length > 1? 's': ''}`}
                            {purpleset? `filtering and showing ${filteredlist.length} task${filteredlist.length > 1? 's': ''}`: null} 
                            {greenset? `filtering and showing ${filteredlist.length} task${filteredlist.length > 1? 's': ''}` : null}
                           </div>
        <div>
          <button className={styles.colorbuttonOne} onClick={()=> handleClick('purple')}></button>
          <button  className={styles.colorbuttonTwo}  onClick={()=> handleClick('green')}></button>
        </div>
     </div>
     {
       filteredlist.length > 0 ?
       
       filteredlist.map(({id, title, color})=> (
         <div className={styles.individualtasks}>
            <input type={styles.checkbox} className={styles.checkinput}/>
           <p key={id}>{title}</p>
           <p className={color ==='purple'? styles.purple : styles.green}></p>
        </div>
  ))
  
       :
       null
       
     }
     
     
     <div style={{display :'flex', alignItems: 'center', justifyContent: 'space-between', marginTop:'12px', paddingRight: '10px', paddingLeft: '10px'}}>
        <div style={{display :'flex'}}>
            <div  style={{color: 'orange', marginRight:'12px', cursor:'pointer'}}>+</div>
            <input value={name}  style={{background: 'none', outline: 'none', border: 'none'}}
            onChange={(e)=>{setName(e.target.value)}} placeholder='Add a task'/>
        </div>

        <div>
            <button className={styles.colorbuttonOne} onClick={handleSubmit1}></button>
            <button  className={styles.colorbuttonTwo}  onClick={handleSubmit2}></button>
        </div>
    </div> 
    </div>
  );
}
export default Todo