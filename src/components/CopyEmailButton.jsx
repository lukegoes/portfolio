import { useState } from "react";

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
    <button
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <p className="flex items-center justify-center gap-2">
        <img src="assets/copy.svg" alt="" className="w-5" />
        {copied ? "Email copiado!" : "Copiar meu email"}
      </p>
    </button>
  );
};

export default CopyEmailButton;
