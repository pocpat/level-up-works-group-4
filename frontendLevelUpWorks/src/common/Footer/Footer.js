import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.mainFooter}>
            <div className={styles.footerContainer}>
                <div className={styles.footerRow}>
                {/* Column1 */}
                    <div className={styles.footerColumn}>
                        <h4>COMPANY</h4>
                        <ul className={styles.listUnstyled}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                {/* Column2 */}
                <div className={styles.footerColumn}>
                        <h4>COURSES</h4>
                        <ul className={styles.listUnstyled}>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Teachers</a></li>
                            <li><a href="#">Parents</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>

                {/* Column3 */}
                <div className={styles.footerColumn}>
                        <h4>SUPPORT</h4>
                        <ul className={styles.listUnstyled}>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Helpdesk</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                {/* Column4 */}
                <div className={styles.footerColumn}>
                        <h4>LEGAL</h4>
                        <ul className={styles.listUnstyled}>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                {/* Column5 */}
                <div className={styles.footerColumn}>
                        <h4>LevelUp Works</h4>
                        <h5>LevelUp Works is an Auckland-based<br/>
                        enterprise dedicated to developing game-<br/>
                        based learning software to help teachers in<br/>
                        response to the New Zealand Digital<br/>
                        Technologies & Hangarau Matihiko.<br/>
                        <a className={styles.contactEmail} href="#">alan@levelupworks.com</a><br/>
                        (021)668 185</h5>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;