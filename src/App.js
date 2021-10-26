import {useState} from 'react';
import './App.css';
import buttons from './buttons';
function App() {
  const [isdark, setIsdark]= useState(false);
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['/','+','-','*','.'];
  const updateCalc = (value)=> {
	if((ops.includes(value) && calc==='') || (ops.includes(value) && ops.includes(calc.slice(-1)))){
		return;
	}
	setCalc(calc+value);
	if(!ops.includes(value)){
		setResult(eval(calc+value).toString());
	}
  }
  const remove = ()=>{
	  if(calc === ''){
		  setResult('0');
		  return
	  }
	  const value = calc.slice(0, -1);
	  setCalc(value.toString())
  }
  const calculate = () =>{
	  setCalc(eval(calc).toString());
  }
  return (
	<>
		<div className="modebtn">
			<p>Switch To </p>
			<button className="dark" onClick={()=>setIsdark(true)}>Dark </button>
			<p>/</p>
			<button className="light" onClick={()=>setIsdark(false)}>Light</button>
			<p>Mode </p>
		</div>
		<div className="App">
			<div className={`calculator ${(isdark)?'dark':'light'}`}>
			<div className="display">
				{ (calc) && <input type="text" placeholder="0" readOnly className={`digitArea ${(isdark)?'dark':'light'}`} value={result} /> }
				<input type="text" className={`digitArea ${(isdark)?'dark':'light'}`} value={calc} placeholder="0"  />
			</div>
			<div className="buttonsArea">
			{
				buttons.map(bttn=>{
				const {id, type,value}= bttn;
				let btnclass = (type === 'num')?(isdark)?'dark':'light':(type === 'clr')?(isdark)?'darkdel':'lightdel':'yellow';
				if(type === 'calc'){btnclass = 'green';}
				return(<button key={id} className={btnclass} onClick={()=>(value !=='C' && value!=='=')?`${updateCalc(value)}`:(value ==='C')?remove():calculate()} >{value}</button>)
				})
			}
			</div>
			</div>
		</div>
	</>
  );
}

export default App;
