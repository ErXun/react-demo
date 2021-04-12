import React from 'react';

export default function UseRef() {
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()
  function add() {
    setCount(count + 1)
  }

  function showRefValue() {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h3>和为：{count}</h3>
      <button onClick={add}>+1</button>
      <button onClick={showRefValue}>showRefValue</button>
    </div>
  )
}

