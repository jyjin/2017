const redisEvent = require('./redisEvent')

redisEvent.pub().publish('a', 'Hello!')