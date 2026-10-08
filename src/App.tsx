import Header from './components/Header';
import Profilecard from './components/Profilecard'
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <>
      <Header name="Batyr" role="Web Developer" />
      <main>
        <Profilecard 
          name="Batyr" 
          bio="Hello! I'm Batyr, I want to create amazing web experiences. I already have experience in Python, C++, AWS. Now I'm learning Golang, Web Development and Ethical Hacking."
          email="batyr@example.com" 
          github="https://github.com/btanat" />
      </main>
      <Footer text="Batyr. All rights reserved." />
    </>
  );
}

export default App;