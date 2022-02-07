const { EventEmitter } = require('events');

const newYearEventListener = (name) => {
  console.log(`Happy New Year, ${name}!`)
}

const myEmitter = new EventEmitter();

myEmitter.on('new-year', newYearEventListener);

myEmitter.emit('new-year', 'Rojer');