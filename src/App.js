import './App.css';
import { useState, useEffect } from 'react';
function App() {
  //Hook
  const [newTitle, setnewTitle] = useState("");
  const [isEdit , setIsEdit] = useState();
  const [stack, setStack] = useState([]);

  useEffect(() => {
   console.log(stack);
  }, [stack])

  useEffect(() => {
    const notice = document.querySelector('.notice');
    notice.style.visibility ="hidden";
  })

  const handleChnageData = () => {

    if(newTitle){
      if([...stack].length != 5){
        setStack([...stack, newTitle]);
        setnewTitle('');
      }else{
        const notice = document.querySelector('.notice');
      const noticeText = document.querySelector('.noticeText');
      noticeText.textContent="Stack Overflow"
      notice.style.visibility ="visible";
      }
    }
    else{
      const notice = document.querySelector('.notice');
      const noticeText = document.querySelector('.noticeText');
      noticeText.textContent="Enter A Stack First"
      notice.style.visibility ="visible";
    }
  };

  const popStack = () => {

    if(stack.length > 0){
      stack.splice(-1);
      setStack([...stack]);
    }
    else{
      const notice = document.querySelector('.notice');
      const noticeText = document.querySelector('.noticeText');
      notice.style.visibility ="visible";
      noticeText.textContent="Stack Underflow"
    }
  };

 
  return (
    <div className="App">
      <div className="inputs">
        <input type="text" value={newTitle} onChange={e => setnewTitle(e.target.value)} placeholder="Enter An Element" />
        <button onClick={handleChnageData}>Stack It</button>
        <button onClick={popStack}>Pop It</button>
      </div>

      <div className="notice">
        <p className="noticeText"></p>
      </div>

      <div className="stacks">
          {
            stack.map((item , index)=>{
                return (
                  <p>{item}</p>
            )
            })
          }
      </div>
    </div>
  );
}

export default App;
