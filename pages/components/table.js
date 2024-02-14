// / pages/index.js
import React from 'react';
import styles from '../../styles/table.module.css';
const TablePage = () => {
  return (
    <div className={styles.table_container}>
      <table className={styles.custom_table}>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <td className={styles.td1 , styles.tdheading}>Features</td>
            <td className={styles.td , styles.tdheading2}>Description</td>
          </tr>
          <tr>
            <td className={styles.td1}>Weight</td>
            <td className={styles.td}>6 grams (0.2 oz)</td>
          </tr>
          <tr>
            <td className={styles.td1}>Dimensions</td>
            <td className={styles.td}>3.7 x 2.7 x 0.8 cm (1.5 x 1.1 x 0.3 inches)</td>
          </tr>
          <tr>
            <td className={styles.td1}>Accessories</td>
            <td className={styles.td}>2 adjustable straps for versatile attachment options, ensuring compatibility with all firearm types and sizes, and a dozen plastic pouches for use in pouring rain.</td>
          </tr>



          <tr>
            <td className={styles.td1}>Sensors</td>
            <td className={styles.td}>Equipped with 3 accelerometers and 3 gyroscopes by STMicroelectronics, Geneva, Switzerland.</td>
          </tr>



          <tr>
            <td className={styles.td1}>Connectivity</td>
            <td className={styles.td}>Advanced low-energy Bluetooth technology powered by Nordic Semiconductors, Trondheim, Norway.</td>
          </tr>




          <tr>
            <td className={styles.td1}>Durability</td>
            <td className={styles.td}>Constructed to withstand regular use in various shooting environments, ensuring longevity and reliability.</td>
          </tr>



          <tr>
            <td className={styles.td1}>Compatibility</td>
            <td className={styles.td}>Compatible with a wide range of firearms, including toy guns, BB guns, airsoft weapons, revolvers, pistols, rifles, and shotguns.</td>
          </tr>





          <tr>
            <td className={styles.td1}>Battery</td>
            <td className={styles.td}>Powered by a CR1632 button battery, offering 10-30 days of full capacity usage.</td>
          </tr>





          <tr>
            <td className={styles.td1}>Durability</td>
            <td className={styles.td}>Constructed to withstand regular use in various shooting environments, ensuring longevity and reliability.</td>
          </tr>
        </tbody>
      </table>
    
    </div>
  );
};
export default TablePage;









