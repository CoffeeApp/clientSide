export default {
	order: [
		{
			order_id: 1,
			shop_id: 234,
			coffees: [
				{
					type: 'flat white',
					qty: 1,
					milk: 'trim',
					sugar: 1
				},
				{
					type: 'americano',
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
			type: 'short black',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: ''
		},
		{
			id: 2,
			type: 'flat white',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: ''
		}
	]
}
