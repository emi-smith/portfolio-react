import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-slate-100/80"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Image
					src='/../public/assets/Navlogo.png'
					alt='/'
					width='125'
					height='50'
				/>
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>Home</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>About</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>Skills</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>
								Projects
							</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>
								Contact
							</li>
						</Link>
					</ul>
					{/* Hamburger Icon */}
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
				}
			>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? "fixed left-0 top-0 w[75%] sm:w-[60%] md:-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Image
								src='/../public/assets/Navlogo.png'
								alt='/'
								width='87'
								height='45'
							/>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-85% md:w-[90%] py-4'>
								Update this later, if keeping.
							</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/'>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Skills</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Contact</li>
							</Link>
						</ul>
						<div className='pt-40 '>
							<p className='uppercase tracking-widest text-[#5651e5]'>
								Let&aposs Connect
							</p>
							<div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'>
									<FaLinkedinIn />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'>
									<AiOutlineMail />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'>
									<BsPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
