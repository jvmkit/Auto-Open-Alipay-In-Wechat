### Auto-Open-Alipay-In-Wechat

在微信页面唤醒支付宝实现领自动领红包。

在TG某群看到羊毛党发的在微信里自动唤醒支付宝领红包的JS，不过混淆了，于是逆了下。。。


####  操作过程
1、进去手机支付宝里保存那个二维码，然后使用扫描软件识别出来URL地址。形如 https://qr.alipay.com/c1x06297uwd5jdqrw6sal05

2、替换evil.js里的地址为你自己的,(kouling.js是别人混淆的,evil.js是我解出来的)
var g="你的地址"

3、访问index.html，你可以放在公网上然后写段子也好XSS也好，总之能触发他人在手机访问就行了。
