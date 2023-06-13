# 总结

## 须知

请查看src目录下的App.js和App.css文件，谢谢！

## 关于React的重拾

1. react中的组件只是一个普通的函数，他返回一段JSX语法，组件名首字母必须大写。
2. 在react的JSX语法中，使用大括号"{ }"包裹可以进入JS的语法环境，进行JS的操作。
3. react组件接收一个参数props,在JSX的组件中进行传参。
4. react中的useState函数可以创建响应式的数据，和隔壁的Vue3很相像（Vue3确实说自己借鉴到了React），但也有所不同，useState函数的返回值是一个list，其中第一个item是响应式的数据，第二个item是控制这个响应式数据的setter函数。（个人觉得Vue3的ref.value封装的更好，react相对麻烦但是更直观更符合直觉。）
5. 当面对大的数据时，useState的处理就不如vue中的ref省心了，react中需要对整个数据进行处理后整体改变，虽然底层是否用了某些diff查找我不清楚，但是代码层面会跑很多个map去修改数据，可能会对性能有影响，正在继续查找解决方案。



## 关于Tailwind CSS

在我个人看来，tailwindCSS是一个大型的原子化CSS的工具；

曾经我在我的项目中也使用过类似这样的原子化CSS，但是是自己写在全局的，例如常用的flex布局我会对其进行一个封装成一个模块，在其他文件中引入，直接添加类名，省去了很多复杂的重复代码。

Tailwind给我们提供了很多封装好的CSS样式，当我们去给HTML的标签添加class时也会直接编译出来，使用起来很方便。

## 遇到的一些问题

1.使用tailwind后我的button的样式发生了变化，变成了一个没有样式的div的效果，浏览器检查样式发现其中有-tw开头的属性，初步怀疑是tailwind对基础的标签样式进行了部分重写，还需要进一步查阅文档验证。

2.使用Tailwind过后可以明显的感觉出来项目更改热重载和打包编译时间变长了，正在寻找除修改tailwind编译模式之外的其他方式改进。

3.开始我是这样去为card传入key值的，但是card组件并不能访问到key，在map的过程中输出key发现可以拿到key，证明是组件传参的问题或是react不允许开发者私自查询组件的key值，为了尽快完成需求我退而求其次为data中添加了id作为key传入，这个问题的原因未知，正在进一步解决

```JSX
      <div id="container" className="border m-5 p-3">
        {data.map((item, index) => (
          <Card data={item} key={index} useHidden={useHidden}></Card>
        ))}
      </div>
```

