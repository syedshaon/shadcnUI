"use client";

import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
type Props = {
  className?: string;
};

function LightDarktoggle({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleDarkToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };
  return (
    <div className={className}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={handleDarkToggle}>{isDarkMode ? <MoonIcon /> : <SunIcon />}</TooltipTrigger>
          <TooltipContent>{isDarkMode ? <small>Enable Dark Mode</small> : <small>Enable Light Mode</small>}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default LightDarktoggle;
