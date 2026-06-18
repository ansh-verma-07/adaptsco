import { projects } from "../../data/projects";
import { visualFor } from "../../data/visuals";

export function FlyingPosters() {
  return (
    <div className="relative h-72 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)]">
      {projects.slice(0, 5).map((project, index) => (
        <img
          key={project.slug}
          src={visualFor(project.title)}
          alt=""
          className="absolute h-44 w-64 rounded-2xl object-cover shadow-2xl transition duration-500 hover:z-10 hover:scale-110"
          style={{ left: `${8 + index * 17}%`, top: `${28 + (index % 2) * 18}%`, transform: `rotate(${(index - 2) * 5}deg)` }}
        />
      ))}
    </div>
  );
}
