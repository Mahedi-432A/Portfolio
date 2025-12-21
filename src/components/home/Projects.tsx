import { projectsData } from "@/data/projectsData";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Featured Projects
          </h2>
          {/* <p className="text-gray-600 mt-2">Here are some of the projects I&apos;ve worked on.</p> */}
          <div className="w-24 h-1 bg-linear-to-r from-teal-500 to-cyan-500 mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
            >
              {/* Project Image Placeholder */}
              <div className="relative overflow-hidden h-48 bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-200">
                  <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
