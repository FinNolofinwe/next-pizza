'use client'
import React, { FC, useRef } from 'react'
import Link from 'next/link'
import { useClickAway, useDebounce } from 'react-use'
import { Search } from 'lucide-react'
import { Api } from '@/services/api-client'
import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'

type SearchInputProps = {
	className?: string
}
const SearchInput: FC<SearchInputProps> = ({ className }) => {
	const [focused, setFocused] = React.useState(false)
	const [searchQuery, setSearchQuery] = React.useState('')
	const [products, setProducts] = React.useState<Product[]>([])

	const ref = useRef(null)
	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		async () => {
			try {
				const response = await Api.products.search(searchQuery)
				setProducts(response)
			} catch (e) {
				console.error(e)
			}
		},
		250,
		[searchQuery],
	)
	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}
	return (
		<>
			{focused ? <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-30"></div> : null}
			<div
				ref={ref}
				className={cn('flex rounded-2xl flex-1 justify-between relative h-11', className)}>
				<Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400 z-30" />
				<input
					type="text"
					placeholder="Найти пиццу"
					className="rounded-2xl outline-none w-full bg-gray-100 pl-11 z-30"
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				{products.length > 0 ? (
					<div
						className={cn(
							'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
							focused && 'visible opacity-100 top-12',
						)}>
						{products.map((product) => (
							<Link
								key={product.id}
								href={`/product/${product.id}`}
								className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10"
								onClick={onClickItem}>
								<img
									className="rounded-sm"
									src={product.imageUrl}
									width={32}
									height={32}
									alt={product.name}
								/>
								<span>{product.name}</span>
							</Link>
						))}
					</div>
				) : null}
			</div>
		</>
	)
}

export default SearchInput
