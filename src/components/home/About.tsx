const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">About Me</h2>
           <div className="w-24 h-1 bg-linear-to-r from-teal-500 to-cyan-500 mx-auto mb-12"></div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I am a passionate Computer Science student and a dedicated MERN Stack Developer. 
            With a strong foundation in Competitive Programming using C and C++, I love solving complex algorithmic problems.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            My goal is to build scalable web applications that solve real-world problems. 
            Currently, I am focused on mastering Next.js and advanced backend architecture to deliver high-performance solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;