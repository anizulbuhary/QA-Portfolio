import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatedBug } from '../ui/AnimatedBug';
import { BugStats } from '../ui/BugStats';

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
    </div>
  );
};

export default Layout;
