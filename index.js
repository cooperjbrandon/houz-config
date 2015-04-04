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
	}
};