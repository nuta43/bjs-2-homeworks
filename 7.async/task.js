class AlarmClock {
    constructor () {
        this.alarmCollection = [];
    this.timerId = null;
    }
    addClock (time,callback,id) {
        if(id===undefined) {
            throw new Error('error text')
        }
        if (this.alarmCollection.find(f => f.id === id)) {
            console.error("Звонок уже существует")
            return
            }
        this.alarmCollection.push({time,callback,id})
        }

        removeClock(id) {
            if (this.alarmCollection.find(f => f.id===id)){
                this.alarmCollection.splice(this.alarmCollection.filter(f => f.id === id),1)
            return true
        }
            else return false
    }
        
    getCurrentFormattedTime() {
        let currentDate = new Date();
    let hours = currentDate.getHours()
    if (hours < 10) hours = '0' + hours;
    let minutes = currentDate.getMinutes()
    if (minutes < 10) minutes = '0' + minutes;
    let output = 'h:m'.replace('h', hours).replace('m', minutes)
        return output;
    }
    start() {
        function checkClock(id) {
if (currentDate=time) {
    callback()
}
else {
        let result = alarmCollection.forEach((time) => setInterval (checkClock,1000)) 
    this.alarmCollection.push(result)
        }

    }
}
    stop() {
        if (this.timerID) {
            clearInterval(this.timerID);
            this.timerID=null
        }

    }
    printAlarms() {
        this.alarmCollection.forEach((id,time) => console.log(id,time))

    }
    clearAlarms() {
        this.stop();
        this.alarmCollection=[]

    }
}