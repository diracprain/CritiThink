import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Conversation {
  id: number;
  content: string;
  timestamp: string;
  isUser: boolean;
}

export default function Toolbar({ conversations }: { conversations: Conversation[] }) {
  return (
    <div className="flex h-32 flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <h3 className="font-medium">追问历史</h3>
        <span className="text-sm text-gray-400">时间轴</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2">
        {conversations.map((conversation) => (
          <motion.div
            key={conversation.id}
            initial={{ opacity: 0, x: conversation.isUser ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "mb-2 rounded-lg p-2 text-sm",
              conversation.isUser
                ? "ml-auto bg-orange-500/20"
                : "mr-auto bg-gray-800"
            )}
          >
            <div className="flex items-center">
              {!conversation.isUser && (
                <div className="mr-2 h-2 w-2 rounded-full bg-orange-500" />
              )}
              <span>{conversation.content}</span>
              {conversation.isUser && (
                <div className="ml-2 h-2 w-2 rounded-full bg-blue-500" />
              )}
            </div>
            <div
              className={cn(
                "mt-1 text-xs",
                conversation.isUser ? "text-orange-400" : "text-gray-500"
              )}
            >
              {conversation.timestamp}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}