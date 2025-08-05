'use client'

import React, { FC } from 'react'
import { Title, FilterCheckbox, CheckboxFilterGroup } from './index'
import { Input } from '../ui'
import { RangeSlider } from '../ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

interface FiltersProps {
	className?: string
}

interface PriceProps {
	priceFrom: number
	priceTo: number
}
const Filters: FC<FiltersProps> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()
	const [prices, setPrice] = React.useState<PriceProps>({
		priceFrom: 0,
		priceTo: 1000,
	})

	const itemsToRender = ingredients?.map((item) => ({
		text: item.name,
		value: item.id.toString(),
	}))

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...prices,
			[name]: value,
		})
	}
	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold mt-9" />

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" name="prepared" />
				<FilterCheckbox text="Новинки" value="2" name="new" />
			</div>

			<div className="mt-6 border-y border-y-neutral-100 pt-6 pb-7">
				<p className="font-bold mb-4">Цена от и до:</p>

				<div className="flex gap-3">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						value={String(prices.priceFrom)}
						onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input
						type="number"
						placeholder="1000"
						min={100}
						max={1000}
						value={String(prices.priceTo)}
						onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>
			</div>
			<RangeSlider
				min={0}
				max={1000}
				step={10}
				value={[prices.priceFrom, prices.priceTo]}
				onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
				formatLabel={(value) => `${value} ₽`}
			/>

			<CheckboxFilterGroup
				className="pt-5"
				title="Ингредиенты"
				limit={6}
				defaultItems={itemsToRender?.slice(0, 6)}
				items={itemsToRender}
				loading={loading}
				onClickCheckbox={onAddId}
				selectedIds={selectedIds}
				name="ingredients"
			/>
		</div>
	)
}

export default Filters
