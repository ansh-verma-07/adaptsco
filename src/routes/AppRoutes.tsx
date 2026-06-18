import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Projects } from "../pages/Projects";
import { ProjectDetail } from "../pages/ProjectDetail";
import { Journal } from "../pages/Journal";
import { JournalDetail } from "../pages/JournalDetail";
import { Testimonials } from "../pages/Testimonials";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    const reset = () => {
      const lenis = (window as unknown as { __adaptsLenis?: { scrollTo: (target: number, options?: { immediate?: boolean; force?: boolean }) => void } }).__adaptsLenis;
      lenis?.scrollTo(0, { immediate: true, force: true });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };
    reset();
    const id = window.requestAnimationFrame(reset);
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
