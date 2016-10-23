export default {
	order: {
		orderCoffees: [
			{
				orderCoffees_id: 0,
				coffee_id: 3,
				type: 'Flat White',
				quantity: 1,
				milk: 'trim',
				sugar: 1
			},
			{
				orderCoffees_id: 1,
				coffee_id: 7,
				type: 'Americano',
				quantity: 2,
				milk: 'soy',
				sugar: 0
			},
			{
				orderCoffees_id: 2,
				coffee_id: 3,
				type: 'Flat White',
				quantity: 2,
				milk: 'none',
				sugar: 3
			}
		]
	},
	coffees: [
		{
			coffee_id: 1,
			type: 'Short Black',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'A Short Black is what Australians call a shot of espresso. It is typically a 30ml espresso served in a small glass with a thick crema floating on top.'
		},
		{
			coffee_id: 2,
			type: 'Flat White',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'A type of coffee made with espresso and hot steamed milk, but without the froth characteristic of a cappuccino.'
		}
	]
}
