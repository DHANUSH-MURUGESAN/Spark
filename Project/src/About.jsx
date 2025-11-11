import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import sparkwhite from "./assets/sparkwhite.png";
import { Link } from "react-router";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 text-white font-sans">
      {/* Floating Sparkles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_70%)] animate-pulse" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.05),transparent_70%)] animate-pulse delay-500" />
      </div>

      {/* Parallax Motion Header */}
      <motion.div style={{ y: y1, opacity: opacity1 }} className="relative z-10 text-center py-40">
        <motion.img
          src={sparkwhite}
          alt="Spark Logo"
          className="mx-auto h-20 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.h1
          className="text-6xl font-bold font-serif mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Spark
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Spark empowers lenders with cutting-edge digital tools, reshaping how
          homeowners engage, refinance, and grow. We blend technology with trust
          — transforming servicing into a journey of insight and innovation.
        </motion.p>
      </motion.div>

      {/* Core Values Section */}
      <div className="relative z-20 mt-20 grid md:grid-cols-3 gap-10 px-12 pb-40">
        {[
          {
            title: "Innovation at Core",
            desc: "We merge advanced analytics, security, and design to create a future-ready financial ecosystem.",
          },
          {
            title: "Trust & Transparency",
            desc: "Our clients rely on us for compliance, precision, and performance that never compromise integrity.",
          },
          {
            title: "Sustainable Growth",
            desc: "We enable lenders to scale effortlessly, connecting borrowers to opportunities seamlessly.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-green-800/60 to-green-950/40 p-8 rounded-3xl border border-emerald-400/20 shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-lg"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(16,185,129,0.6)" }}
          >
            <h2 className="text-2xl font-bold mb-3 text-emerald-300">
              {item.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="relative z-30 text-center pb-40"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <p className="text-lg mb-6 text-emerald-400 font-medium tracking-widest uppercase">
          Let’s Build the Future of Lending Together
        </p>
        <Link
          to="/demo-request"
          className="bg-white/10 hover:bg-emerald-600/30 border border-emerald-400 text-white font-semibold px-10 py-4 rounded-full backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
        >
          Request a Demo
        </Link>
      </motion.div>

      {/* Glowing Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
    </section>
  );
};

export default About;