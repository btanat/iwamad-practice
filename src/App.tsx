import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './style.css';
import type { Skill } from './types';

const skills: Skill[] = [
    { id: 1, label: 'Python' },
    { id: 2, label: 'C++' },
    { id: 3, label: 'AWS' },
];

function App() {
  return (
    <>
      <Header name="Batyr" role="Web Developer" />
      <main>
        <ProfileCard
          name="Batyr"
          bio="Hello! I'm Batyr, I want to create amazing web experiences. I already have experience in Python, C++, AWS. Now I'm learning Golang, Web Development and Ethical Hacking."
          email="batyrtangat@gmail.com"
          github="https://github.com/btanat"
          skills={skills}
        />
      </main>
      <Footer text="Batyr. All rights reserved." />
    </>
  );
}

export default App;