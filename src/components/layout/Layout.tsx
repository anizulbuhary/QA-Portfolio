import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatedBug } from '../ui/AnimatedBug';
import { BugStats } from '../ui/BugStats';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <AnimatedBug />
      <BugStats />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
