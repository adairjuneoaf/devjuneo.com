import React from 'react';

import { Experience } from './components/experience';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Me } from './components/me';

export const App = () => {
  return (
    <React.Fragment>
      <div className="flex h-screen w-full justify-center">
        <main className="flex w-full max-w-[1440px] flex-col gap-24 px-8">
          <Header />
          <Me />
          <Experience />
          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};
