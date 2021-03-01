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
