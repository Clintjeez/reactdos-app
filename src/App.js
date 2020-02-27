import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, selectedProjectProvider } from './context'

export const App = () => {
  return (
    <selectedProjectProvider>
      <ProjectProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectProvider>
    </selectedProjectProvider>
  );
}
export default App;
