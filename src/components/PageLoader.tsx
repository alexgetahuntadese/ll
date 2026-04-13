import { motion } from "framer-motion";
import { BeautifulLoader } from "./BeautifulLoader";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="relative"
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Main loader */}
        <BeautifulLoader size="lg" text="Loading amazing content..." />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              top: `${20 + (i % 3) * 40}px`,
              left: `${-60 + (i % 2) * 120}px`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PageLoader;
