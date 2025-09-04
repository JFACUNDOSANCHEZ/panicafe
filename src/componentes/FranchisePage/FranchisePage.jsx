import React from 'react';
import styles from './FranchisePage.module.css';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
import WhyInvest from '../WhyInvest/WhyInvest';
import FranchiseProcess from '../FranchiseProcess/FranchiseProcess';
import ContactForm from '../ContactForm/ContactForm';
import Nav from '../Nav/Nav';
import VideoSection from '../VideoSection/VideoSection';

const FranchisePage = () => {
  return (
    <>
    <div className={styles.franchisePage}>
      <FranchiseHeader />
      <br /><br /><b></b>
      <main>
<VideoSection></VideoSection>

        <section className={styles.section}>
          <FranchiseProcess />
        </section>
        <section className={styles.section}>
          <WhyInvest />
        </section>
        <section className={styles.contactSection}>
          <ContactForm />
        </section>
      </main>
    </div>
    </>
  );
};

export default FranchisePage;