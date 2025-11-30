"use client";

import { Video } from "@/types";
import { educationLevels } from "@/types";
import { FiPlay, FiClock, FiVideo } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

interface VideoCardProps {
  video: Video;
  index?: number;
}

export default function VideoCard({ video, index = 0 }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-card border-2 border-border rounded-2xl overflow-hidden card-hover shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative h-56 group overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8 }}
            whileHover={{ scale: 1.15, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border-2 border-white/20"
          >
            <FiPlay className="w-8 h-8 text-white fill-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 space-x-reverse border border-white/20 shadow-lg">
          <FiClock className="w-4 h-4" />
          <span>{video.duration}</span>
        </div>
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20 shadow-lg">
          <FiVideo className="w-4 h-4 inline ml-1" />
          فيديو
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold mb-4 line-clamp-2 text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
          {video.title}
        </h3>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-primary bg-primary/10 px-3 py-1.5 rounded-lg text-sm font-semibold border-2 border-primary/20"
          >
            {educationLevels[video.level]}
          </motion.span>
          <span className="text-muted-foreground text-sm font-medium bg-muted/50 px-3 py-1.5 rounded-lg border border-border">
            {video.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

