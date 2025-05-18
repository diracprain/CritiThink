import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { agents, fallacies, conversations } from "@/mocks/training";
import AgentAvatar from "@/components/AgentAvatar";
import Toolbar from "@/components/Toolbar";
import { LogicTopology } from "@/components/LogicTopology";
import { FallacyRadar } from "@/components/FallacyRadar";
import { toast } from "sonner";

export default function TrainingPage() {
  const [currentAgent, setCurrentAgent] = useState(0);
  const [difficulty, setDifficulty] = useState(3);
  const [debateMode, setDebateMode] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const navigate = useNavigate();

  const toggleAgent = () => {
    setCurrentAgent((prev) => (prev + 1) % agents.length);
    toast.success(`已切换至${agents[(currentAgent + 1) % agents.length].name}`);
  };

  const toggleDebateMode = () => {
    setDebateMode(!debateMode);
    toast.success(`辩论模式已${!debateMode ? '开启' : '关闭'}`);
  };

  const closeGuide = () => {
    setShowGuide(false);
    toast('随时点击右上角问号图标查看指南');
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#1E3F66] text-white">
      {/* 顶部导航栏 */}
      <nav className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-white"
            >
              <span className="text-orange-500">Criti</span>Think
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>难度:</span>
                <select 
                  value={difficulty}
                  onChange={(e) => setDifficulty(Number(e.target.value))}
                  className="rounded-md bg-gray-800 px-2 py-1 text-white"
                >
                  {[1, 2, 3, 4, 5].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={toggleDebateMode}
                className={cn(
                  "rounded-md px-3 py-1 text-sm font-medium",
                  debateMode ? "bg-orange-500" : "bg-gray-800"
                )}
              >
                辩论模式 {debateMode ? "ON" : "OFF"}
              </button>

              <button
                onClick={() => setShowGuide(true)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white"
              >
                <i className="fa-solid fa-question" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 新手引导 */}
      <AnimatePresence>
        {showGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-2xl rounded-xl bg-gray-800 p-6"
            >
              <h2 className="mb-6 text-2xl font-bold text-orange-500">使用指南</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">1. 智能体切换</h3>
                  <p className="text-gray-300">
                    点击左侧智能体头像或"切换哲学立场"按钮，可以与不同哲学立场的智能体进行对话训练。
                    当前可选智能体：苏格拉底、笛卡尔、尼采。
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">2. 辩论模式</h3>
                  <p className="text-gray-300">
                    开启辩论模式后，智能体会采取更激烈的辩论风格，适合高阶训练。
                    通过顶部导航栏的"辩论模式"按钮切换。
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">3. 难度设置</h3>
                  <p className="text-gray-300">
                    通过顶部导航栏的难度选择器调整训练难度(1-5级)，
                    级别越高，智能体的反驳会更深入复杂。
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">4. 思维拓扑图</h3>
                  <p className="text-gray-300">
                    中央区域展示当前对话的逻辑拓扑结构，展示论点间的关联关系。
                    辩论模式下会显示更复杂的逻辑网络。
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">5. 谬误雷达</h3>
                  <p className="text-gray-300">
                    右侧雷达图实时分析你的论述中可能存在的逻辑谬误类型和程度，
                    帮助识别和改进思维弱点。
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">6. 对话历史</h3>
                  <p className="text-gray-300">
                    底部区域记录完整的对话历史，蓝色圆点标记你的发言，
                    橙色圆点标记智能体的回应。
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeGuide}
                  className="rounded-md bg-orange-500 px-4 py-2 font-medium text-white"
                >
                  开始训练
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 主内容区 - 三分布局 */}
      <main className="flex flex-1 flex-col md:flex-row">
        {/* 左侧Agent区域 */}
        <div className="w-full p-4 md:w-1/4">
          <AgentAvatar 
            agent={agents[currentAgent]} 
            onClick={toggleAgent}
            debateMode={debateMode}
          />
        </div>

        {/* 中央逻辑拓扑图 */}
        <div className="flex-1 p-4">
          <div className="h-full rounded-xl border-2 border-orange-500/30 bg-gray-900/50 p-4 backdrop-blur-md">
            <h3 className="mb-4 text-center text-xl font-semibold">思维路径拓扑图</h3>
            <div className="h-64 md:h-96">
              <LogicTopology debateMode={debateMode} />
            </div>
          </div>
        </div>

        {/* 右侧谬误雷达 */}
        <div className="w-full p-4 md:w-1/4">
          <div className="h-full rounded-xl border-2 border-orange-500/30 bg-gray-900/50 p-4 backdrop-blur-md">
            <h3 className="mb-4 text-center text-xl font-semibold">逻辑谬误雷达</h3>
            <div className="h-64">
              <FallacyRadar data={fallacies} />
            </div>
          </div>
        </div>
      </main>

      {/* 底部时间轴 */}
      <div className="sticky bottom-0 border-t border-gray-700 bg-gray-900/50 backdrop-blur-md">
        <Toolbar conversations={conversations} />
      </div>
    </div>
  );
}