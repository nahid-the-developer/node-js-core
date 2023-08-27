const EventStart = require('./event')

const eStart = new EventStart();

eStart.on('picnic', ({ yah, excited }) => {
    console.log(`Event is Start. ${yah} ${excited}`);
})

eStart.eventStart();
