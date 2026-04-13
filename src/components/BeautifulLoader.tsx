import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface BeautifulLoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export const BeautifulLoader = ({ size = "md", text, className = "" }: BeautifulLoaderProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  const containerSize = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6"
  };

  const textSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={`flex flex-col items-center ${containerSize[size]} ${className}`}>
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-4 border-purple-500/20`}></div>
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-4 border-transparent border-t-purple-500`}></div>
        <Loader2 className={`${sizeClasses[size]} text-purple-500 animate-pulse`} />
      </motion.div>
      {text && (
        <motion.p
          className={`${textSize[size]} text-white/80 font-medium`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default BeautifulLoader;
