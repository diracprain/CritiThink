import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Agent {
  id: number;
  name: string;
  avatar: string;
  description: string;
}

export default function AgentAvatar({
  agent,
  onClick,
  debateMode,
}: {
  agent: Agent;
  onClick: () => void;
  debateMode: boolean;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-orange-500/30 bg-gray-900/50 p-4 backdrop-blur-md">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2",
          debateMode ? "border-orange-500" : "border-gray-600"
        )}
      >
        <img
          src={agent.avatar}
          alt={agent.name}
          className="h-full w-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: debateMode ? 0.3 : 0 }}
          className="absolute inset-0 bg-orange-500"
        />
      </motion.div>

      <h3 className="mb-2 text-xl font-semibold">{agent.name}</h3>
      <p className="text-center text-gray-400">{agent.description}</p>

      <button
        onClick={onClick}
        className="mt-4 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white"
      >
        切换哲学立场
      </button>
    </div>
  );
}