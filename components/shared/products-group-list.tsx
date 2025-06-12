'use client'

import React from 'react'
import { Title } from './title'
import { ProductCard } from './index'
import { cn } from '@/lib/utils'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/store/category'

interface ProductsListProps {
	title: string
	items: any[]
	className?: string
	listClassName?: string
	categoryId?: number
}

const ProductsGroupList: React.FC<ProductsListProps> = ({
	className,
	listClassName,
	title,
	items,
	categoryId,
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
	const intersectionRef = React.useRef<HTMLDivElement | null>(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	React.useEffect(() => {
		if (intersection?.isIntersecting && categoryId) {
			setActiveCategoryId(categoryId)
		}
	}, [intersection?.isIntersecting, title, categoryId, setActiveCategoryId])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items?.map((product, i) => (
					<ProductCard
						id={product.id || 1}
						key={product.id}
						name={product.name || 'Маргарита'}
						imageUrl={
							product.imageUrl ||
							'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp'
						}
						price={product.items[0].price || 390}
						count={i % 2}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductsGroupList
