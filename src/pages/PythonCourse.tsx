import { useState } from 'react';
import { BookOpen, Code, CheckCircle2, ChevronLeft, ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type Chapter = {
  id: number;
  title: string;
  content: string;
  codeExample?: string;
  completed: boolean;
};

const chapters: Chapter[] = [
  {
    id: 1,
    title: "第一章：基础语法与数据结构",
    content: `学习 Python 的核心基础知识，包括语法和常用数据结构。

主要内容：
- 变量与基本数据类型（整数、浮点数、字符串、布尔值）
- 运算符与表达式
- 列表（List）的创建、访问和操作
- 元组（Tuple）的特点与使用
- 字典（Dictionary）的键值对操作
- 集合（Set）的特性与基本操作
- 条件语句（if/elif/else）
- 循环语句（for、while）`,
    codeExample: `# 变量与数据类型
name = "小明"
age = 20
score = 88.5
is_student = True

# 列表操作
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(numbers[0])  # 输出 1
print(numbers[-1])  # 输出 6

# 字典操作
student = {
    "name": "小红",
    "age": 19,
    "major": "计算机"
}
print(student["name"])
student["grade"] = "二年级"

# 条件判断
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
else:
    print("继续努力")

# 循环
for i in range(5):
    print(i)`,
    completed: false,
  },
  {
    id: 2,
    title: "第二章：函数与模块",
    content: `学习如何组织代码，使用函数和模块提高程序的可维护性。

主要内容：
- 函数的定义与调用
- 参数传递（位置参数、关键字参数、默认参数）
- 返回值与多返回值
- 变量作用域（局部变量、全局变量）
- 模块的导入与使用
- 常用标准库介绍`,
    codeExample: `# 定义函数
def greet(name, greeting="你好"):
    return f"{greeting}，{name}！"

# 多返回值函数
def calculate(a, b):
    return a + b, a - b, a * b

# 调用函数
print(greet("小明"))
print(greet("小红", "早上好"))
sum_result, diff_result, product_result = calculate(10, 5)

# 导入模块
import math
print(math.sqrt(16))  # 输出 4.0

# 变量作用域
x = 10  # 全局变量
def func():
    x = 20  # 局部变量
    print(x)
func()
print(x)`,
    completed: false,
  },
  {
    id: 3,
    title: "第三章：面向对象编程",
    content: `理解面向对象编程思想，掌握类与对象的使用。

主要内容：
- 类与对象的定义
- 属性与方法
- 构造方法（__init__）
- 继承与多态
- 封装与访问控制
- 特殊方法（__str__、__len__等）`,
    codeExample: `# 定义类
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我叫{self.name}，今年{self.age}岁"

# 继承
class GraduateStudent(Student):
    def __init__(self, name, age, thesis_topic):
        super().__init__(name, age)
        self.thesis_topic = thesis_topic
    
    def introduce(self):
        return f"我叫{self.name}，今年{self.age}岁，论文题目是{self.thesis_topic}"

# 使用类
student1 = Student("小明", 20)
print(student1.introduce())

grad_student = GraduateStudent("小红", 25, "数据分析")
print(grad_student.introduce())`,
    completed: false,
  },
  {
    id: 4,
    title: "第四章：文件操作与异常处理",
    content: `学习如何读取和写入文件，以及如何处理程序中的错误。

主要内容：
- 文件的打开与关闭
- 文本文件的读写
- CSV/JSON等格式的处理
- 异常处理（try/except/finally）
- 自定义异常
- 上下文管理器（with语句）`,
    codeExample: `# 文件写入
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("你好，世界！\\n")
    f.write("这是第二行")

# 文件读取
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 异常处理
try:
    num = int(input("请输入一个数字："))
    result = 100 / num
    print(result)
except ValueError:
    print("输入的不是数字！")
except ZeroDivisionError:
    print("不能除以零！")
finally:
    print("程序执行完毕")

# JSON处理
import json
data = {"name": "小明", "scores": [85, 90, 78]}
json_str = json.dumps(data)
print(json_str)
loaded_data = json.loads(json_str)`,
    completed: false,
  },
];

export default function PythonCourse() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [showCode, setShowCode] = useState(false);

  const currentChapter = chapters[currentChapterIndex];

  const toggleChapterComplete = (id: number) => {
    if (completedChapters.includes(id)) {
      setCompletedChapters(completedChapters.filter(c => c !== id));
    } else {
      setCompletedChapters([...completedChapters, id]);
    }
  };

  const goToPrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      setShowCode(false);
    }
  };

  const goToNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      setShowCode(false);
    }
  };

  const progress = (completedChapters.length / chapters.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f7f7] to-[#e8f0fe] text-gray-700">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-[#f48fb1] transition">
              <ArrowLeft size={20} />
              <span>返回首页</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="text-[#f48fb1]" size={24} />
            <h1 className="text-2xl font-bold text-gray-800">Python 课程学习</h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">学习进度</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-[#f48fb1] to-[#90caf9] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  {completedChapters.length}/{chapters.length} 章节
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800 mb-3">课程目录</h3>
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setCurrentChapterIndex(index);
                      setShowCode(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      currentChapterIndex === index
                        ? 'bg-gradient-to-r from-[#fce4ec] to-[#e3f2fd] text-gray-800 font-medium'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        completedChapters.includes(chapter.id)
                          ? 'bg-[#81c784] text-white'
                          : currentChapterIndex === index
                          ? 'bg-[#f48fb1] text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {completedChapters.includes(chapter.id) ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          chapter.id
                        )}
                      </div>
                      <span className="text-sm">{chapter.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {currentChapter.title}
                </h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleChapterComplete(currentChapter.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      completedChapters.includes(currentChapter.id)
                        ? 'bg-[#e8f5e8] text-[#81c784]'
                        : 'bg-[#e3f2fd] text-[#90caf9] hover:bg-[#bbdefb]'
                    }`}
                  >
                    <CheckCircle2 size={16} />
                    {completedChapters.includes(currentChapter.id) ? '已完成' : '标记为已完成'}
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="bg-[#f9f7f7] rounded-lg p-6 whitespace-pre-line leading-relaxed text-gray-700">
                  {currentChapter.content}
                </div>
              </div>

              {currentChapter.codeExample && (
                <div className="mb-8">
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="flex items-center gap-2 text-[#f48fb1] hover:text-[#f06292] font-medium mb-4"
                  >
                    <Code size={20} />
                    {showCode ? '隐藏代码示例' : '显示代码示例'}
                  </button>
                  {showCode && (
                    <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                      <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                        {currentChapter.codeExample}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between items-center">
                <button
                  onClick={goToPrev}
                  disabled={currentChapterIndex === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    currentChapterIndex === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'bg-[#f8bbd0] hover:bg-[#f48fb1] text-white'
                  }`}
                >
                  <ChevronLeft size={20} />
                  上一章
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentChapterIndex === chapters.length - 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    currentChapterIndex === chapters.length - 1
                      ? 'opacity-50 cursor-not-allowed'
                      : 'bg-[#bbdefb] hover:bg-[#90caf9] text-white'
                  }`}
                >
                  下一章
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {completedChapters.length === chapters.length && (
              <div className="mt-8 bg-gradient-to-r from-[#fce4ec] to-[#e3f2fd] rounded-xl shadow-lg p-8 text-center">
                <CheckCircle2 size={64} className="mx-auto text-[#81c784] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">🎉 恭喜完成课程！</h3>
                <p className="text-gray-600">你已完成所有 Python 课程章节的学习，继续加油！</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
