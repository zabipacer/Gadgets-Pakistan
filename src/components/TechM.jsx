import React from 'react';
import { motion } from 'framer-motion';
import {
  SiApple,
  SiLogitech,
  SiRazer,
  SiSony,
  SiWikidotjs,
  SiSamsung,
  SiAsus,
  SiAmd,
} from 'react-icons/si';

const brands = [
  { name: 'Apple', icon: <SiApple className="w-12 h-12 text-gray-200" /> },
  { name: 'Logitech', icon: <SiLogitech className="w-12 h-12 text-blue-400" /> },
  { name: 'Razer', icon: <SiRazer className="w-12 h-12 text-green-500" /> },
  { name: 'Sony', icon: <SiSony className="w-12 h-12 text-gray-300" /> },
  { name: 'Microsoft', icon: <SiWikidotjs className="w-12 h-12 text-blue-500" /> },
  { name: 'Samsung', icon: <SiSamsung className="w-12 h-12 text-blue-400" /> },
  { name: 'ASUS', icon: <SiAsus className="w-12 h-12 text-indigo-500" /> },
  { name: 'AMD', icon: <SiAmd className="w-12 h-12 text-red-500" /> },
];

const TechMarquee = () => {
  const brandList = [...brands, ...brands, ...brands];

  return (
    <div className="overflow-hidden w-full bg-gradient-to-r from-[#0a0f24] via-[#1b2a50] to-[#3a1f40] py-8">
      <motion.div
        className="flex items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: brandList.length * 0.25,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {brandList.map((brand, index) => (
          <div key={`${brand.name}-${index}`} className="inline-block mx-8 hover:scale-110 transition-transform">
            <motion.div className="flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {brand.icon}
              <span className="mt-2 text-sm font-medium text-zinc-200">{brand.name}</span>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
