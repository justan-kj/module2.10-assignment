import styles from './ViewList.module.css'
import { useState } from 'react';


function Viewlist({ list, total }) {


    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>

                    {list.map((item, i) => [
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.discount}%</td>
                            <td>${item.subtotal.toFixed(2)}</td>
                        </tr>
                    ])}

                </tbody>
                <tfoot className={styles.footer} >
                    <tr className={styles.totals}>
                        <td className={styles.subtotal}>Subtotal: ${total[0].toFixed(2)}</td>
                    </tr>
                    <tr className={styles.totals}>
                        <td className={styles.discount}>Discount: ${total[1].toFixed(2)}</td>
                    </tr>
                    <tr className={styles.totals}>
                        <td className={styles.total}>Grand Total: ${total[2].toFixed(2)}</td>
                    </tr>

                </tfoot>
            </table>

        </div>
    )
}

export default Viewlist;