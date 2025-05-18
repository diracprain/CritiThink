import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { categories, courses, debates, subjects } from "@/mocks/library";

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState(1);
  const navigate = useNavigate();

  const currentCategory = categories.find(c => c.id === activeCategory);
  const currentItems = () => {
    switch(activeCategory) {
      case 1: return courses;
      case 2: return debates;
      case 4: return subjects;
      default: return [];
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* 神经网格背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-950/10"></div>
        </div>
      </div>

      {/* 主内容 */}
      <div className="relative z-10 flex min-h-screen">
        {/* 侧边栏 */}
        <div className="w-64 border-r border-gray-800 bg-gray-900/50 p-4 backdrop-blur-md">
          <h2 className="mb-8 text-2xl font-bold">
            <span className="text-orange-500">内容</span>图书馆
          </h2>
          
          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left transition-colors",
                  activeCategory === category.id
                    ? `${category.color} text-white`
                    : "text-gray-300 hover:bg-gray-800"
                )}
              >
                <i className={cn(category.icon, "text-lg")} />
                <span>{category.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* 主内容区 */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">{currentCategory?.name}</h1>
            <p className="mt-2 text-gray-400">
              {activeCategory === 1 && "命题逻辑交互课程与常见谬误案例库"}
              {activeCategory === 2 && "历史哲学辩论VR场景与人物角色扮演"}
              {activeCategory === 4 && "各学科专项逻辑训练与知识图谱"}
            </p>
          </div>

          {/* 蜂窝网格布局 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {currentItems().map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-md",
                    "transition-all duration-300 hover:shadow-lg",
                    activeCategory === 1 && "hover:shadow-blue-500/10",
                    activeCategory === 2 && "hover:shadow-purple-500/10",
                    activeCategory === 4 && "hover:shadow-green-500/10"
                  )}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.cover || item.preview}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.category && (
                      <span className="mt-1 inline-block rounded-full bg-gray-800 px-3 py-1 text-xs">
                        {item.category}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
