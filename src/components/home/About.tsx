const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">About Me</h2>
           <div className="w-24 h-1 bg-linear-to-r from-teal-500 to-cyan-500 mx-auto mb-12"></div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Hi there! I&apos;m a passionate Full Stack Developer specializing in the MERN Stack and Next.js. With a B.Sc. in Computer Science & Engineering, I combine strong theoretical foundations with practical expertise in building modern, high-performance web applications.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Currently, I am deeply focused on the TypeScript ecosystem to engineer type-safe and scalable solutions. My journey involves not just writing code, but crafting robust Software Architectures and System Designs. Whether it&lsquo;s developing complex platforms like Port & Trade Logistics Systems or rental solutions, I prioritize writing clean, maintainable code that drives efficiency.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            My goal is to build scalable systems and engineer hybrid solutions for complex real-world problems. When I&apos;m not coding, I&lsquo;m likely exploring new system design patterns or optimizing application performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;