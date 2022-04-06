export const Table = ({ setBtnRegister, setName, setAge, setCity, array, setArrayIndex }) => {
	function handleSelectBtn(index) {
		setBtnRegister(false);
		setName(array[index].name);
		setAge(array[index].age);
		setCity(array[index].city);
		setArrayIndex(index);
	}

	return (
		<>
			<table className='table align-middle table-responsive table-bordered table-dark table-hover table-striped mainTable'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Age</th>
						<th>City</th>
						<th>Select</th>
					</tr>
				</thead>
				<tbody>
					{array.map((item, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.name}</td>
								<td>{item.age}</td>
								<td>{item.city}</td>
								<td>
									<button className='btn btn-success' onClick={() => handleSelectBtn(index)}>
										Select
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
