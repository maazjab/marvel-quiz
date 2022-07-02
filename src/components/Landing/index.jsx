import React, { useRef, useEffect, useState } from 'react'

const Landing = () => {

  const refWolverine = useRef(null);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    refWolverine.current.classList.add('startingImg');
    setTimeout(() => {
        refWolverine.current.classList.remove('startingImg');
        setBtn(true);
    }, 1000);
  }, []);
  
  const setImgLeft = () => {
    refWolverine.current.classList.add('leftImg');
  }

  const setImgRight= () => {
    
    refWolverine.current.classList.add('rightImg');
  }


  const clearImg = () => {
    if(refWolverine.current.classList.contains('leftImg'))
        refWolverine.current.classList.remove('leftImg');
    if(refWolverine.current.classList.contains('rightImg'))
        refWolverine.current.classList.remove('rightImg');
  }
  const displayBtn = btn && (
    <>
        <div onMouseOver={setImgLeft}onMouseOut={clearImg} className="leftBox">
            <button className='btn-welcome'>Inscription</button>
        </div>
        <div onMouseOver={setImgRight} onMouseOut={clearImg} className="rightBox">
            <button className='btn-welcome'>Connexion</button>
        </div>
    </>
  )
  return (
    <div ref={refWolverine} className="welcomePage">
        { displayBtn }
    </div>
  )
}

export default Landing