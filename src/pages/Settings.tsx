import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import { settingsData, favorites, studyPlans } from "@/mocks/settings";

const settingsSchema = z.object({
  difficulty: z.number().min(1).max(5),
  notifications: z.boolean(),
  theme: z.enum(['light', 'dark', 'system']),
  language: z.string(),
  fontSize: z.number().min(12).max(24)
});

export default function SettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(settingsData);
  const [favList, setFavList] = useState(favorites);
  const [plans, setPlans] = useState(studyPlans);

  const handleSettingChange = (field: string, value: any) => {
    try {
      const newSettings = { ...settings, [field]: value };
      settingsSchema.parse(newSettings);
      setSettings(newSettings);
      toast.success('设置已保存');
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error('无效的设置值');
      }
    }
  };

  const removeFavorite = (id: number) => {
    setFavList(favList.filter(item => item.id !== id));
    toast.success('已移除收藏');
  };

  const togglePlan = (id: number) => {
    setPlans(plans.map(plan => 
      plan.id === id ? { ...plan, completed: !plan.completed } : plan
    ));
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* 神经网格背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-950/10"></div>
        </div>
      </div>

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
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-orange-500">设置工坊</h1>

        {/* 设置表单区 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 学习偏好设置 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-md"
          >
            <h2 className="mb-6 text-xl font-semibold">学习偏好设置</h2>
            
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">难度级别</label>
                <select
                  value={settings.difficulty}
                  onChange={(e) => handleSettingChange('difficulty', Number(e.target.value))}
                  className="w-full rounded-md bg-gray-700 p-2 text-white"
                >
                  {[1, 2, 3, 4, 5].map(level => (
                    <option key={level} value={level}>
                      {level}级
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">通知设置</label>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                      className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2">接收通知</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">主题设置</label>
                <div className="flex space-x-4">
                  {['light', 'dark', 'system'].map(theme => (
                    <button
                      key={theme}
                      onClick={() => handleSettingChange('theme', theme)}
                      className={cn(
                        "rounded-md px-3 py-1 text-sm",
                        settings.theme === theme ? 'bg-orange-500' : 'bg-gray-700'
                      )}
                    >
                      {theme === 'light' ? '浅色' : theme === 'dark' ? '深色' : '系统'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* 自定义内容管理 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-md"
          >
            <h2 className="mb-6 text-xl font-semibold">自定义内容</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium">我的收藏</h3>
                {favList.length > 0 ? (
                  <ul className="space-y-2">
                    {favList.map(item => (
                      <li key={item.id} className="flex items-center justify-between rounded-md bg-gray-700 p-3">
                        <span>{item.title}</span>
                        <button 
                          onClick={() => removeFavorite(item.id)}
                          className="text-sm text-orange-500 hover:text-orange-400"
                        >
                          移除
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">暂无收藏内容</p>
                )}
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium">学习计划</h3>
                {plans.length > 0 ? (
                  <ul className="space-y-2">
                    {plans.map(plan => (
                      <li key={plan.id} className="rounded-md bg-gray-700 p-3">
                        <div className="flex items-center justify-between">
                          <span>{plan.title}</span>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              checked={plan.completed}
                              onChange={() => togglePlan(plan.id)}
                              className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500"
                            />
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">暂无学习计划</p>
                )}
              </div>
            </div>
          </motion.section>
        </div>

        {/* 导出数据按钮 */}
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toast.success('数据导出成功')}
            className="rounded-md bg-orange-500 px-6 py-2 font-medium text-white"
          >
            导出学习数据
          </motion.button>
        </div>
      </main>
    </div>
  );
}