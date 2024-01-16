import Tabs from './Tabs'
import { FaBars } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()

	const data = [
		{ label: 'Home', path: '/' },
		{ label: 'Quote', path: '/quote' },
		{ label: 'Restaurants', path: '/restaurant' },
		{ label: 'Food', path: '/food' },
		{ label: 'Contact', path: '/contact' },
	]

	return (
		<header className='sticky top-0 z-40 flex items-center justify-between px-3 py-4 text-white lg:px-16 bg-zinc-900 h-[10vh]'>
			<details className='dropdown md:hidden'>
				<summary className='btn btn-ghost'>
					<FaBars className='text-2xl cursor-pointer' />
				</summary>
				<ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black'>
					{data.map((item) => (
						<li key={item.path}>
							<Link to={item.path}>{item.label}</Link>
						</li>
					))}
				</ul>
			</details>
			<Link to='/'>
				<div className='flex items-center gap-4'>
					<img
						src='https://flowbite.com/docs/images/logo.svg'
						alt='icon'
					/>
					<h2 className='text-lg font-bold md:text-2xl'>Geekfoods</h2>
				</div>
			</Link>
			<Tabs activeTab={location.pathname} data={data} />
			<button className='px-3 py-1.5 text-xs font-medium text-white duration-200 bg-blue-600 rounded-md md:text-sm hover:bg-blue-700'>
			    Get Started
		    </button>
		</header>
	)
}

export default Header
