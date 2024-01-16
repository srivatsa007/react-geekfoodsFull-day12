import Button from './Button'

const Landing = () => {
	return (
		<div className='relative overflow-x-hidden'>
			<div className='bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[90vh]'>
				<div className='absolute top-auto left-auto z-20 flex flex-col items-center justify-center w-full h-full gap-8'>
					<h1 className='text-5xl font-black text-center text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,0.9)]'>
						Let us find your <br />{' '}
						<span className='text-rose-700'>Forever Food.</span>
					</h1>
					<p className='text-xl text-center text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,0.9)] max-w-lg'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>
					<div className='flex justify-center gap-4 mt-12'>
						<Button
							name='Search Now'
							twclass='bg-rose-700 text-white hover:bg-rose-800'
						/>
						<Button
							name='Know More'
							twclass='bg-white text-rose-700 hover:bg-rose-800'
						/>
					</div>
				</div>
			</div>
			<div className='h-[90vh] bg-black opacity-50 absolute z-10 top-0 w-screen'></div>
		</div>
	)
}

export default Landing
