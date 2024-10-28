import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ToggleTheme = () => {
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  // documentElement retorna a raiz do documento que é <html>
  const pageClasses = document.documentElement.classList;

  // Se a preferência do sistema por dark, ele é colocado em dark
  useEffect(() => {
    systemPreference && pageClasses.add("dark");
  });

  const toggle = () => {
    // Função que alterna a classe 'dark' na tag <html>
    pageClasses.toggle("dark");
  };

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 block dark:hidden cursor-pointer"
        onClick={toggle} // Chamando a função toggle ao clicar no ícone
      />
      <SunIcon
        className="h-8 text-gray-100 hidden dark:block cursor-pointer"
        onClick={toggle} // Chamando a função toggle ao clicar no ícone
      />
    </div>
  );
};

export default ToggleTheme;
