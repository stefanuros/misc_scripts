let main=(url, numMinutes = 0.5, interval = 500)=>{
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
