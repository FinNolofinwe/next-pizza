import { cn } from '@/lib/utils'
import React from 'react'
import { FC } from 'react'
import { Container } from './container'
import { Button } from '../ui'
import Image from 'next/image'
import Link from 'next/link'
import { User, ShoppingCart, ArrowRight } from 'lucide-react'
import { SearchInput } from './index'
interface HeaderProps {
	className?: string
}
const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn('border-b border-gray-300', className)}>
			<Container className="flex items-center justify-between py-8">
				{/* Left part */}
				<Link href={'/'}>
					<div className="flex gap-4 items-center">
						<Image src={'/logo.png'} alt="logo" width={35} height={35} />
						<div>
							<h1 className="text-2xl uppercase font-black">NEXT PIZZA</h1>
							<p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
						</div>
					</div>
				</Link>

				<div className="mx-10 flex-1">
					<SearchInput />
				</div>

				{/* Right part */}
				<div className="flex gap-4 items-center">
					<Button variant={'outline'} className="flex items-center gap-1">
						<User size={16} />
						Войти
					</Button>
					<div>
						<Button variant={'default'} className="group relative">
							<b>520 p</b>
							<span className="h-full w-[1px] bg-white/30 mx-3"> </span>
							<div className="flex items-center gap-1 transition  duration-300 group-hover:opacity-0">
								<ShoppingCart size={16} className="relative" strokeWidth={2} />
								<b>3</b>
							</div>
							<ArrowRight
								size={20}
								className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
							/>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
