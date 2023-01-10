# store_standoff2.py
Web-API for [store.standoff2.com](https://store.standoff2.com) which is the offical website of Standoff 2 to buy  valute in the game

## Example
```python
import store_standoff2
store_standoff2 = store_standoff2.StoreStandoff2(user_id="")
account_info = store_standoff2.get_account_info()
print(account_info)
```
