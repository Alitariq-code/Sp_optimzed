
import React from 'react';
import styles from '../../styles/table2.module.css';
const TablePage = () => {
  return (
    <div className={styles.table_container}>
      <table className={styles.custom_table}>
        <tbody>
          <tr className={styles.tr, styles.tr_heading}>
            <td className={styles.td1, styles.td_heading}>Member</td>
            <td className={styles.td, styles.td_heading2}>Location</td>
            <td className={styles.td2, styles.td_heading1}>Split Time</td>
          </tr>
          <tr>
            <td className={styles.td1}>Benjamin</td>
            <td className={styles.td}>Montana</td>
            <td className={styles.td2}>4.65 s</td>
          </tr>
          <tr>
            <td className={styles.td1}>Thomas</td>
            <td className={styles.td}>London</td>
            <td className={styles.td2}>4.72 s</td>
          </tr>
          <tr>
            <td className={styles.td1}>Abasi</td>
            <td className={styles.td}>Cairo</td>
            <td className={styles.td2}>4.82 s</td>
          </tr>



          <tr>
            <td className={styles.td1}>Lubanzi</td>
            <td className={styles.td}>Johannesburg</td>
            <td className={styles.td2}>4.95 s</td>
          </tr>



          <tr>
            <td className={styles.td1}>Karl</td>
            <td className={styles.td}>Berlin</td>
            <td className={styles.td2}>4.95 s</td>
          </tr>




          <tr>
            <td className={styles.td1}>John</td>
            <td className={styles.td}>Florida</td>
            <td className={styles.td2}>5.00 s</td>
          </tr>



          <tr>
            <td className={styles.td1}>Jorge</td>
            <td className={styles.td}>Mexico City</td>
            <td className={styles.td2}>5.01 s</td>
          </tr>





          <tr>
            <td className={styles.td1}>Pedro</td>
            <td className={styles.td}>San Paulo</td>
            <td className={styles.td2}>5.02 s</td>
          </tr>





          <tr>
            <td className={styles.td1}>Haruto</td>
            <td className={styles.td}>Tokyo</td>
            <td className={styles.td2}>5.03 s</td>
          </tr>



          <tr>
            <td className={styles.td1}>Chen</td>
            <td className={styles.td}>Singapore</td>
            <td className={styles.td2}>5.15 s</td>
          </tr>
        </tbody>
      </table>
    
    </div>
  );
};
export default TablePage;









