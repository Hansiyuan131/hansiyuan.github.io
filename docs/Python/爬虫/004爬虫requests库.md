# Request模块

## 安装模块

``` bash
pip3 install requests
```

## 发送请求

### GET请求
``` python
import requests

baidu_url = "https://www.baidu.com"
response = requests.get(baidu_url)
```

#### response常用方法
``` python
print(response.content.decode('utf-8'))
response.encoding = 'utf-8'
print(response.text)
print(response.status_code)
print(response.request.headers)
print(response.headers)
```

#### 发送带header的请求
>模拟浏览器，欺骗浏览器，获取和浏览器一致的内容

``` python
import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
}

baidu_url = "https://www.baidu.com"
response = requests.get(baidu_url, headers=headers)

print(response.request.headers)
```

#### 发送带参数请求

``` python
import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
}
baidu_url = "https://www.baidu.com/s?"
params = {'wd': 'python'}
response = requests.get(baidu_url, params=params, headers=headers)
```

### POST请求

## 使用代理

## 模拟登陆


## 获取响应

## 保存图片

<Valine></Valine>