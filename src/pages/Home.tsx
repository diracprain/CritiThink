import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "主训练舱",
      description: "多智能体对抗系统与核心训练功能",
      color: "bg-orange-500",
      path: "/training"
    },
    {
      title: "内容图书馆",
      description: "基础逻辑/经典论战/时事议题/学科专项",
      color: "bg-blue-600",
      path: "/library"
    },
    {
      title: "成就大厅",
      description: "个人成长数据可视化与成就系统",
      color: "bg-yellow-600",
      path: "/achievements"
    },
    {
      title: "设置工坊",
      description: "学习偏好调节与自定义内容管理",
      color: "bg-green-600",
      path: "/settings"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* 神经网格背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-950/10"></div>
        </div>
      </div>

      {/* 主内容 */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* 导航栏 */}
        <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-white">
                    <span className="text-orange-500">Criti</span>Think
                  </h1>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {features.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => navigate(item.path)}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* 主要内容 */}
        <main className="mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              大学生批判性思维训练平台
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"
            >
              通过多智能体对抗交互提升逻辑能力，整合基础逻辑训练、经典哲学辩论、时事议题分析和学科专项模块
            </motion.p>
          </div>

          {/* 功能入口网格 */}
          <div className="mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-md",
                  "transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10"
                )}
                onClick={() => navigate(item.path)}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                      item.color
                    )}
                  >
                    <span className="text-xl font-bold text-white">
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}