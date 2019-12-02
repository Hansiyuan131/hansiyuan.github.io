# 第一个Scrapy网络爬虫

## Scrapy 的安装
我这里使用的是Anaconda3

1. 进入到当前项目的运行环境
```
activate python_crawler
```
2. 执行安装命令
```
conda install scrapy
```
<!-- more -->
3. 验证安装
``` python
import scrapy
print(scrapy.version_info)
```

------------------
## Scrapy 新建项目

1. 打开Pycharm终端
![](/第一个Scrapy网络爬虫/B-1.png)
2. 执行命令，生成一个Scrapy项目
``` 
scrapy startproject 项目名
```
3. 生成项目目录
``` python
scrapy .cfg  # 它是 Scrapy 项目的配置文件，其内定义了项目的配置文件路径 、 部署相关信息等内容 。
project/
	一init一 . py
	items.py  # 它定义爬取结果(item)数据结构
	pipelines.py  # 它定义项目管道的实现，它的主要任务是清洗、验证和存储数据。
	settings.py  # 项目的全局配置文件。
	middlewares .py  # 它定义爬虫中间件和下载器中间件的实现。
	spiders/   #其内包含一个个爬虫的实现，每个爬虫都有一个文件 。
		init .py
		spiderl. py
		spider2 .py
```



------------------
## 修改 settings

1. 打开`settings`文件，找到`USER_AGENT`

![](/第一个Scrapy网络爬虫/B-3.png)

2. 打开浏览器任意页面，我这里打开的百度,找到`User-Agent`将其复制到`settings`的`USER_AGENT`下

![](/第一个Scrapy网络爬虫/B-2.png)
![](/第一个Scrapy网络爬虫/B-4.png)

--------------
## 创建 Spider (爬虫)

Spider组件解决了以下问题：

- 爬虫从哪个或哪些页面开始爬取。
- 对于一个已下载的页面，提取其中的哪些数据。
- 爬取完当前页面后，接下来爬取哪个或哪些页面。

1. 在Spider文件夹下新建`toscrape_spiders.py`文件   当然你也可以通过命令创建，这里就不多说了。
``` python
from  scrapy.spiders import Spider
from  scrapy import Request

class toscrape_spiders(Spider):
    name = 'toscrape'  # 爬虫名字  唯一 必须

    # allowed_domains = ['books.toscrape.com']  # 过滤掉不是这个域名的链接请求
    start_urls = ['http://books.toscrape.com/'] 
    # 它包含了 Spider 在启动时爬取的 url 列表，初始请求是由它来定义的 。

    def parse(self, response):
        # 默认情况下，被调用时 start_urls 里面的链接构成的请求完成下载执行后，返回的响应就会作为唯一的参数传递给这个函数 。 该方法负责解析返回的响应、提取数据或者进一步生成要处理的请求
        pass

```

------------------
## 创建 Item
> 创建 Item 需要继承 scrapy.Item 类，并且定义类型为 scrapy.Field 的字段。 

代码如下
``` python
import scrapy


class ToscrapeItem(scrapy.Item):
    name = scrapy.Field()  # 书籍的名称
    price = scrapy.Field()  # 价格
    url = scrapy.Field()  # 链接地址
    content = scrapy.Field()  # 书籍简介


```

------------------
## 解析 Response

>parse （）方法的参数 resposne 是 start_urls 里面的链接爬取后的结果 。 所以在parse （）方法>中，我们可以直接对 response 变量包含的内容进行解析，比如浏览请求结果的网页源代码，或者>进一步分析源代码内容，或者找出结果中的链接而得到下一个请求。

**分析网页结构**
我们使用谷歌开发者工具可以看到，书籍存放在`ol`列表中，每一个`li`标签下存放一本书的信息
![](/第一个Scrapy网络爬虫/B-5.png)

我们仔细看一下`li`标签下的有些什么东西，你可以清晰的看到书籍名称存放在`h3`标签下的`a`标签中，书籍价格存放在`class=”product_price“`的`div`标签下的`p`标签中............
![](/第一个Scrapy网络爬虫/B-6.png)

那么我们先找出所有的 `li`标签 ，然后提取每一个 `li`标签 中的内容 。我们使用XPath选择器提取数据。

``` python
from scrapy.spiders import Spider
from scrapy import Request

from toscrape.items import ToscrapeItem


class toscrape_spiders(Spider):
    name = 'toscrape'

    # allowed_domains = ['quotes.toscrape.com']
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        all_li = response.xpath(".//ol/li")
        for li in all_li:
            name = li.xpath(".//article/h3/a/text()").extract_first()
            price = li.xpath("article/div[last()]/p[@class='price_color']/text()").extract()[0]
            main_url = li.xpath("article/div[@class='image_container']/a/@href").extract_first()
            main_url = "http://books.toscrape.com/catalogue/" + main_url

```

------------------
## 使用 Item
>  Item 可以理解为一个字典，不过在声明的时候需要实例化。 然后依次用刚才解析的结果赋值 Item 的每一个字段， 最后将 Item 返回即可 。
``` python
from scrapy.spiders import Spider
from scrapy import Request

from toscrape.items import ToscrapeItem


class toscrape_spiders(Spider):
    name = 'toscrape'

    # allowed_domains = ['quotes.toscrape.com']
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        all_li = response.xpath(".//ol/li")
        item = ToscrapeItem()
        for li in all_li:
            name = li.xpath(".//article/h3/a/text()").extract_first()
            price = li.xpath("article/div[last()]/p[@class='price_color']/text()").extract()[0]
            main_url = li.xpath("article/div[@class='image_container']/a/@href").extract_first()
            main_url = "http://books.toscrape.com/catalogue/" + main_url
            item["name"] = name  # 书籍名称
            item["price"] = price  # 价格
        yield item
```

------------------
## 后续 Request

> 我们该怎样抓取下一页内容呢???  怎么爬取详情页数据呢???
> 这就需要我们从当前页面中找到信息来生成下一个请求，然后在下一个请求的页面里找到信息再构造再下一个请求 。 这样循环往复迭代，从而实现整站的爬取。

``` python
from scrapy.spiders import Spider
from scrapy import Request
import re
from toscrape.items import ToscrapeItem


class toscrape_spiders(Spider):
    name = 'toscrape'

    # start_urls = ['http://books.toscrape.com/'] 第一页爬取不到 使用下边链接
    start_urls = ['http://books.toscrape.com/catalogue/page-1.html']

    def parse(self, response):
        all_li = response.xpath(".//ol/li")
        item = ToscrapeItem()
        for li in all_li:
            name = li.xpath(".//article/h3/a/text()").extract_first()
            price = li.xpath("article/div[last()]/p[@class='price_color']/text()").extract()[0]
            main_url = li.xpath("article/div[@class='image_container']/a/@href").extract_first()
            main_url = "http://books.toscrape.com/catalogue/" + main_url
            item["name"] = name  # 书籍名称
            item["price"] = price  # 价格
            # 发送访问详细页的请求
            yield Request(main_url, callback=self.parse_content, meta={"myitem": item})
        next_url = response.xpath("//li[@class='next']/a/@href").extract()
        if next_url:
            next_url = "http://books.toscrape.com/catalogue/page-" + re.sub("\D", "", next_url[0]) + ".html"
            yield Request(next_url, callback=self.parse)
       
	 # 提取并解析详细页的数据
    def parse_content(self, response):
        content = response.xpath("//article/p/text()").extract_first()
        item = response.meta["myitem"]
        item["content"] = content
        yield item
````

------------------
## 运行爬虫

在`scrapy.cfg`同目录下创建`start.py`文件

``` python
from scrapy import cmdline

cmdline.execute("scrapy crawl toscrape".split())
```

------------------
## 保存到文件


> 可保存文件类型 'json', 'jsonlines', 'jl', 'csv', 'xml', 'marshal', 'pickle'

``` python
from scrapy import cmdline

cmdline.execute("scrapy crawl toscrape -o toscrape.csv".split())
```

------------------
## 使用 Item Pipeline

``` python
import pymongo


class ToscrapePipeline(object):
    def open_spider(self, item, spider):
        # 连接MongoDb数据库服务器
        self.db_client = pymongo.MongoClient()
        if spider.name == "toscrape":
            # 指定操作的数据库
            self.db = self.db_client["toscrape"]
            # 指定集合（类似MYSQL中的表）
            self.db_collection = self.db["books"]
        return item

    def process_item(self, item, spider):
        self.db_collection.insert_one(dict(item))
        return item

    # 爬虫全部完成后执行一次（收尾工作）
    def close_spider(self, spider):
        self.db_client.close()
```

------------------