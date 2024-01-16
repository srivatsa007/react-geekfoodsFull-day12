
const Button = (props) => {
	return (
		<button
			className={`px-8 py-3 text-sm font-medium rounded-md ${props.twclass} duration-200 hover:text-white`}
		>
			{props.name}
		</button>
	)
}

export default Button
