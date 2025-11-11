import React, {useEffect} from "react";
import { ShieldCheckIcon, InboxIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const CoordinatedDisclosurePolicy = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide">
            Coordinated Disclosure Policy
          </h1>
          <p className="text-xl leading-relaxed text-gray-100 font-light">
            We are committed to creating a safe digital ecosystem.  
            Security researchers and ethical hackers play a crucial role in strengthening Spark’s platform.
          </p>
        </div>

        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-gray-50"></div>
      </section>

      {/* Floating Badge Section */}
      <div className="flex justify-center -mt-14 relative z-20">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-[80%] text-center border border-green-100">
          <ShieldCheckIcon className="h-14 w-14 text-green-700 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Built on Trust & Transparency</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We believe in coordinated vulnerability disclosure — an open, respectful collaboration
            between Spark and the security community to protect our users.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-20 px-10 space-y-16">
        {/* Commitment */}
        <section className="group hover:scale-[1.02] transition-transform duration-500 bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-semibold text-green-800 mb-4 flex items-center">
            <CheckCircleIcon className="h-8 w-8 mr-3 text-green-700" />
            Our Commitment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Spark, security is woven into everything we build.  
            We continuously enhance our systems to protect user data and maintain trust.  
            If you identify a vulnerability, please report it responsibly — we’ll act swiftly to resolve it.
          </p>
        </section>

        {/* Reporting */}
        <section className="group hover:scale-[1.02] transition-transform duration-500 bg-gradient-to-br from-green-700 to-green-900 text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <InboxIcon className="h-8 w-8 mr-3 text-white" />
            Reporting a Vulnerability
          </h2>
          <p className="text-lg leading-relaxed">
            Please send your findings to{" "}
            <span className="font-semibold underline underline-offset-4 decoration-white">
              security@spark.com
            </span>{" "}
            with the following details:
          </p>
          <ul className="list-disc pl-8 mt-4 space-y-2 text-lg">
            <li>A clear and detailed description of the vulnerability.</li>
            <li>Steps to reproduce the issue.</li>
            <li>Observed impact or potential risk.</li>
            <li>Your preferred contact for follow-up communication.</li>
          </ul>
        </section>

        {/* Response Process */}
        <section className="group hover:scale-[1.02] transition-transform duration-500 bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            Our Response Process
          </h2>
          <ol className="list-decimal pl-8 space-y-3 text-lg text-gray-700">
            <li>We acknowledge your submission within 5 business days.</li>
            <li>Our security team investigates and verifies the issue.</li>
            <li>We provide continuous updates and recognize your contribution if desired.</li>
          </ol>
        </section>

        {/* Guidelines */}
        <section className="group hover:scale-[1.02] transition-transform duration-500 bg-gradient-to-br from-green-100 to-green-50 p-10 rounded-3xl shadow-md">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            Responsible Disclosure Guidelines
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To ensure the safety of our users and services, please:
          </p>
          <ul className="list-disc pl-8 mt-4 space-y-2 text-lg text-gray-700">
            <li>Avoid exploiting the issue beyond proof-of-concept.</li>
            <li>Do not access or modify data without authorization.</li>
            <li>Refrain from public disclosure until the issue is resolved.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CoordinatedDisclosurePolicy;