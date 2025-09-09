import React from 'react';
import styles from './FranchisePage.module.css';
import FranchiseHeader from '../FranchiseHeader/FranchiseHeader';
import WhyInvest from '../WhyInvest/WhyInvest';
import FranchiseProcess from '../FranchiseProcess/FranchiseProcess';
import ContactForm from '../ContactForm/ContactForm';
import Nav from '../Nav/Nav';
import VideoSection from '../VideoSection/VideoSection';
import LocationsMap from '../LocationsMap/LocationsMap';

const FranchisePage = () => {
  return (
    <>
    <div className={styles.franchisePage}>
      <FranchiseHeader />
      <br /><br /><b></b>
      <main>
        <LocationsMap></LocationsMap>

      </main>
    </div>
    </>
  );
};

export default FranchisePage;