import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { growthData, badges, skins } from "@/mocks/achievements";

export default function AchievementsPage() {
  const navigate = useNavigate();
  const [selectedBadge, setSelectedBadge] = useState<number | null>(null);
  const [selectedSkin, setSelectedSkin] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-yellow-900 text-white">
      {/* 神经网格背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-gray-900/10"></div>
        </div>
      </div>

      {/* 顶部导航栏 */}
      <nav className="border-b border-yellow-800 bg-gray-900/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-white"
            >
              <span className="text-yellow-500">Criti</span>Think
            </button>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-yellow-500">成就大厅</h1>

        {/* 思维肌肉曲线图 */}
        <section className="mb-12 rounded-xl border border-yellow-800 bg-gray-900/50 p-6 backdrop-blur-md">
          <h2 className="mb-6 text-xl font-semibold">思维肌肉成长曲线</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                <XAxis dataKey="date" stroke="#e5e7eb" />
                <YAxis stroke="#e5e7eb" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#f59e0b' }}
                  itemStyle={{ color: '#fbbf24' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="logic"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={{ fill: '#fbbf24', r: 4 }}
                  activeDot={{ r: 6 }}
                  name="逻辑能力"
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="critical"
                  stroke="#d97706"
                  strokeWidth={2}
                  dot={{ fill: '#f59e0b', r: 4 }}
                  activeDot={{ r: 6 }}
                  name="批判思维"
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="debate"
                  stroke="#92400e"
                  strokeWidth={2}
                  dot={{ fill: '#b45309', r: 4 }}
                  activeDot={{ r: 6 }}
                  name="辩论能力"
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* 里程碑徽章 */}
        <section className="mb-12 rounded-xl border border-yellow-800 bg-gray-900/50 p-6 backdrop-blur-md">
          <h2 className="mb-6 text-xl font-semibold">里程碑徽章</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {badges.map((badge) => (
              <motion.div
                key={badge.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedBadge(badge.id)}
                className={cn(
                  "flex flex-col items-center rounded-lg p-4 transition-all",
                  badge.unlocked
                    ? "bg-yellow-900/30 hover:bg-yellow-800/50"
                    : "bg-gray-800/50 hover:bg-gray-700/50"
                )}
              >
                <div className="relative mb-4 h-24 w-24">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className={cn(
                      "h-full w-full rounded-full object-cover",
                      !badge.unlocked && "grayscale"
                    )}
                  />
                  {!badge.unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50">
                      <i className="fa-solid fa-lock text-xl text-yellow-500" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-medium">{badge.name}</h3>
                <p className="text-center text-sm text-gray-400">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 学术皮肤 */}
        <section className="rounded-xl border border-yellow-800 bg-gray-900/50 p-6 backdrop-blur-md">
          <h2 className="mb-6 text-xl font-semibold">学术皮肤</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skins.map((skin) => (
              <motion.div
                key={skin.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedSkin(skin.id)}
                className={cn(
                  "overflow-hidden rounded-lg",
                  skin.unlocked
                    ? "ring-2 ring-yellow-500"
                    : "opacity-70"
                )}
              >
                <div className="relative aspect-video w-full">
                  <img
                    src={skin.preview}
                    alt={skin.name}
                    className="h-full w-full object-cover"
                  />
                  {!skin.unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <i className="fa-solid fa-lock text-3xl text-yellow-500" />
                    </div>
                  )}
                </div>
                <div className="bg-gray-800 p-4">
                  <h3 className="flex items-center justify-between font-medium">
                    <span>{skin.name}</span>
                    <span className="text-sm text-yellow-500">
                      {skin.unlocked ? "已解锁" : "未解锁"}
                    </span>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 徽章详情弹窗 */}
        <AnimatePresence>
          {selectedBadge !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={() => setSelectedBadge(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="w-full max-w-md rounded-xl bg-gray-800 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={badges[selectedBadge - 1].image}
                    alt={badges[selectedBadge - 1].name}
                    className="h-32 w-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-center text-2xl font-bold text-yellow-500">
                  {badges[selectedBadge - 1].name}
                </h3>
                <p className="mb-4 text-center text-gray-300">
                  {badges[selectedBadge - 1].description}
                </p>
                <p className="text-center text-sm text-gray-400">
                  {badges[selectedBadge - 1].unlocked
                    ? "已解锁"
                    : "尚未获得"}
                </p>
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="mt-6 w-full rounded-lg bg-yellow-600 py-2 font-medium text-white hover:bg-yellow-700"
                >
                  关闭
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 皮肤详情弹窗 */}
        <AnimatePresence>
          {selectedSkin !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={() => setSelectedSkin(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="w-full max-w-2xl rounded-xl bg-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video w-full">
                  <img
                    src={skins[selectedSkin - 1].preview}
                    alt={skins[selectedSkin - 1].name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-yellow-500">
                    {skins[selectedSkin - 1].name}
                  </h3>
                  <p className="text-gray-300">
                    {skins[selectedSkin - 1].unlocked
                      ? "已解锁，可在设置中应用此皮肤"
                      : "完成更多训练任务解锁此皮肤"}
                  </p>
                  <button
                    onClick={() => setSelectedSkin(null)}
                    className="mt-6 w-full rounded-lg bg-yellow-600 py-2 font-medium text-white hover:bg-yellow-700"
                  >
                    关闭
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}