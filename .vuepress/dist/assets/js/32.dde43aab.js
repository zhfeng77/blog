(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{207:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"shell-脚本编写教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本编写教程","aria-hidden":"true"}},[this._v("#")]),this._v(" Shell 脚本编写教程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"执行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("方法一： "),s("code",[this._v("bash test.sh")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("chmod 755 test.sh")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("./test.sh")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"基础语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础语法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[a("code",[t._v("#!/bin/bash")]),t._v(" #! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("set -e")]),t._v(" 确保脚本抛出遇到的错误")])]),t._v(" "),a("li",[a("p",[t._v("数据类型：只有字符串和整型两种")])]),t._v(" "),a("li",[a("p",[t._v("使用双引号")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("shell 的变量赋值的时候不用带 "),a("code",[t._v("$")]),t._v("，而使用或者输出的时候要带 "),a("code",[t._v("$")]),t._v("。加减乘除的时候要加两层小括号。括号外面要有一个 "),a("code",[t._v("$")]),t._v("，括号里面的变量可以不用 "),a("code",[t._v("$")]),t._v("。需要注意的是，变量赋值，等号两边不能有空格，否则会被解析成命令，报错无此命令。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 变量")]),t._v("\na"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("10\nb"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("10\nc"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"this is test"')]),t._v("\nd"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("$((")]),t._v("a"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{attrs:{class:"token variable"}},[t._v("))")])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),t._v(" \n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$c")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$d")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("$((")]),t._v("a"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{attrs:{class:"token variable"}},[t._v("))")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(169),alt:"输出"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表达式","aria-hidden":"true"}},[this._v("#")]),this._v(" 表达式")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("str"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"a b c d e f g h i j"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("${str}")]),t._v("          "),a("span",{attrs:{class:"token comment"}},[t._v("#源字符串")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("${#str}")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("#字符串长度，包含空格")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("${str:5}")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("#截取从第五个后面开始到最后的字符")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("${str:5:2}")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("#截取从第五个后面开始的2个字符")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str"),a("span",{attrs:{class:"token comment"}},[t._v("#a*f}      #从开头删除a到f的字符")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str"),a("span",{attrs:{class:"token comment"}},[t._v("##a*}      #从开头删除a以后的字符")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("${str%f*j}")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("#从结尾删除f到j的字符")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("${str%%*j}")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("#从结尾删除j前面的所有字符包括j")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("${str}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(170),alt:"输出"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断","aria-hidden":"true"}},[this._v("#")]),this._v(" 判断")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("-gt >")]),t._v(" "),a("code",[t._v("-ge >=")]),t._v(" "),a("code",[t._v("-lt <")]),t._v(" "),a("code",[t._v("-le <=")]),t._v(" "),a("code",[t._v("-eq =")]),t._v(" "),a("code",[t._v("-ne !=")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 判断 test 或 []")]),t._v("\nnum1"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("10\nnum2"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("10\n\n"),a("span",{attrs:{class:"token function"}},[t._v("test")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$num1")]),t._v(" -eq "),a("span",{attrs:{class:"token variable"}},[t._v("$num2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"num1 == num2"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"num1 != num2"')]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$num1")]),t._v(" -eq "),a("span",{attrs:{class:"token variable"}},[t._v("$num2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"num1 == num2"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"num1 != num2"')]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(171),alt:"输出"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"条件语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件语句","aria-hidden":"true"}},[this._v("#")]),this._v(" 条件语句")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("格式：if 条件 ; then 结果 fi ，最后面一定要有 fi 。在 shell 脚本里面，控制分支结构结束都要和开头的单词相反，例如，"),s("code",[this._v("if <–> fi")]),this._v("，"),s("code",[this._v("case <–> esac")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("grades"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("70\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -ge 90 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -le 100 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Your grade is excellent."')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -ge 80 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -le 89 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Your grade is good."')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -ge 70 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -le 79 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Your grade is middle."')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -ge 60 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$grades")]),t._v(" -le 69 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Your grade is passing."')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Your grade is badly."')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"循环语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环语句","aria-hidden":"true"}},[this._v("#")]),this._v(" 循环语句")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"while-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#while-语句","aria-hidden":"true"}},[this._v("#")]),this._v(" while 语句")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v(" -gt 0 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("((")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token punctuation"}},[t._v("))")])]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(158),alt:"输出"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"until-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#until-语句","aria-hidden":"true"}},[this._v("#")]),this._v(" until 语句")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("until")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v(" -le 0 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("((")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token punctuation"}},[t._v("))")])]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(158),alt:"输出"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"for-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-语句","aria-hidden":"true"}},[this._v("#")]),this._v(" for 语句")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("`")]),a("span",{attrs:{class:"token function"}},[t._v("seq")]),t._v(" 4 10"),a("span",{attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("`")]),a("span",{attrs:{class:"token function"}},[t._v("seq")]),t._v(" 4 10"),a("span",{attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("#seq是一个命令，顺序生成一串数字或者字符")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(172),alt:"输出"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("funcName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    语句 \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 返回值"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Shell 函数返回值只能是整数，一般用来表示函数执行成功与否，0表示成功，其他值表示失败。如果 return 其他数据，比如一个字符串，往往会得到错误提示："),s("code",[this._v("numeric argument required")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("函数参数从 "),s("code",[this._v("$1")]),this._v(" 到 "),s("code",[this._v("$n")]),this._v("，"),s("code",[this._v("$0")]),this._v(" 是文件名。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 打印数字")]),t._v("\nprintNum "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("`")]),a("span",{attrs:{class:"token function"}},[t._v("seq")]),t._v(" 2 8"),a("span",{attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("#seq是一个命令，顺序生成一串数字或者字符")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v("\nprintNum "),a("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传参","aria-hidden":"true"}},[this._v("#")]),this._v(" 传参")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("采用 "),a("code",[t._v("$0")]),t._v(" , "),a("code",[t._v("$1")]),t._v(" , "),a("code",[t._v("$2")]),t._v(" ...等方式获取脚本命令行传入的参数，"),a("code",[t._v("$0")]),t._v(" 获取到的是脚本路径以及脚本名，后面按顺序获取参数，当参数超过10个时(包括10个)，需要使用 "),a("code",[t._v("${10}")]),t._v(", "),a("code",[t._v("${11}")]),t._v(" ...才能获取到参数，但是一般很少会超过10个参数的情况。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"脚本名'),a("span",{attrs:{class:"token variable"}},[t._v("$0")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第一个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第二个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$2")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第三个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$3")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第四个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$4")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第五个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$5")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第六个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$6")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第七个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$7")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第八个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$8")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第九个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$9")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第十个参数'),a("span",{attrs:{class:"token variable"}},[t._v("$10")]),t._v('"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"第十个参数'),a("span",{attrs:{class:"token variable"}},[t._v("${10}")]),t._v('"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(173),alt:"输出"}})])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Shell 脚本与 Windows/Dos 下的批处理相似，也就是用各类命令预先放入到一个文件中，方便一次性执行的一个程序文件，主要是方便管理员进行设置或者管理用的。但是它比 Windows 下的批处理更强大，比用其他编程程序编辑的程序效率更高，它使用了 Linux/Unix 下的命令。")]),t._v(" "),a("p",[t._v("更明白地来说，shell script 就像早期 dos 年代的 "),a("a",{attrs:{href:"https://baike.baidu.com/item/%E6%89%B9%E5%A4%84%E7%90%86/1448600?fromtitle=.bat&fromid=6476412",target:"_blank",rel:"noopener noreferrer"}},[t._v(".bat"),a("OutboundLink")],1),t._v("，最简单的功能就是将许多指令汇整写一起，让使用者很容易地就能够一个操作执行多个命令，而 shell script 更是提供了数组，循环，条件以及逻辑判断等重要功能，让使用者可以直接以 shell 来写程序，而不必使用类似 C 程序语言等传统程序编写的语法。"),a("a",{attrs:{href:"https://blog.csdn.net/qq_18297675/article/details/52693464",target:"_blank",rel:"noopener noreferrer"}},[t._v("语法参考"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("方法二： 得先增加 test.sh 文件可执行权限")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("[ ] 里面每个变量之间都要有空格")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("while 语句是只要条件为真就执行下面语句。需要注意的是，这里的条件除了 while true 可以这样写，其它的条件都要用 test 或者 [ ] 来判断")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("until 语句是只要条件为假就执行下列语句。")]),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),a("p",[t._v("返回值是可选的，如果没有显示 return 则默认返回最后一条语句执行的结果。")]),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("如果一定要让函数返回字符串，那么可以先定义一个变量，用来接收函数的计算结果，脚本在需要的时候访问这个变量来获得函数返回值。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40)])},n,!1,null,null,null);r.options.__file="sh.md";s.default=r.exports}}]);