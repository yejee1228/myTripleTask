import React from 'react';
import styles from '../styled/section.module.css';
import ResponsiveSection from './common/ResponsiveSection';

const SectionContainer = () => {
    return (
        <div className={styles._SectionContainer}> 
            <ResponsiveSection/>
        </div>
    );
};

export default SectionContainer;