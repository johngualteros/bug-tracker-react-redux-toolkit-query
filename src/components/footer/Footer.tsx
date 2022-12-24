import style from "./Footer.module.css";

import { BsFacebook as IconFacebook, BsInstagram as IconInstagram, BsTwitter as IconTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<footer>
			<div className={style.container}>
				<div className={style.logo}>Jbugs</div>
				<div className={style.links}>
					<h4>PRODUCTS</h4>
					<p>Jira Software</p>
					<p>Jira Align</p>
					<p>Jira Service Management</p>
					<p>Confluence</p>
					<p>Trello</p>
					<p>Bitbucket</p>
				</div>
				<div className={style.links}>
					<h4>RESOURCES</h4>
					<p>Technical Support</p>
					<p>Purchasing & licensing</p>
					<p>Atlassian Community</p>
					<p>Knowledge base</p>
					<p>Marketplace</p>
					<p>My Account</p>
				</div>
				<div className={style.links}>
					<h4>EXPAND & LEARN</h4>
					<p>Partners</p>
					<p>Training & Certification</p>
					<p>Documentation</p>
					<p>Developer Resources</p>
					<p>Enterprise services</p>
				</div>
				<div className={style.links}>
					<h4>ABOUT JBUGS</h4>
					<p>Company</p>
					<p>Careers</p>
					<p>Events</p>
					<p>Blogs</p>
					<p>Investor Relations</p>
					Trust & Security
				</div>
			</div>
			<div className={style.networks}>
                <div className={style.info}>
                    <p>© 2022 JBugs</p>
                </div>

                <div className={style.social}>
                    <IconFacebook size={25}/>
                    <IconInstagram size={25}/>
                    <IconTwitter size={25}/>
                </div>
            </div>
		</footer>
	);
};

export default Footer;
