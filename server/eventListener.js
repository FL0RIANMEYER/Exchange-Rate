const EventListener = function() {
    const eventListener = {};

    
    this.on = (event, fn) => {
        eventListener[event] = eventListener[event] || [];
        eventListener[event].push(fn);
    };

    this.removeListener = (listener, event) => {
        if(event) {
            eventListener[event] = eventListener[event].filter(el => el !== listener);
        } else {
            for (let event in eventListener) {
                eventListener[event] = eventListener[event].filter(el => el !== listener);
            }
        }
    };

    this.callListeners = async (event, ...args) => {
        if(!eventListener[event]) { return; }
        return await Promise.race(eventListener[event].map(listener => listener(...args)));
    };
};


export default () => new EventListener();
