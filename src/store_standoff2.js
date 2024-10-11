class StoreStandoff2 {
	constructor(userId) {
		this.api = "https://store.standoff2.com/api/v1"
		this.headers = {
			"content-type": "application/json",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
		}
		this.userId = userId
	}

	async getAccountInfo() {
		const response = await fetch(
			`${this.api}/accounts/${this.userId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getProducts() {
		const response = await fetch(
			`${this.api}/products/${this.userId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getEvents() {
		const response = await fetch(
			`${this.api}/events/${this.userId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async activateCoupon(coupon) {
		const response = await fetch(
			`${this.api}/coupon`, {
				method: "POST",
				body: JSON.stringify({
					uid: this.userId,
					coupon: coupon
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getPayment(email, inApps = [], processData = false, sendPromotions = true) {
		const response = await fetch(
			`${this.api}/payments/`, {
				method: "POST",
				body: JSON.stringify({
					uid: this.userId,
					email: email,
					inapps: inApps,
					consents: {
						processData: processData,
						sendPromotions: sendPromotions
					}
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getPaymentStatus(paymentId) {
		const response = await  fetch(
			`${this.api}/payments/status/${paymentId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
 }

module.exports = {StoreStandoff2}
