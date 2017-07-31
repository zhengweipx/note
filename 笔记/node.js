浏览器 -》 多媒体 
         1.图形图像   webgl  （opengl）

         基于v8引擎运行

         快速 简单  单线程异步机制-》处理高并发-》大数据

         1.cmd    require()   引用文件必须加路径 (相对路径、绝对路径)
           后缀名可以不加  demo.js 》demo.json 》demo.node

           被引入的文件 怎么没去写

           引入文件路径的顺序

           包 1.核心包    2.第三方包(nodejs存在的意义)     3.自定义

  http         
		1.创建服务器
		2.创建客户端    http.request({url:""})
		3.path本地路径   url远程路径

程序出错抛出异常try{
    
}catch(e){
    console.log(e)
}


数据流   可写流    可读流   双向流



"bin":{
    "startServer":"./server.js"
    "自定义的命令"：“代用的文件”
}


//流程
1.先写好代码逻辑
2. 文件头部#!/uer/bin/env  node   
3. 创建包文件   package.json   "bin"
4. 想让别人用  发布  npm
    a.npm  login
    b.npm publish
   自己用  npm link
    卸载  npm uninstall -g 包名	


    var fn=new Function('a','console.log(a)')
	'console.log(a)'函数体  'a'参数
	fn("b");

	# 
	var obj={name:"li",age:12,sex:"女"}
	with(obj){
	console.log(name)
	}

    eval是Javascript内置函数，用于计算字符串表达式的值。例如eval("2+3") 返回的是5。


    查看端口  netstat -a -n


    1.客户端请求方式：
    	get   post
   	 	终端都没实现  put delete    nodejs可以接受put/delete



   	 模版引擎：jade、EJS

     node-xlsx 处理elx数据


     async    
     request   处理请求


     socket.io   服务器包


     两种方法解决ajax跨域的问题： 1.jsonp  依赖script标签队访问远程的地址  
                                           缺点：两台服务器你都能控制
                                  2.代理的方式      request包    爬虫
                                                    cheerio包    




      Vue 基于MVVM编程模式   双向数据绑定  可以组件化开发的框架

      1.el  要绑定dom元素作为 Vue的控制区间
      2.data   就绑定该区间内的数据
      3. methods  绑定该区间内的方法，但是这些方法会随着视图的变化而不断执行
      4. computed  绑定该区间内的方法，使用方式不需要调用该方法，


      v-on   简写 @
      v-bind      :

      组件：
        1.具有抽象结构的能力
        2.行为能力、逻辑能力
        3.处理数据的能力

        优点：移植性比较强
        缺点：灵活性不够


        webpack 模块化的集成的     解析编译各种文件
        全局安装   
         loaders ： 处理css 需安 -》 css-loader  style-loader 

         ES6语法转化  ：babel



         1.找到入口文件
         2.载入vue   import
         3.载入入口页面
         4.写入口页面的组件  template  script(export default {name: 'app'})  style

         5.<router-view></router-view> 放到入口页面指定的位置，路由进来的组件都会呈现在
         这个地方
         6.配置路由
         7.载入 vue-route
         8.vue.use()
         9.设置路由
         10.指定路由的路径及路由对应的组件

        获取数据方式（比ajax好用）
         fetch('××.html').then(function(e){
          return e.json()
         }).then(function(){

         })




        项目的背景（要写的清楚） 项目的名字  
        
        工作内容  所用的知识点   
        
        所有的App都打包好  生成二维码

        介绍在项目中工作的职责


