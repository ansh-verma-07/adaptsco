import { useRef } from "react";

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = (event: React.MouseEvent<T>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
