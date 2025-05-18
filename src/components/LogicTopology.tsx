import { motion, AnimatePresence } from "framer-motion";

interface LogicTopologyProps {
  debateMode: boolean;
}

export function LogicTopology({ debateMode }: LogicTopologyProps) {
  return (
    <div className="relative h-full w-full">
      <AnimatePresence>
        <motion.div
          key={debateMode ? "debate" : "normal"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.svg
            viewBox="0 0 100 100"
            className="h-full w-full"
          >
            {/* 拓扑图路径 - 简化示例 */}
            <motion.path
              d="M50 10 L90 50 L50 90 L10 50 Z"
              fill="none"
              stroke="#FF6D00"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="5"
              fill="#FF6D00"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.svg>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
