import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaDribbble } from 'react-icons/fa6'

const FooterIcons = () => {
	return (
		<ul className='flex justify-center gap-6 mt-12 md:gap-8'>
			<FaFacebook className='w-6 h-6 text-gray-700 duration-150 cursor-pointer hover:text-gray-900' />
			<FaInstagram className='w-6 h-6 text-gray-700 duration-150 cursor-pointer hover:text-gray-900' />
			<FaSquareXTwitter className='w-6 h-6 text-gray-700 duration-150 cursor-pointer hover:text-gray-900' />
			<FaGithub className='w-6 h-6 text-gray-700 duration-150 cursor-pointer hover:text-gray-900' />
			<FaDribbble className='w-6 h-6 text-gray-700 duration-150 cursor-pointer hover:text-gray-900' />
		</ul>
	)
}

export default FooterIcons
