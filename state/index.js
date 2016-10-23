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
		},
		{
			coffee_id: 3,
			type: 'Cold Press',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'Cold brew, or cold press, is coffee grounds steeped in water at cold or room temperature for an extended period.'
		},
		{
			coffee_id: 4,
			type: 'Macchiato',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'Macchiato, meaning "stained", is an espresso with a dash of foamed milk. At first sight it resembles a small cappuccino, but even if the ingredients are the same as those used for cappuccino, a macchiato has a much stronger and aromatic taste.'
		},
		{
			coffee_id: 5,
			type: 'Chai Latte',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'Numerous houses use the term chai latte to indicate that the steamed milk of a normal caffè latte is being flavoured with a spiced tea concentrate instead of with espresso.'
		},
		{
			coffee_id: 6,
			type: 'Mochaccino',
			image: 'https://s-media-cache-ak0.pinimg.com/564x/99/94/fe/9994fedb8db160d363719f2acb74acb4.jpg',
			description: 'Single shot poured over heaped teaspoon of hot chocolate powder and stirred. Top with velvety milk in a cappuccino style.'
		},
	],
	searchWord: ''
}
