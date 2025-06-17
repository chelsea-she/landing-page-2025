"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import { copyTextToClipboard } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import GrayButton from "./gray-button";

let email = "cms556@cornell.edu";
let phone = "+1 3126225135";

type CopyValue = "email" | "phone";

export default function CopyButton({ value }: { value: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <div className="relative">
      {isCopied && (
        <p
          className={`absolute -top-8 -translate-x-1/4 transition-opacity duration-1000 text-xs sm:text-sm 
        text-center bg-gray-100 text-muted-foreground dark:bg-gray-500 px-4 py-1 rounded-md font-medium 
        ${isCopied ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          copied
        </p>
      )}
      <Copy
        onClick={() =>
          handleCopyClick(
            value === "phone" ? phone.replace(" ", "") : email,
            value === "phone" ? "phone" : "email"
          )
        }
        className="h-7 w-7 md:h-9 md:w-9 p-2 rounded-md cursor-pointer hover:bg-accent"
      />
    </div>
  );
}
