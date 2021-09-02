import TextPrimary from "../text/TextPrimary"
import TextSecondary from "../text/TextSecondary"

const Footer: React.FC = props => {
    return (
        <footer>
            <div className="container"> 
                <div className="footer-items"> 
                    <div className="footer-item footer-email">
                        <TextPrimary color="blue">Contact me</TextPrimary>
                        <hr className="line-separator"/>
                        <TextSecondary color="dark">alaric.bell@gmail.com</TextSecondary>
                        <TextSecondary color="semi-dark">Feel free to reach out to me, I prefer communication via email since we might be a few time zones away</TextSecondary>
                    </div>

                    <div className="footer-item">
                        <TextPrimary color="blue">Availability</TextPrimary>
                        <hr className="line-separator"/>
                        <TextSecondary color="semi-dark">I&apos;m always working on something but I gladly discuss new opportunities</TextSecondary>
                    </div>

                    <div className="footer-item">
                        <TextPrimary color="blue">Follow me</TextPrimary>
                        <hr className="line-separator"/>
                        <ul>
                            <li><a rel="noreferrer" href="https://www.upwork.com/freelancers/~01214b59aff89c6e02" target="_blank"><TextSecondary color="semi-dark">Upwork</TextSecondary></a></li>
                            <li><a rel="noreferrer" href="https://www.linkedin.com/in/d%C3%A1vid-moln%C3%A1r-a4b8b01a0/" target="_blank"><TextSecondary color="semi-dark">LinkedIn</TextSecondary></a></li>
                            <li><a rel="noreferrer" href="https://github.com/AlaricBell" target="_blank"><TextSecondary color="semi-dark">Github</TextSecondary></a></li>
                            <li><a rel="noreferrer" href="https://twitter.com/AlaricBell" target="_blank"><TextSecondary color="semi-dark">Twitter</TextSecondary></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-items"> 
                    <p className="copy">&copy; 2021 Molnár Dávid. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;