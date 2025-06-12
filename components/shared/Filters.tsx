import React, { FC } from 'react'
import { Title, FilterCheckbox, CheckboxFilterGroup } from './index'
import { Input } from '../ui'
import { RangeSlider } from '../ui'
interface FiltersProps {
	className?: string
}
const Filters: FC<FiltersProps> = ({ className }) => {
	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold mt-9" />

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="2" />
			</div>

			<div className="mt-6 border-y border-y-neutral-100 pt-6 pb-7">
				<p className="font-bold mb-4">Цена от и до:</p>

				<div className="flex gap-3">
					<Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
					<Input type="number" placeholder="1000" min={100} max={1000} />
				</div>
			</div>
			<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />

			<CheckboxFilterGroup
				className="pt-5"
				title="Ингредиенты"
				limit={6}
				defaultItems={[
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моццарелла',
						value: '2',
					},
					{
						text: 'Чеснок',
						value: '3',
					},
					{
						text: 'Солённые огурчики',
						value: '4',
					},
					{
						text: 'Красный лук',
						value: '5',
					},
					{
						text: 'Томаты',
						value: '6',
					},
				]}
				items={[
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моццарелла',
						value: '2',
					},
					{
						text: 'Чеснок',
						value: '3',
					},
					{
						text: 'Солённые огурчики',
						value: '4',
					},
					{
						text: 'Красный лук',
						value: '5',
					},
					{
						text: 'Томаты',
						value: '6',
					},
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моццарелла',
						value: '2',
					},
					{
						text: 'Чеснок',
						value: '3',
					},
					{
						text: 'Солённые огурчики',
						value: '4',
					},
					{
						text: 'Красный лук',
						value: '5',
					},
					{
						text: 'Томаты',
						value: '6',
					},
				]}
			/>
		</div>
	)
}

export default Filters
