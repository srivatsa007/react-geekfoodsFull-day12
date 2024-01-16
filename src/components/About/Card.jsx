const Card = ({ icon, heading, payload }) => {
	return (
		<div className='flex items-center gap-12'>
			<div className='text-3xl'>{icon}</div>
			<div>
				<h3 className='text-lg font-bold'>{heading}</h3>
				<p className='text-sm'>{payload}</p>
			</div>
		</div>
	)
}

export default Card
