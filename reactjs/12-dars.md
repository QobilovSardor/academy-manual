# 📔 12-dars

## Hook useLayoutEffect
Misol:
```js
import {useState, useEffect, useLayoutEffect} from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  useLayoutEffect(() => {
    if(count === 0) {
      setCount(10 * Math.random() * 200)
    }
  }, [count])
  // useEffect(() => {
  //   if(count === 0) {
  //     setCount(10 * Math.random() * 200)
  //   }
  // }, [count])
  console.log("Render", count)
  return (
    <div className="App">
      
      <button onClick={() => setCount(0)}>{count}</button>
      
    </div>
  );
}
```
## Hook useImperativeHandler
<a href="https://react.dev/reference/react/useImperativeHandle">Batafsil ma'lumot</a>

## Hooklardan foydalanish shartlari
<a href="https://legacy.reactjs.org/docs/hooks-rules.html">Ba'tafil ma'lumot</a>


