import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getLocaleURL } from "@/i18n/config";
import { languageFlags } from "@/data/flags";
import { Image } from "astro:assets";

interface LanguageSelectorProps {
  currentLang: string;
  currentPath: string;
}

interface MobileLanguageSelectorProps {
  currentLang: string;
  currentPath: string;
}

export const LanguageSelector = ({
  currentLang,
  currentPath,
}: LanguageSelectorProps) => {
  const handleLanguageChange = (newLang: string) => {
    if (newLang !== currentLang) {
      const newUrl = getLocaleURL(currentPath, newLang as "en" | "es");
      window.location.href = newUrl;
    }
  };

  const currentFlag = languageFlags[currentLang as keyof typeof languageFlags];

  return (
    <Select value={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-fit h-10 bg-background/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-background/90 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 rounded-lg shadow-sm cursor-pointer">
        <div className="flex items-center gap-2">
          <img
            src={currentFlag.src}
            alt={currentFlag.alt}
            className="w-5 h-5 rounded-sm object-cover shadow-sm"
          />
          <span className="text-sm font-medium text-foreground">
            {currentFlag.label}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="bg-background/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg">
        {Object.entries(languageFlags).map(([lang, flag]) => (
          <SelectItem
            key={lang}
            value={lang}
            className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 rounded-md mx-1"
          >
            <div className="flex items-center gap-3 w-full">
              <img
                src={flag.src}
                alt={flag.alt}
                className="w-5 h-5 rounded-sm object-cover shadow-sm"
              />
              <span className="text-sm font-medium text-foreground">
                {flag.label}
              </span>
              <span className="text-xs text-gray-500 ml-auto">{flag.alt}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const MobileLanguageSelector = ({
  currentLang,
  currentPath,
}: MobileLanguageSelectorProps) => {
  const handleLanguageChange = (newLang: string) => {
    if (newLang !== currentLang) {
      const newUrl = getLocaleURL(currentPath, newLang as "en" | "es");
      window.location.href = newUrl;
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-white text-2xl font-medium mb-2">
        Language / Idioma
      </h3>
      <div className="flex flex-col gap-3 w-fit cursor-pointer">
        {Object.entries(languageFlags).map(([lang, flag]) => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 cursor-pointer ${
              currentLang === lang
                ? "bg-white/20 text-white border-2 border-white/30 shadow-lg"
                : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
            }`}
          >
            <img
              src={flag.src}
              alt={flag.alt}
              className="w-8 h-8 rounded-md object-cover shadow-sm"
              width={32}
              height={32}
              loading="lazy"
            />
            <div className="flex flex-col items-start">
              <span className="text-lg font-medium">{flag.label}</span>
              {/* <span className="text-sm opacity-80">{flag.alt}</span> */}
            </div>
            {currentLang === lang && (
              <div className="ml-auto w-3 h-3 bg-white rounded-full shadow-sm"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
