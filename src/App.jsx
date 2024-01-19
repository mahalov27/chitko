import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import WhatWhy from "./components/WhatWhy/WhatWhy";
import MainIdea from "./components/MainIdea/MainIdea";
import ForCoach from "./components/ForCoach/ForCoach";
import Form from "./components/Form/Form";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutUs />
      <WhatWhy />
      <MainIdea />
      <ForCoach />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
