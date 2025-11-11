import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="padding-container max-container flex flex-col gap-8">
        {/* Logo */}
        <div className="flex justify-between items-center">
          
          {/* Social Links */}
          <div className="flex gap-4">
          
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <FooterColumn title="Resources">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </FooterColumn>
          <FooterColumn title="Contact">
            <p>Email: alexandru@techliberate.com</p>
            <p>Phone: (424) 378-9749</p>
          </FooterColumn>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AlexandruCojescu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="flex flex-col gap-2 text-gray-300">{children}</div>
    </div>
  );
};

export default Footer;
