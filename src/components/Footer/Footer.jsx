import { Link } from "@mui/material";
import { GITHUB_URL, LINKEDIN_URL } from "../../common/constants";
import "./footer.css";

export const Footer = () => (
  <footer>
    <Link
      href={LINKEDIN_URL}
      className="footer-link"
      variant="button"
      underline="none"
      target="_blank"
    >
      🧬GitHub
    </Link>
    <Link
      href={GITHUB_URL}
      className="footer-link"
      variant="button"
      underline="none"
      target="_blank"
    >
      📧Linkedin
    </Link>
  </footer>
);
