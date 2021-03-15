let main = (url, numMinutes = 0.5, interval = 500) => {
	console.log("started")
	this.intervalId = null

	const tryToReserve = (url) => {
		console.log(Date.now())
		fetch(url).then((res) => {
			res.json().then((data) => {
				if (data.availabilityType !== 0) {
					document.getElementById('addToStay').click()
					clearInterval(this.intervalId)
				}
			});
		});
	}

	const timeLimit = 1000 * 60 * numMinutes

	const startTime = Date.now()

	// Start the checker
	this.intervalId = setInterval(tryToReserve, interval, url)

	// Stop the checker after 5 minutes
	setTimeout(clearInterval, timeLimit, intervalId)
}

let main2 = (h = 7, m = 0, s = 0) => {
	this.t = new Date()
	this.t.setHours(h)
	this.t.setMinutes(m)
	this.t.setSeconds(s)

	console.log(`Stared`)
	console.log(`Waiting until ${this.t}`)

	this.intervalId = null

	const tryToReserve = () => {
		if(Date.now() >= this.t.valueOf()) {
			document.getElementById('addToStay').click()
			clearInterval(this.intervalId)
		}
	}

	const interval = 100

	this.intervalId = setInterval(tryToReserve, interval)
}


/**
 * 
 * @param {number} hour - Hour (24-hour time)
 * @param {number} minute - minute
 * @param {number} second - second
 * @param {number} time - time it should run in seconds
 * @param {number} interval - how many milliseconds between trying to click reserve
 */
let main3 = (hour = 7, minute = 0, second = 0, time = 5, interval = 250) => {
	this.t = new Date()
	this.t.setHours(hour)
	this.t.setMinutes(minute)
	this.t.setSeconds(second)

	this.isRunning = false

	console.log(`Started`)
	console.log(`Waiting until ${this.t}`)
	console.log(`Running for ${time} seconds and trying every ${interval} milliseconds`)

	this.intervalId = null

	const tryToReserve = () => {
		const reservationNotOpenMessage = 'Reserving these dates is not yet allowed'
		// const modalId = 'mat-dialog-3'
		const modalClass = 'mat-dialog-container'

		if(Date.now() >= this.t.valueOf()) {
			if(!this.isRunning) {
				console.log('Set running to true and set timeout')
				// Once it starts running, start the timer to shut it down
				setTimeout(clearInterval, time * 1000, this.intervalId)
				this.isRunning = true
			}

			document.getElementById('addToStay').click()

			const modals = document.getElementsByClassName(modalClass)
			const modal = modals[modals.length - 1]
			const modalContent = modal.textContent

			if(!modalContent.includes(reservationNotOpenMessage)) {
				console.log("Clicked reserve and stopped")
				clearInterval(this.intervalId)
			}
			else {
				modal.getElementsByTagName('button')[0].click()
			}
		}
	}

	this.intervalId = setInterval(tryToReserve, interval)
}
