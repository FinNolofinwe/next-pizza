'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'
import { FC } from 'react'

interface CategoriesProps {
	className?: string
}

const cats = [
	{ id: 1, name: 'Пиццы' },
	{ id: 2, name: 'Комбо' },
	{ id: 3, name: 'Закуски' },
	{ id: 4, name: 'Коктейли' },
	{ id: 5, name: 'Кофе' },
	{ id: 6, name: 'Напитки' },
	{ id: 7, name: 'Десерты' },
	{ id: 8, name: 'Десерты' },
]

const Categories: FC<CategoriesProps> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId)
	return (
		<div
			className={cn(
				'inline-flex items-center gap-2 bg-gray-50 px-4 py-1.5 rounded-2xl',
				className,
			)}>
			{cats.map(({ id, name }) => (
				<a
					key={id}
					href={`#${name}`}
					className={cn(
						'flex items-center h-11 font-bold rounded-2xl cursor-pointer px-5 py-3',
						categoryActiveId === id ? 'bg-white shadow-md shadow-gray-200 text-primary' : '',
					)}>
					<button>{name}</button>
				</a>
			))}
		</div>
	)
}

export default Categories
