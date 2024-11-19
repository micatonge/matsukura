import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Matsukura Eyewear</title>
        <meta
          name="description"
          content="Get in touch with Matsukura Eyewear"
        />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Contact Us</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
