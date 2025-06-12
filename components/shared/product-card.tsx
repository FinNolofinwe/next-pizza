import React, { FC } from 'react'
import Link from 'next/link'
import { Title } from './index'
import { Button } from '../ui'
import { Plus } from 'lucide-react'

interface ProductCardProps {
	id: number
	name: string
	price: number
	count?: number
	imageUrl?: string
	className?: string
}
const ProductCard: FC<ProductCardProps> = ({ id, name, className, imageUrl, price }) => {
	return (
		<div className={className}>
			<Link href={`/products/${id}`}>
				<div className="flex justify-center p-6 bg-primary-foreground rounded-lg h-[260px]">
					<img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
				</div>
			</Link>

			<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
			<p className="text-sm text-gray-400">
				Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
			</p>

			<div className="flex justify-between items-center mt-4">
				<span className="text-[20px]">{price}</span>

				<Button variant="secondary">
					<Plus className="w-4 h-4 mr-1" />
					Добавить
				</Button>
			</div>
		</div>
	)
}

export default ProductCard
