// it will not be the complete way the way node create eventEmitter but it will give you
// the general idea that how it actually woring.

const EventEmitter = function(){
    this.events = []
}

EventEmitter.prototype.on = function(type , funtion){
  this.events[type] = this.events[type] || []
  this.events[type].push(funtion)
}

EventEmitter.prototype.emit = function(value){
    this.events[value] = this.events[value] || []
    this.events[value].forEach(element => {
        element()
    });
}


module.exports = EventEmitter