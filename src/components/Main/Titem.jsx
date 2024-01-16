const TItem = (props) => {
	return (
		<div className='mb-8 break-inside-avoid'>
			<p className='p-6 text-gray-700 bg-gray-100 shadow rounded-xl'>
				{props.desc}
			</p>
			<div className='flex items-center gap-4 mt-4'>
				<img
					className='object-cover w-12 h-12 rounded-full'
					alt='Woman'
					src='https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'
				/>
				<div className='text-sm'>
					<p className='font-medium'>Gladis Lennon</p>
					<p className='mt-1'>Head of SEO</p>
				</div>
			</div>
		</div>
	)
}

export default TItem
