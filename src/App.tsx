import { AppLayout } from "./components/layout/AppLayout";
import { SmoothScrollProvider } from "./components/motion/SmoothScrollProvider";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <SmoothScrollProvider>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </SmoothScrollProvider>
  );
}
