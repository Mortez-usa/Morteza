import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR Purchase PRO version for commercial license.  */}
          <a
            href="https://www.mortezamaddahi.com"
            rel="noopener"
            target="_blank">
            MM
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/mortez-usa"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
