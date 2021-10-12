# 你不知道的 JavaScript

## 作用域

词法作用域是一套关于引擎如何寻找变量以及会在何处找到变量的规则。词法作用域最重要的特征是它的定义过程发生在代码的书写阶段（假设你没有使用 `eval()` 或 `with`）。

*词法作用域*只由函数被声明时所处的位置决定。最佳实践是少用 `eval()` 和 `with()` 影响词法作用域，不仅仅会被严格模式限制，更重要的是引擎无法在编译时对作用域查找进行优化，进而降低性能。

### 函数作用域

利用**函数作用域**隐藏内部实现。同样的，这也被用来避免同名冲突，参考模块化的历史进程。

### 块级作用域

- with
- try/catch
- let
- const

**任何声明在某个作用域内的变量，都将附属于这个作用域。**

## 提升

编译阶段的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。

也就是说，对于变量和函数在内的所有声明都会经历两个步骤。第一是编译（声明），第二是执行（赋值）。这意味着无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。

_注意的点：_

- 函数声明会被提升，函数表达式的赋值操作却不会。
- 函数会首先被提升，然后才是变量。

## 闭包

### What

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。换句话说，闭包使得函数可以继续访问定义时的词法作用域。

### How

无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。

更显见的是使用回调函数时。

本质上无论何时何地，如果将（访问它们各自词法作用域的）函数当作第一级的值类型并到处传递，你就会看到闭包在这些函数中的应用。在定时器、事件监听器、Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使用了回调函数，实际上就是在使用闭包！

### Why

- 处理 `for` 循环。
- 模块

_闭包的本质，就是一个函数被当作一个值传递后，脱离了原来的作用域，在新的作用域被引用后依然保持着对以前作用域访问的能力。_

## this

### Why

this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用。

### What

`this` 是在**运行时**绑定的，并非在编写时绑定，它指向什么完全取决于函数在哪里被调用（调用方式）。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文（context））。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this 就是这个记录的一个属性，会在函数执行的过程中用到。

### 绑定规则

- 默认绑定
- 隐式绑定 `obj.foo()`
- 显式绑定 Function.prototype.call()|apply()|bind()
- new 绑定 创建一个全新的对象，这个新对象会绑定到函数调用的 this

**优先级** new>显式>隐式>默认
