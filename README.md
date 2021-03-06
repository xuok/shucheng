```
项目介绍
连载小说继续更新；
· 完善在Android平板电脑上的阅读体验；
· 增加书籍桌面快捷方式；
· 修复从我的收藏下载的书籍无法阅读的问题；
· 优化小米分享和小米读书的数据同步速度；
· 修复小米书架widget偶尔点击无效的bug；
· 修复Home键体验；
· 提升升级体验。
小米科技精心打造免费电子书阅读器：
· 海量在线书库，支持在线阅读、书籍下载、离线阅读 连载小说最新；
· 支持连载小说最新章节查询、更新提示，阅读体验绝对史无前例；
· 显示下载/阅读进度、自动记忆阅读位置、书签管理、章节/进度跳转、白天黑夜模式及亮度调节等全功能阅读模式；
· 自动/手动导入本地下载的txt电子书；
· 精美书架widget。
```
```
技术栈
gulp/handlebars/zepto/require/jquery
```
```
# shucheng
项目运行方式
gulp server
```
```
# shucheng
书城项目大功告成
```
```
bookCity

|——mock
|    |——detail
|    |     |---352876.json  //详情页数据 
|    |——index
|    |     |---home.json //首页数据
|    |     |---recommend1.json //加载更多
|    |     |---recommend2.json //加载更多
|    |     |---recommend3.json //加载更多
|    |——login 
|    |     |---user.json  //登陆注册数据
|    |——render
|    |     |---chapter-list.json //目录页数据
|    |——render
|    |     |---data1.json //第一章的jsonp地址
|    |     |---data2.json //第二章的地址
|    |     |---data3.json //第三章的地址
|    |     |---data4.json //第四章的地址
|    |——search
|    |     |---search.json //搜索页数据
|    |     |---searchKey.json //查询搜索结果数据
|    |——index.js //接口文件
|——bulid
|    |——css
//各种重叠样式表
|    |    |——common.css
|    |    |——detail.css
|    |    |——login.css
|    |    |——menu.css
|    |    |——search.css
|    |    |——style.css
|    |    |———swiper-4.2.2.min.css
|    |    |———text.css
|    |——js
|    |    |——common
|    |    |     |---temp.js //handlebars公用方法
|    |    |     |---getUrl.js //获取地址栏参数公用方法
|    |    |——detail
|    |    |     |---index.js //详情页
|    |    |——page
|    |    |     |---index.js //首页
|    |    |——lib
|    |    |     |---betterscroll.min.js
|    |    |     |---flexible.js
|    |    |     |---handlebars-v4.0.11.js
|    |    |     |---jquery-2.1.1.min.js
|    |    |     |---jquery.base64.js
|    |    |     |---jquery.lazyload.js
|    |    |     |---require.js
|    |    |     |---require.text.js
|    |    |     |---swiper-4.2.2.min.js
|    |    |     |---zepto.js
|    |    |——login
|    |    |     |---index.js //登录页

|    |    |——menu
|    |    |     |---index.js //目录页
|    |    |——textB
|    |    |     |---index.js //阅读页
|    |    |——search
|    |    |     |---index.js //搜索页
|    |    |——main.js //配置文件
//配置页面
|---page
|    |    |——login.html //配置登录页
|    |    |——detail.html //配置详情页
|    |    |——menu.html //配置目录页
|    |    |——search.html //配置搜索页
|    |    |——search.html //配置阅读页
//text模块引入页面
|---template
|    |    |——blocklist.html//限时免费
|    |    |——dl-list.html//男女生最爱
|    |    |——recommend.html//换一换
|    |    |——template.html//banner图
```

