export default function Footer() {
  return (
    <footer className="bg-[#050a12] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* UIT University */}
          <div>
            <h4 className="mb-4">UIT University</h4>
            <p className="text-white/60 text-sm">
              The UITU Campus is ideally located on the main university road in Karachi, easily accessible by all major modes of transportation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fee Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fee Structure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How to Apply</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-4">Information</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Short Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vice Chancellor&apos;s Message</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vision & Mission</a></li>
            </ul>
          </div>

          {/* Undergraduate Programs */}
          <div>
            <h4 className="mb-4">Undergraduate Programs</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">BE Electrical (Electronic)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BE Electrical (Power)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BE Electrical (Telecommunication)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BE Computer Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bachelor of Engr. Tech (Computer)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bachelor of Engr. Tech (Electronic)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bachelor of Engr. Tech (Software)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BS Computer Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BS Software Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BBA (Business Administration)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BS Accounting and Finance</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="mb-4">Contact Us</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white/60 text-sm">
            <div>
              <div className="text-white/80 mb-1">Address:</div>
              <div>ST-13, Block 7, Gulshan-e-Iqbal, Abul Hasan Isphahani Road, Off Main University Road, Karachi - 75300</div>
            </div>
            <div>
              <div className="text-white/80 mb-1">Email:</div>
              <a href="mailto:info@uitu.edu.pk" className="hover:text-white transition-colors">info@uitu.edu.pk</a>
            </div>
            <div>
              <div className="text-white/80 mb-1">UAN:</div>
              <div>(021) 111-978-276, 34994305, 34978274-5</div>
            </div>
            <div>
              <div className="text-white/80 mb-1">Admission:</div>
              <a href="tel:03330399113" className="hover:text-white transition-colors">0333-0399113</a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div>© 2025 UIT University. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
