import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold mb-5"></Title>
			</Container>
			<TopBar />
			<Container className="pb-14 flex  gap-12">
				<div className="flex gap-[60]">
					<Filters />
				</div>

				<div className="flex-1 pt-16">
					<div className="flex flex-col gap-12">
						<ProductsGroupList
							title="Пиццы"
							categoryId={1}
							items={[
								{
									id: 1,
									name: 'Маргарита',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									price: 390,
									items: [{ id: 1, name: 'Маргарита', price: 390 }],
								},
								{
									id: 2,
									name: 'Маргарита',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									price: 390,
									items: [{ id: 1, name: 'Маргарита', price: 390 }],
								},
								{
									id: 3,
									name: 'Маргарита',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									price: 390,
									items: [{ id: 1, name: 'Маргарита', price: 390 }],
								},
							]}
						/>

						<ProductsGroupList
							title="Комбо"
							categoryId={2}
							items={[
								{
									id: 1,
									name: 'Маргарита',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									price: 390,
									items: [{ id: 1, name: 'Маргарита', price: 390 }],
								},
								{
									id: 2,
									name: 'Маргарита',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									price: 390,
									items: [{ id: 1, name: 'Маргарита', price: 390 }],
								},
								{
									id: 3,
									name: 'Маргарита',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
									price: 390,
									items: [{ id: 1, name: 'Маргарита', price: 390 }],
								},
							]}
						/>
					</div>
				</div>
			</Container>
		</>
	)
}
