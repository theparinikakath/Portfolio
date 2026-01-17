import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© 2025 Made with ❤️ by Parinika Kath </p>

        <div className="d-flex justify-content-center gap-3 mt-3 fs-4">
          <a
            href="https://github.com/theparinikakath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/parinikakath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/theparinikakath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/theparinikakath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="https://www.instagram.com/theparinikakath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
