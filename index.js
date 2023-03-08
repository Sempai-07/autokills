class AutoKill {
  constructor(client, time) {
    if (!client) {
      throw new Error('Provide the Client!');
    }
    if (!time) {
      console.error('Auto Kill: [No Time Provided, Defaulting to 40 Seconds!]');
    }
    if (time < 5000) {
      throw new Error('Time Must Be More Than 5 Seconds');
    }

    this.client = client;
    this.time = time;
    this.timer = null;
  }

  restart() {
   this.stop();
   this.start();
  }
  
  onKill(callback) {
   this.callback = callback;
  }

  start() {
   this.timer = setInterval(() => {
    if (!this.client.user || !this.client.readyAt) {
      console.log('Process Killed, Relogging!');
      clearInterval(this.timer);
      if (this.callback) {
        this.callback();
      }
      process.exit(1);
    }
   }, this.time);
  }



  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  
  getTimeRemaining() {
    const timeLeft = this.time - ((Date.now() - this.client.readyAt) / 1000);
    return timeLeft < 0 ? 0 : timeLeft;
  }
  
  pause() {
    clearInterval(this.timer);
  }
  
  resume() {
    this.timer = setInterval(() => {
        // Kill logic here
    }, this.getTimeRemaining() * 1000);
  }
  
  isRunning() {
    return !!this.timer;
  }
  
  onPause(callback) {
    this.onPauseCallback = callback;
  }
  
  onResume(callback) {
    this.onResumeCallback = callback;
  }
  
  setTime(time) {
    if (time < 5000) {
        throw new Error('Time must be more than 5 seconds');
    }
    this.time = time;
  }
  
  onRestart(callback) {
    this.onRestartCallback = callback;
  }
  
  onStop(callback) {
    this.onStopCallback = callback;
  }
  
  onStart(callback) {
    this.onStartCallback = callback;
  }
  
  pause() {
    clearInterval(this.timer);
    if (this.onPauseCallback) {
        this.onPauseCallback();
    }
  }
  
  resume() {
    this.timer = setInterval(() => {
        // Kill logic here
    }, this.getTimeRemaining() * 1000);
    if (this.onResumeCallback) {
        this.onResumeCallback();
    }
  }
  
  setClient(client) {
    if (!client) {
        throw new Error('Provide the Client!');
    }
    this.client = client;
  }
  
  setKillTime(time) {
    this.setTime(time);
    this.restart();
  }
  
  checkConnection() {
   if (!this.client || !this.client.ws || this.client.ws.status !== 0) {
    console.log('Connection lost, restarting process!');
     clearInterval(this.timer);
    if (this.callback) {
      this.callback();
    }
    process.exit(1);
   }
  }

}

module.exports = {
    AutoKill
};