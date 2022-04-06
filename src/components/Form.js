export const Form = ({
	btnRegister,
	setBtnRegister,
	name,
	setName,
	age,
	setAge,
	city,
	setCity,
	array,
	setArray,
	arrayIndex,
}) => {
	function handleRegisterBtn() {
		let obj = { name: name, age: age, city: city };
		let arrayCopy = [...array, obj];
		setArray(arrayCopy);
		setName("");
		setAge("");
		setCity("");
	}

	function handleDeleteBtn() {
		let arrayCopy = [...array];
		arrayCopy.splice(arrayIndex, 1);
		setArray(arrayCopy);
		cleanInputsShowRegisterBtn();
	}

	function handleCancelBtn() {
		cleanInputsShowRegisterBtn();
	}

	function handleModifyBtn() {
		let obj = { name: name, age: age, city: city };
		let arrayCopy = [...array];
		arrayCopy[arrayIndex] = obj;
		setArray(arrayCopy);
		cleanInputsShowRegisterBtn();
	}

	function cleanInputsShowRegisterBtn() {
		setBtnRegister(true);
		setName("");
		setAge("");
		setCity("");
	}

	return (
		<div className='input-group flex-column inputsGroup'>
			<input
				type='text'
				placeholder='Enter the name'
				value={name}
				onChange={(evt) => setName(evt.target.value)}
			/>
			<input
				type='text'
				placeholder='Enter the age'
				value={age}
				onChange={(evt) => setAge(evt.target.value)}
			/>
			<input
				type='text'
				placeholder='Enter the city'
				value={city}
				onChange={(evt) => setCity(evt.target.value)}
			/>

			{btnRegister ? (
				<button className='btn btn-primary' onClick={handleRegisterBtn}>
					Register
				</button>
			) : (
				<div className='input-group'>
					<button className='btn btn-warning' onClick={handleModifyBtn}>
						Modify
					</button>
					<button className='btn btn-danger' onClick={handleDeleteBtn}>
						Delete
					</button>
					<button className='btn btn-info' onClick={handleCancelBtn}>
						Cancel
					</button>
				</div>
			)}
		</div>
	);
};
