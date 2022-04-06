import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
	const [btnRegister, setBtnRegister] = useState(true);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [city, setCity] = useState("");
	const [array, setArray] = useState([]);
	const [arrayIndex, setArrayIndex] = useState(0);

	return (
		<>
			<Form
				btnRegister={btnRegister}
				setBtnRegister={setBtnRegister}
				name={name}
				setName={setName}
				age={age}
				setAge={setAge}
				city={city}
				setCity={setCity}
				array={array}
				setArray={setArray}
				arrayIndex={arrayIndex}
			/>
			<Table
				btnRegister={btnRegister}
				setBtnRegister={setBtnRegister}
				name={name}
				setName={setName}
				age={age}
				setAge={setAge}
				city={city}
				setCity={setCity}
				array={array}
				setArray={setArray}
				arrayIndex={arrayIndex}
				setArrayIndex={setArrayIndex}
			/>
		</>
	);
}

export default App;
