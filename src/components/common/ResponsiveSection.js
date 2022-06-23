import React from 'react';
import styles from '../../styled/section.module.css'
import StatisticsSection from '../statisticsSection/StatisticsSection';

const ResponsiveSection = () => {
    return (
        <div className={styles._ResponsiveSection}>
            <StatisticsSection/>
        </div>
    );
};

export default ResponsiveSection;