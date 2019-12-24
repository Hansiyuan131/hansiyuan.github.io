## 注：本文所有的配置都来自官网
### 服务端的安装
- 官网的一键安装脚本安装

```
// 安装
bash <(curl -L -s https://install.direct/go.sh)
// 编辑配置文件
vim /etc/v2ray/config.json
```
一般来说配置文件已经有了出站规则
```
{
  "inbounds": [
    {
      "port": 16823, // 服务器监听端口
      "protocol": "vmess",    // 主传入协议
      "settings": {
        "clients": [
          {
            "id": "b831381d-6324-4d53-ad4f-8cda48b30811",  // 用户 ID，客户端与服务器必须相同
            "alterId": 64
          }
        ]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",  // 主传出协议
      "settings": {}
    }
  ]
}
```
服务端主要设置入站规则，其他默认就行，关于如何开机启动，这里不做赘述
### 客户端的配置
- 官方的非图形化工具
   地址：[官方工具](https://github.com/v2ray/v2ray-core/releases)
   目录如下
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190920235206855.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JvZHlhbmRTb3Vs,size_16,color_FFFFFF,t_70)
   主要是配置文件的处理，启动的话，直接双击v2ray.exe,而wv2ray是后台运行
   **设置开机自启**
   window键加R 然后输入shell:startup，把wv2ray新建一个快捷方式，放入打开的文件夹里
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921010212981.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JvZHlhbmRTb3Vs,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921010201388.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JvZHlhbmRTb3Vs,size_16,color_FFFFFF,t_70)
   配置文件**config.json**
   就是一个配置基本路由
```
{
  "log": {
    "loglevel": "warning",
    "access": "D:\\v2ray\\access.log",
    "error": "D:\\v2ray\\error.log"
  },
  "inbounds": [
    {
      "port": 1080,
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      },
      "settings": {
        "auth": "noauth",
        "udp": true
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "serveraddr.com",
            "port": 16823,  
            "users": [
              {
                "id": "b831381d-6324-4d53-ad4f-8cda48b30811",
                "alterId": 64
              }
            ]
          }
        ]
      }
    },
    {
      "protocol": "freedom",
      "settings": {},
      "tag": "direct" //如果要使用路由，这个 tag 是一定要有的，在这里 direct 就是 freedom 的一个标号，在路由中说 direct V2Ray 就知道是这里的 freedom 了
    }    
  ],
  "routing": {
    "domainStrategy": "IPOnDemand",
    "rules": [
      {
        "type": "field",
        "outboundTag": "direct",
        "domain": ["geosite:cn"] // 中国大陆主流网站的域名
      },
      {
        "type": "field",
        "outboundTag": "direct",
        "ip": [
          "geoip:cn", // 中国大陆的 IP
          "geoip:private" // 私有地址 IP，如路由器等
        ]
      }
    ]
  }
}
```
目前为止基本上就ok了，不过v2ray完全由你自己来配置代理，windows全局代理我设置后不起作用，这里我推荐chrome的SwitchyOmega插件
- SwitchyOmega插件使用
1. 新建一个规则，端口写你本机设置监听的端口，不是服务器的端口
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921011450598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JvZHlhbmRTb3Vs,size_16,color_FFFFFF,t_70)
2. 设置跳过常用网站
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921011844820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JvZHlhbmRTb3Vs,size_16,color_FFFFFF,t_70)
  gwflist：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
  其他的更加深入的使用，这里不做赘述
- 三方图形化客户端
  我推荐使用v2rayN
  使用方式：下载后直接把所有内容拷贝到v2ray的同级目录
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921012346352.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JvZHlhbmRTb3Vs,size_16,color_FFFFFF,t_70)
  打开v2rayN.exe,添加一个服务器按照你服务器的配置来
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921012519531.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JvZHlhbmRTb3Vs,size_16,color_FFFFFF,t_70)找到托盘的图标，右键开启http代理
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921012753949.png)
  模式个人建议使用pac模式，其他设置，看个人喜好。