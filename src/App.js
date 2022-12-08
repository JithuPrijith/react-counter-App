import CounterClass from "./Components/CounterClass";
import CounterFunction from "./Components/CounterFunction";
import User from "./Components/User";
import {useState} from 'react';
import Employee from "./Components/Employee";

function App() {
  const [name, setName] = useState('prijith')
  const [age,setAge] = useState('24')
  return ( 
    <div>
      <CounterFunction/>
      <CounterClass/>
      <User data={name} age= {age}/>
      <Employee/>
    </div>
  );
}

export default App;
