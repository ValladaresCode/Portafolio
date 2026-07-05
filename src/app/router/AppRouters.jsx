import { Routes, Route, Navigate } from 'react-router-dom';

import PortfolioLayout from '../../shared/components/layout/PortfolioLayout.jsx';
import PortfolioHome from '../../app/pages/PortfolioHome.jsx';
import PortfolioAbout from '../../app/pages/PortfolioAbout.jsx';
import PortfolioSkills from '../../app/pages/PortfolioSkills.jsx';
import PortfolioProjects from '../../app/pages/PortfolioProjects.jsx';
import PortfolioEducation from '../../app/pages/PortfolioEducation.jsx';
import PortfolioContact from '../../app/pages/PortfolioContact.jsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/portfolio" replace />} />

      <Route path="/portfolio" element={<PortfolioLayout />}>
        <Route index element={<PortfolioHome />} />
        <Route path="about" element={<PortfolioAbout />} />
        <Route path="skills" element={<PortfolioSkills />} />
        <Route path="projects" element={<PortfolioProjects />} />
        <Route path="education" element={<PortfolioEducation />} />
        <Route path="contact" element={<PortfolioContact />} />
      </Route>

      <Route path="*" element={<Navigate to="/portfolio" replace />} />
    </Routes>
  );
};