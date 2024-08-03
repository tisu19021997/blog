---
tags:
  - on/web-scraping
  - on/python/selenium
  - on/science
url: https://stackoverflow.com/questions/68289474/selenium-headless-how-to-bypass-cloudflare-detection-using-selenium
---
Scenario: you get this or similar errors why trying to connect to a website (chat.openai.com in my case): "Your browser is out of date! ..."

Solution:
```python
# pip install undetected-chromedriver
import undetected_chromedriver as uc 
# browser = webdriver.Chrome(service=service, options=options) 
browser = uc.Chrome(options=options)
