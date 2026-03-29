import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatedBug } from '../ui/AnimatedBug';
import { BugStats } from '../ui/BugStats';
import { CVRequestModal } from '../ui/CVRequestModal';

const Layout = () => {
  return (
    <div className="layout">
      <AnimatedBug />
      <BugStats />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <CVRequestModal />
    </div>
  );
};

export default Layout;
