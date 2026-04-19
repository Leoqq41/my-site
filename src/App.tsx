import { useState, useEffect } from 'react'
import { Home, User, Activity, Gamepad2, Award, Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f7f7] to-[#e8f0fe] text-gray-700 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fce4ec] to-[#e3f2fd] opacity-50"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20college%20student%20portrait%2C%20soft%20lighting%2C%20warm%20smile%2C%20casual%20clothing%2C%20professional%20headshot&image_size=square"
                alt="个人照片"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">你好，我是一名商学院学生</h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">广东科学技术职业学校 | 商学院</p>
            <div className="flex justify-center space-x-4">
              <a href="#info" className="bg-[#f8bbd0] hover:bg-[#f48fb1] text-white px-6 py-3 rounded-full shadow-md transition duration-300">
                了解我
              </a>
              <a href="#contact" className="bg-[#bbdefb] hover:bg-[#90caf9] text-gray-800 px-6 py-3 rounded-full shadow-md transition duration-300">
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section id="info" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
              <User className="mr-3 text-[#f48fb1]" />
              个人信息
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#fce4ec] p-3 rounded-full mr-4">
                      <Home className="text-[#f48fb1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">学校</h3>
                      <p className="text-gray-600">广东科学技术职业学校</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#e3f2fd] p-3 rounded-full mr-4">
                      <User className="text-[#90caf9]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">专业</h3>
                      <p className="text-gray-600">商学院</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#e8f5e8] p-3 rounded-full mr-4">
                      <Activity className="text-[#81c784]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">兴趣爱好</h3>
                      <p className="text-gray-600">打篮球、玩游戏</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#f3e5f5] p-3 rounded-full mr-4">
                      <Award className="text-[#ce93d8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">获奖经历</h3>
                      <p className="text-gray-600">广东省商务数据分析大赛冠军</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
              <Gamepad2 className="mr-3 text-[#90caf9]" />
              兴趣与技能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interests */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">兴趣爱好</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-[#e3f2fd] p-3 rounded-full mr-4">
                      <Activity className="text-[#90caf9]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">打篮球</h4>
                      <p className="text-gray-600 text-sm">热爱团队运动，经常参加校内比赛</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#f3e5f5] p-3 rounded-full mr-4">
                      <Gamepad2 className="text-[#ce93d8]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">玩游戏</h4>
                      <p className="text-gray-600 text-sm">喜欢策略类和团队合作游戏</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">专业技能</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">数据分析</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#90caf9] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">商务策划</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#f48fb1] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">Excel</span>
                      <span className="text-gray-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#81c784] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">PPT制作</span>
                      <span className="text-gray-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#ce93d8] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.7s' }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
              <Award className="mr-3 text-[#f48fb1]" />
              获奖成就
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#fce4ec] rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 bg-[#f48fb1] rounded-full flex items-center justify-center shadow-lg">
                    <Award className="text-white w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">广东省商务数据分析大赛冠军</h3>
                    <p className="text-gray-600 mb-4">在广东省商务数据分析大赛中，凭借出色的数据分析能力和团队协作，获得了冠军荣誉。</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="bg-[#e3f2fd] text-[#90caf9] px-3 py-1 rounded-full mr-3">数据分析</span>
                      <span className="bg-[#e8f5e8] text-[#81c784] px-3 py-1 rounded-full">团队协作</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.9s' }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
              <Mail className="mr-3 text-[#90caf9]" />
              联系我
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 hover:bg-[#f9f7f7] rounded-lg transition duration-300">
                  <div className="bg-[#e3f2fd] p-3 rounded-full mb-4">
                    <Mail className="text-[#90caf9]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">邮箱</h3>
                  <p className="text-gray-600">student@example.com</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 hover:bg-[#f9f7f7] rounded-lg transition duration-300">
                  <div className="bg-[#fce4ec] p-3 rounded-full mb-4">
                    <Phone className="text-[#f48fb1]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">电话</h3>
                  <p className="text-gray-600">138****1234</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 hover:bg-[#f9f7f7] rounded-lg transition duration-300">
                  <div className="bg-[#f3e5f5] p-3 rounded-full mb-4">
                    <Github className="text-[#ce93d8]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">社交平台</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-[#90caf9] hover:text-[#64b5f6]">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#f48fb1] hover:text-[#f06292]">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#81c784] hover:text-[#66bb6a]">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#fce4ec] to-[#e3f2fd]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600">© 2026 个人主页 | 广东科学技术职业学校商学院</p>
        </div>
      </footer>
    </div>
  )
}

export default App