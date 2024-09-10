import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

import { Github } from '../icons/Github';

type ThemeType = 'dark' | 'light';

export const Header = () => {
  const [theme, setTheme] = useState<ThemeType>('dark');

  const handleSwitchTheme = (themeType: ThemeType) => {
    setTheme(themeType);
    if (themeType === 'light') document.documentElement.classList.remove('dark');
    if (themeType === 'dark') document.documentElement.classList.add('dark');
  };

  return (
    <React.Fragment>
      <div className="flex h-16 flex-row items-center justify-between">
        <span>devjuneo</span>
        <nav className="flex flex-row items-center gap-7">
          <ul className="flex flex-row items-center gap-8">
            <li>home</li>
            <li>about</li>
            <li>work</li>
          </ul>
          <div className="flex flex-row items-center gap-4">
            <Github className="h-5 w-5 text-df-secondary dark:text-df-white" />
            {theme === 'dark' ? (
              <MoonIcon
                className="h-5 w-5 cursor-pointer text-df-secondary dark:text-df-white"
                title="Change to Light"
                onClick={() => handleSwitchTheme('light')}
              />
            ) : (
              <SunIcon
                className="h-5 w-5 cursor-pointer text-df-secondary dark:text-df-white"
                title="Change to Dark"
                onClick={() => handleSwitchTheme('dark')}
              />
            )}
          </div>
          <button type="button">Contact me</button>
        </nav>
      </div>
    </React.Fragment>
  );
};
