import react, { useContext, createContext } from 'react';
import { useProjects } from '../hooks';

export const ProjectContext = createContext();
export const ProjectsProvide = ({ children }) => {
  const { projects, useProjects } = useProjects();

  return (
    <ProjectContext.Provider value={{ projects, useProjects }}>
      {children}
    </ProjectContext.Provider>
  )
};

export const useProjectsvalue = () => useContext(ProjectContext);