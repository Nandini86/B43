import logo from './logo.svg';
import './App.css';
import FuncComponent from './component/FuncComponent';
import Parent from './component/Parent';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Eventbind from './component/Eventbind';
import Nandu from './component/Nandu'
import Classcomp from './component/Classcomp';
import  ChangeMessage from './component/ChangeMessage';
import ExampleUseState from './component/ExampleUseState';
import EXUseEffect from './component/EXUseEffect';
import ExpenseList from './component/ExpenseList';

function App() {
  return (
    <div className="App">
      {/* <ExpenseList/> */}
      {/* < EXUseEffect/> */}
      {/* <ChangeMessage/> */}
      <ExampleUseState/>
      {/* <Classcomp name="sandya" designation="Clerk" />
      <Classcomp name="manu" designation="manager"/> */}
      
      {/* <Nandu name ="raj" designation="programmer">
        <p> Full Stack developer</p>
      </Nandu>
      <Nandu name ="rani" designation="tester">
      </Nandu> */}
      
       {/* <Eventbind/>  */}
      {/* <Message/> */}
      {/* <Welcome name='nandini' value='Tns' place= 'Bang'/> */}
      {/* <Parent/> */}
      {/* <FuncComponent/> */}
    </div>
  );
}

export default App;
