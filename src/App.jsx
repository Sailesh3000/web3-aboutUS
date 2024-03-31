import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HoverEffect } from "./components/ui/card-hover-effect";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { TracingBeam } from "./components/ui/tracing-beam";

function App() {
  const [count, setCount] = useState(0)

  const projects1 = [
    {
      title: "Keynotes",
      description:
        "The highlight of the summer camp will be a keynote speech by a visionary leader in the Web3 space. This presentation will not only inspire participants by showcasing the future possibilities of Web3 but also offer insights into the ongoing challenges, ethical considerations, and the roadmap ahead for truly decentralized digital ecosystems.",
    },
    {
      title: "Workshops",
      description:
      "The summer camp will feature a series of workshops conducted by experts in the field. These workshops will provide participants with hands-on experience in developing Web3 applications, understanding the underlying technologies, and exploring the potential use cases of decentralized applications.",
    },
    {
      title: "Panel Discussions",
      description:
        "Panel discussions will bring together industry experts, thought leaders, and academics to discuss the latest trends, challenges, and opportunities in the Web3 space. Participants will have the opportunity to engage with the panelists, ask questions, and gain valuable insights into the future of the decentralized web.",
    },
  ];
  const projects2 = [
    {
      description:
        "This workshop is meticulously designed for a diverse audience, including undergraduate and PhD students from IIIT Sri City, as well as students from external colleges, industry professionals, and scholars with a keen interest in the cutting-edge realm of Web3 and blockchain technologies.It aims to cater to researchers and developers who areeager to deepen their understanding and enhance theircapabilities in developing innovative Web3 and blockchainapplications.This workshop offers a comprehensive learning experience for students, professionals, and scholars interested in various aspects of decentralized technologies, covering foundational concepts to advanced application development.",
    },
  ];

  const projects3 = [
    {
      description:
        `<div>
        This program is designed to empower researchers and developers by providing them with the fundamental skills and knowledge required for the development of parallel computing applications.The workshop is structured to cover four key areas, ensuring participants gain a well-rounded expertise.<br>
        <ul class="list-disc text-left p-10">
        <li>Understand the Evolution of the Web from 1.0 to 3.0.</li>
        <li> Explore Real-world Applications and Case Studies of Web 3.0.</li>
        <li>Learn what is Blockchain?</li>
        <li> Gain In-depth Knowledge of Web 3.0 Technologies - Accessibility, User Experience, Ownership, and Infrastructure.</li>
        <li>Discuss Challenges and Future Trends in the Web 3.0 Landscape.</li>
        <li> Connect with Industry Experts and Peers for Networking and Collaboration.</li>
        </ul>
        </div>`,
    },
  ];

  return (
    <>
    <TracingBeam className="px-6">
    <h1 className='text-white'>About the Summer Camp</h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects1}/>
      </div>
      <h1 className='text-white'>Target Audience</h1>
      <div className="max-w-5xl mx-auto px-8 text-2xl">
        <HoverEffect items={projects2} />
      </div>
      <h1 className='text-white'>Outcomes</h1>
      <div className="max-w-5xl mx-auto px-8 text-2xl">
        <HoverEffect items={projects3} />
      </div>
      {/* <Keynotes /> */}
      </TracingBeam>
      </>
  );
}

export default App;
