第一层
bin下的www.js
纯createServer逻辑
不涉及业务代码的处理

第二层
app.js
系统基本信息的配置，
不涉及业务代码的处理

第三层
router路由层
只关心路由相关的，其他的一概不管
会接收controller层返回的数据，交给resModel做处理，返回一个带状态码和原数据的JSON对象

第四层
controller层
只关心数据，数据处理、返回数据
数据返回后，怎么处理--不关心
