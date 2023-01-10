import requests

class StoreStandoff2:
	def __init__(self, user_id: int) -> None:
		self.api = "https://store.standoff2.com/api/v1"
		self.headers = {
			"content-type": "application/json",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
		}
		self.user_id = user_id
		
	def get_account_info(self) -> dict:
		return requests.get(
			f"{self.api}/accounts/{self.user_id}",
			headers=self.headers).json()

	def get_products(self) -> dict:
		return requests.get(
			f"{self.api}/products/{self.user_id}",
			headers=self.headers).json()

	def get_events(self) -> list:
		return requests.get(
			f"{self.api}/events/{self.user_id}",
			headers=self.headers).json()

	def activate_coupon(
			self,
			coupon: str) -> dict:
		data = {
			"uid": self.user_id,
			"coupon": coupon
		}
		return requests.get(
			f"{self.api}/coupon",
			json=data,
			headers=self.headers).json()

	def get_payment(
			self,
			email: str,
			in_apps: list[str],
			process_data: bool = False,
			send_promotions: bool = True) -> dict:
		data = {
			"uid": self.user_id,
			"email": email,
			"inapps": in_apps,
			"consents": {
				"processData": process_data,
				"sendPromotions": send_promotions
			}
		}
		return requests.post(
			f"{self.api}/payments/",
			json=data,
			headers=self.headers).json()

	def get_payment_status(
			self,
			payment_id: str) -> dict:
		return requests.post(
			f"{self.api}/payments/status/{payment_id}",
			headers=self.headers).json()
