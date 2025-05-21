import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const email = "luklg@outlook.com";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center 
      rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
      whileHover={{ translateY: -5 }}
      whileTap={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait">
      {!copied ? (<motion.p className="flex items-center justify-center gap-2" 
      key={"copy"}
      initial={{ opacity: 0}} 
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.2, ease: "easeInOut" }}>
      <img  src="assets/copy.svg" alt="" className="w-5" />
      Copiar meu email
      </motion.p>) :

      (<motion.p className="flex items-center justify-center gap-2" 
      
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}>
      <img  src="assets/copy-done.svg" alt="" className="w-5" />
      Email copiado!
      </motion.p>)}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
