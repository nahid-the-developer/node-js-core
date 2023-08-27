const EventEmitter = require('events');

class EventStart extends EventEmitter {
    eventStart() {
        console.log('Event Started');

        this.emit('picnic', {
            yah: 'yahoo',
            excited: '!!!'
        });
    }
}

module.exports = EventStart;