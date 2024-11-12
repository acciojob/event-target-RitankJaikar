class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
      this.listeners.set(event, callback);
	  //console.log(this.listeners);
    }
  
    removeEventListener(event, callback) {
      this.listeners.delete(event);
    }
  
    dispatchEvent(event) {
		//console.log(this.listeners.get(event));
		if(this.listeners.get(event)) {
			this.listeners.get(event)();
		}
    }
    
  }


const target = new EventTarget();
const logHello = () => console.log('hello');
const logWorld = () => console.log('world');
target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);
target.dispatchEvent('hello');
target.dispatchEvent('world');
target.removeEventListener('hello', logHello);
target.dispatchEvent('hello');
target.dispatchEvent('world');
