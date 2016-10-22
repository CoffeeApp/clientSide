export default {
	order: [
		{
			order_id: 1,
			shop_id: 234,
			coffees: [
				{
					type: 'Flat White',
					qty: 1,
					milk: 'trim',
					sugar: 1
				},
				{
					type: 'Americano',
					qty: 2,
					milk: 'soy',
					sugar: 0
				}
			],
			details: {
				price: 6.00,
				name: 'Jeremy',
				phone: '021 225 555',
				ordered: 'Fri Oct 21 2016 10:39:50 GMT+1300 (NZDT)'
			}
		}
	],
	coffees: [
		{
			id: 1,
			type: 'Short Black',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'A Short Black is what Australians call a shot of espresso. It is typically a 30ml espresso served in a small glass with a thick crema floating on top.'
		},
		{
			id: 2,
			type: 'Flat White',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'A type of coffee made with espresso and hot steamed milk, but without the froth characteristic of a cappuccino.'
		}
	]
}
