import React, { FC } from 'react'
import { ArrowUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Popover, PopoverTrigger } from '@radix-ui/react-popover'
interface SortPopupProps {
	className?: string
}
const SortPopup: FC<SortPopupProps> = ({ className }) => {
	return (
		<Popover>
			<PopoverTrigger>
				<div
					className={cn(
						'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
						className,
					)}>
					{' '}
					<ArrowUpDown className="w-4 h-4" />
					<b>Сортировка:</b>
					<b className="text-primary">популярное</b>
				</div>
			</PopoverTrigger>
		</Popover>
	)
}

export default SortPopup
