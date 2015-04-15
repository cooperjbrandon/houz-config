module.exports = {
	exchangeName: 'houz-exchange',
	routingKey: {
		cities: 'citynames',
		pages: 'pagenums',
		zipids: 'zipids',
		properties: 'propertyinfo'
	},
	queueName: {
		cities: 'houz-queue-cityname',
		pages: 'houz-queue-pagenum',
		zipids: 'houz-queue-zipid'
	},
	messageExpectations: {
		cities: { city: 'city' },
		pages: { pagenum: 'num', city: 'city' },
		zipids: { zipid: 'zipid' },
		properties: { propertyinfo: {
				zipid: 1111111,
				location: {
					type: 'Point',
					coordinates: [-121.999999, 37.000000] //lng, lat
				},
				bed: 3,
				bath: 3,
				image: 'http:\\/\\/photos2.zillowstatic.com\\/p_a\\/IStgkrhj0yauk21000000000.jpg',
				sqft: 5000,
				price: 1000000,
				postingDate: '01/01/0000'
			}
		}
	}
};