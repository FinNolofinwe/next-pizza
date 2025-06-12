import React, { FC } from 'react'
import { SortPopup, Container, Categories } from './index'
import { cn } from '@/lib/utils'

interface TopBarProps {
	className?: string
}
const TopBar: FC<TopBarProps> = ({ className }) => {
	return (
		<div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
			<Container>
				<Categories />
				<SortPopup />
			</Container>
		</div>
	)
}

export default TopBar
