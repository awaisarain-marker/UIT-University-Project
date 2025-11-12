
import PageBanner from '@/components/ui/page-banner'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge'
import ImageCarouselWithLightbox from '@/components/merl/ImageCarouselWithLightbox'
import EventsWithLightbox from '@/components/merl/EventsWithLightbox'
import ResearchProjectsWithLightbox from '@/components/merl/ResearchProjectsWithLightbox'
import {
    Users,
    Award,
    BookOpen,
    Target,
    Lightbulb,
    TrendingUp,
    Globe,
    CheckCircle,
    ArrowRight,
    Phone,
    Mail,
    MapPin
} from 'lucide-react'

export default function MERLPage() {
    return (
        <div className="min-h-screen bg-background">

            {/* Page Banner */}
            <PageBanner
                title="Micro Electronics Research Lab (MERL)"
                subtitle=""
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "MERL" }
                ]}
                backgroundImage="/images/bg-1-1.jpg"
            />

            {/* Come Join Our Chip */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">Come Join Our Chip X Ai Course Followed By Training At Our Merl Lab.</h2>
                            <p className="space-y-6 text-lg text-muted-foreground">
                                MERL-UITU is the member of international foundations like RISC-V Foundation, OSFPGA Foundation, Chips Alliances, Linux Foundation, Google Summer of Code and Edge Impulse training program.

                                We have a working relationship with PLCT lab in China, UCROSS – USA,  TSMC ( as collaboration for PDK access), ARM Developer program, FOSSI Foundation, Cadence (EDA tool provider), Efabless and Skywater technologies.
                            </p>
                            <div className="flex items-center gap-4 mt-8">
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Register Now for MERL Chip Design <ArrowUpRight className="w-4 h-4 ml-2" />
                                </Button>
                                <div className="text-center">
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Visit MERL <ArrowUpRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Placeholder for MERL about image */}
                            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl h-96 flex items-center justify-center">
                                <div className="text-center text-muted-foreground">
                                    <BookOpen className="w-24 h-24 mx-auto mb-4" />
                                    <p className="text-lg">MERL Research Facility</p>
                                    <p className="text-sm">Image Placeholder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="bg-gray-50 text-gray-800 py-20 px-6 md:px-16 lg:px-32 font-inter">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-11">
                        <h2 className="heading-large font-semibold text-gray-900">
                            Introduction
                        </h2>
                        <div className="mt-4">
                            <h3 className="text-4xl font-semibold">Welcome!</h3>
                            <p className="text-lg leading-relaxed text-gray-700">
                                MERL-UITU stands at the forefront of chip design education, fostering a dynamicf environment where innovation converges with academic excellence. Recognizing the transformative power of chip technology, we have partnered with UIT to empower the next generation of engineers.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Following the ssssgroundbreaking memorandum of understanding signed in December 2018, MERL-UITU has become a pioneer in open-source chip design education across Pakistan. This initiative extends to undergraduate students, providing them with a pathway to success in this ever-evolving field.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Our globally recognized curriculum, meticulously crafted by renowned academic leaders, leverages best-in-class resources. This ensures students acquire the most cutting-edge chip design techniques, equipping them with the skills to become future leaders in the industry.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                More than just education, MERL-UITU offers an enriching journey of discovery and innovation. Here, you’ll unlock the limitless possibilities of chip design and become a key player in shaping the future of technology.
                            </p>
                        </div>
                    </div>

                    {/* Content left Image right */}
                    <div className="bg-white shadow-lg rounded-2xl p-10 border-t-4 border-blue-600 mb-6 flex flex-col gap-[20px] md:flex-row md:gap-[45px]">
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="text-4xl font-outfit font-semibold text-gray-900 mb-4">
                                Background
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                There is an ongoing revolution in designing Computer Chips utilizing open source RISC-V ISA and EDA tools, which continues to gain momentum. UIT MERL recognized this early on and encashed on this initiative by signing an MOU in December 2018 with Adinwest, Arizona, to teach open source Chip Designing to students in Pakistan including undergraduates. There is a huge market for this, which is expected to grow to $ one trillion by 2030.
                            </p>
                        </div>

                        <div className="w-full">
                            <img className="object-cover w-full h-[220px] md:h-[300px] rounded-2xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="" />
                        </div>
                    </div>

                    {/* Content right Image left */}
                    <div className="bg-white shadow-lg rounded-2xl p-10 border-t-4 border-blue-600 mb-6 flex flex-col gap-[20px] md:flex-row md:gap-[45px]">
                        <div className="w-full">
                            <img className="object-cover w-full h-[220px] md:h-[300px] rounded-2xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="" />
                        </div>

                        <div className="flex flex-col justify-center w-full">
                            <h2 className="text-4xl font-outfit font-semibold text-gray-900 mb-4">
                                What We Offer
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Globally accepted proven pathways for learning Chip Design for Pakistan’s students, both from Electrical Engineering and Computer Science programs.
                            </p>
                        </div>
                    </div>

                    {/* Content left Image right */}
                    <div className="bg-white shadow-lg rounded-2xl p-10 border-t-4 border-blue-600 mb-6 flex flex-col gap-[20px] md:flex-row md:gap-[45px]">
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="text-4xl font-outfit font-semibold text-gray-900 mb-4">
                                Open-Source Education
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                At UIT University’s Micro Electronics Research Lab (MERL), we are dedicated to developing coursework that equips students with the skills needed to thrive in large open-source software communities. Our summer program offers intensive courses where students gain hands-on experience and benefit from exceptional mentorship opportunities provided by both academic experts and industry leaders. These experiences often lead our students to become prominent open-source contributors. In addition, MERL organizes guest lectures on open-source topics and hosts an annual workshop series dedicated to open-source software.
                            </p>
                        </div>

                        <div className="w-full">
                            <img className="object-cover w-full h-[220px] md:h-[300px] rounded-2xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="" />
                        </div>
                    </div>

                    {/* Content right Image left */}
                    <div className="bg-white shadow-lg rounded-2xl p-10 border-t-4 border-blue-600 mb-6 flex flex-col gap-[20px] md:flex-row md:gap-[45px]">
                        <div className="w-full">
                            <img className="object-cover w-full h-[220px] md:h-[300px] rounded-2xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="" />
                        </div>

                        <div className="flex flex-col justify-center w-full">
                            <h2 className="text-4xl font-outfit font-semibold text-gray-900 mb-4">
                                Our Strength
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-70 mb-3">
                                Our academic leadership has created a system, which leverages best in class sources for learning state of the art Chip Designing techniques.  Our track record of imparting Chip Designing has been Steller and globally lauded.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-70">
                                Our team has worked with licensed Cadence software and open source tools and have the ability to effectively utilize these tools.
                            </p>
                        </div>
                    </div>

                    {/* Full Content */}
                    <div className="bg-white shadow-lg rounded-2xl p-10 border-t-4 border-blue-600 mb-6 flex flex-col gap-[20px] md:flex-row md:gap-[45px]">
                        <div className="w-full">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                                Achievements
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-70 mb-3">
                                MERL-UITU is the only Organization from Pakistan, which is hosting Google Summer of Code and Linux Foundation Mentorship program (LFX). Our mentors have successfully mentored mentees from Egypt, India, USA and Pakistan voluntarily.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-70 mb-3">
                                The first completely open-source Microprocessor Chips taped out from Pakistan called “Ibtida”  and “Ghazi” were made by UITU MERL students in 2021 and the inauguration ceremony was held on March 5, 2022, which was attended by the President of Pakistan, Mr. Arif Alvi. These chips were funded by Google.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-70 mb-3">
                                Since then our students have done 9 Tape Outs, all were designed by our undergraduate students.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-70 mb-3">
                                Around 30 global scholarships have been awarded to the undergraduate students of UITU MERL by Google Summer of Code and Linux Foundation. These student were paid $ 3,000  and $ 1,500 per scholarship for contributing to the international projects of different open-source organizations worldwide.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-70">
                                Some of our students are doing freelance online jobs earning $30 per hour.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Enroll In Summer MERL */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Enroll in our summer chip design fundamentals course and Merl Lab training.</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            MERL-UITU collaborates with leading organizations like RISC-V Foundation and TSMC. We offer students opportunities through programs like Google Summer of Code, fostering innovation in technology.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">
                        {/* Right (Image) — shows on top in mobile */}
                        <div className="order-1 lg:order-2 w-full lg:w-1/2 relative">
                            {/* Image Carousel Goes here */}
                            <ImageCarouselWithLightbox
                                images={[
                                    '/images/GSOC1.jpg',
                                    '/images/GSOC2.jpg',
                                    '/images/GSOC3.jpg',
                                    '/images/GSOC4.jpg',
                                    '/images/GSOC5.jpg',
                                    '/images/GSOC6.jpg',
                                    '/images/GSOC7.jpg',
                                    '/images/GSOC8.jpg',
                                    '/images/GSOC22_1.png',
                                    '/images/GSOC22_2.png',
                                    '/images/GSOC22_3.png',
                                    '/images/GSOC22_4.png',
                                    '/images/GSOC22_5.png',
                                    '/images/achiev-2.png',
                                ]}
                                altPrefix="Google Summer of Code Achievement"
                            />
                        </div>

                        {/* Left (Content) */}
                        <div className="order-2 lg:order-1 w-full lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Pakistan’s Only Organization Selected as a Mentor Organization in Google Summer of Code
                            </h2>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                We're thrilled to announce that four outstanding undergraduate students from the Micro Electronics Research Lab (MERL) at UIT University have been selected for the prestigious Google Summer of Code (GSoC) 2024, 2023 and 2022! A huge congratulations to Muddassir Ali, Syed Hassan Ul Haq, Hamna Mohiuddin, and Muhammad Latif for their remarkable achievement. GSoC is a highly competitive global program that offers students the opportunity to contribute to open-source projects under the guidance of top developers, and being selected is a testament to the talent and hard work of these exceptional students.
                            </p>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                This achievement is not only a personal milestone for Muddassir, Syed, Hamna, and Muhammad, but also a significant accomplishment for MERL. The lab has always been committed to nurturing the brightest minds in Pakistan, offering students cutting-edge research opportunities and hands-on experience in microelectronics and related fields. MERL’s ongoing mission to promote technological innovation and develop homegrown talent continues to bear fruit as these students prepare to represent both UIT University and Pakistan on a global stage. Their participation in GSoC underscores the increasing visibility of Pakistani talent in international technology arenas.
                            </p>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                The Google Summer of Code program provides an incredible platform for students to work on real-world open-source projects, collaborate with experienced mentors, and make meaningful contributions to the tech community. Muddassir, Syed, Hamna, Muhammad, Abdul, Qurrat ul Ain, Mahnoor, Shahzaib, Miss Rameen Anwar, Kinza Qamar Zaman, Nameer Iqbal Ansari, Nimra Khan, and Talha Ahmed. will now have the chance to hone their skills, expand their professional networks, and engage with developers from across the globe. Their involvement in this prestigious initiative not only enriches their academic and professional experiences but also positions them as future leaders in technology, driving innovation and change.
                            </p>
                            <p className="text-gray-600 leading-relaxed ma-small-text">
                                As these four brilliant individuals embark on their GSoC journey, we wish them the best of luck. We are confident that they will make valuable contributions to their respective projects and continue to make both MERL and Pakistan proud. Their success is a source of inspiration for the entire student body, reminding us all of the incredible potential within our community.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Right (Image) — shows on top in mobile */}
                        <div className="order-1 lg:order-2 w-full lg:w-1/2 relative">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                MERL-UITU’s Team Lead Dr. Ali Ahmed invited to Pakistan Semiconductor Summit
                            </h2>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                Dr. Ali Ahmed, Team Lead of MERL, recently attended the Pakistan Semiconductor Summit, sponsored by GSME. During the summit, he participated in a panel discussion focused on building the talent pool within the semiconductor industry. Dr. Ahmed shared insights from his experience at the Micro Electronics Research Lab (MERL) at UIT University in Karachi.
                            </p>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                He highlighted the success of Xcelerium, led by Raheel Khan, and DreamBig Semiconductor Inc., led by Sohail Syed, both based in Karachi and with strong ties to MERL alumni. Dr. Ahmed acknowledged the contributions of Dr. Arsalan from Habib University. He also recognized Dr. Syed Roomi Naqvi, Director of MERL, and Engr Farhan Ahmed Karim for their leadership and teamwork.
                            </p>
                            <p className="text-gray-600 leading-relaxed ma-small-text">
                                Dr. Ahmed emphasized the global impact of MERL graduates, who are employed at companies like Imagination Technologies, onsemi, and Semidynamics, and at research institutions such as the Barcelona Supercomputing Center. He noted that several alumni are pursuing fully funded PhDs. Furthermore, MERL students have secured 24 international scholarships, including Google Summer of Code and The Linux Foundation mentorship programs. MERL has also hosted these programs for the past three years. Dr. Ahmed expressed gratitude to the semiconductor community in Pakistan.
                            </p>

                        </div>

                        {/* Left (Content) */}
                        <div className="order-2 lg:order-1 w-full lg:w-1/2">
                            <img className="object-cover w-full rounded-2xl" src="/images/achiev-2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Merl Alumni Success */}
            <section className="py-20 bg-gray-50 text-gray-800 px-6 md:px-16 lg:px-32">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Merl Alumni Success</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">
                        {/* Right (Image) — shows on top in mobile */}
                        <div className="order-1 lg:order-2 w-full lg:w-1/2 relative">
                            {/* Image Carousel Goes here */}
                            <ImageCarouselWithLightbox
                                images={[
                                    '/images/Merl-Achievements_pages-to-jpg-0003-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0004-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0005-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0006-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0007-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0008-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0009-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0010-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0010-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0011-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0012-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0013-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0014-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0015-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0016-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0017-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0018-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0019-1-scaled.jpg',
                                ]}
                                altPrefix="Google Summer of Code Achievement"
                            />
                        </div>

                        {/* Left (Content) */}
                        <div className="order-2 lg:order-1 w-full lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Job Opportunities Secured By MERL UIT Students
                            </h2>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                At MERL-UITU, we pride ourselves on fostering an environment that equips graduates to excel in both local and international arenas. Our alumni’s success is a testament to the robust academic foundation and hands-on experience they gain here, positioning them to secure coveted roles in prestigious organizations. Internationally, our graduates are at the forefront of technological innovation, working with industry giants such as Imagination Technologies, onsemi, Semidynamics, Intensivate, and the Barcelona Supercomputing Center. These institutions recognize the talent and expertise nurtured at MERL-UITU, and our alumni continue to push boundaries, contributing to groundbreaking developments in fields like semiconductor design, high-performance computing, and next-generation technologies.
                            </p>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                Closer to home, MERL-UITU graduates are not just finding employment—they are leading innovation. At Xcelerium and DreamBig Semiconductor Inc., both based at NED University, our alumni are shaping the future of Pakistan's tech landscape. These companies are driving advancements in semiconductor technology and are pivotal players in the nation’s rapidly growing tech sector. The success of our graduates, both locally and globally, reflects the strength of MERL-UITU’s curriculum and the strong ties we maintain with industry leaders. With every new achievement, our alumni continue to solidify MERL-UITU’s reputation as a hub for technological excellence and innovation, opening doors for future generations of graduates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Scholarship</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Meet our distinguished researchers and faculty members driving innovation in management and economics.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">
                        <div className="order-1 lg:order-2 w-full lg:w-1/2 relative">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Fully-Funded International Masters & PhD Scholarships
                            </h2>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                At MERL-UITU, our students continue to set remarkable standards of academic excellence, securing fully funded international scholarships for prestigious master's and PhD programs. These scholarships are a testament to their hard work, dedication, and the comprehensive education they receive at UITU. Our students have earned places at some of the world’s most renowned institutions, including the University of California, Santa Cruz, the University of Arkansas, and Sungkyunkwan University. These fully funded scholarships not only highlight their academic prowess but also open doors for them to contribute to groundbreaking research and global knowledge exchange.
                            </p>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                We take immense pride in the success stories of our graduates as they transition from MERL-UITU to influential roles within the international academic and research community. Their achievements reflect the strength of our programs and the supportive environment we cultivate for academic exploration and innovation. As they embark on these exciting opportunities, they carry the MERL-UITU legacy with them, contributing to global research initiatives and making meaningful impacts in their fields. Their success further cements our reputation as a leading institution in fostering academic talent and producing world-class researchers.
                            </p>
                        </div>

                        {/* Left (Content) */}
                        <div className="order-2 lg:order-1 w-full lg:w-1/2">
                            {/* Image Carousel Goes here */}
                            <ImageCarouselWithLightbox
                                images={[
                                    '/images/Merl-Achievements_pages-to-jpg-0014-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0021-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0022-1-scaled.jpg',
                                    '/images/Merl-Achievements_pages-to-jpg-0015-1-scaled.jpg',
                                ]}
                                altPrefix="Google Summer of Code Achievement"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentorships */}
            <section className="py-20 bg-gray-50 text-gray-800 px-6 md:px-16 lg:px-32">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Mentorships</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">
                        {/* Right (Image) — shows on top in mobile */}
                        <div className="order-1 lg:order-2 w-[30%] relative">
                            {/* Image Carousel Goes here */}
                            <ImageCarouselWithLightbox
                                images={[
                                    '/images/GSOC1.jpg',
                                    '/images/GSOC2.jpg',
                                    '/images/GSOC3.jpg',
                                    '/images/GSOC4.jpg',
                                    '/images/GSOC5.jpg',
                                    '/images/GSOC6.jpg',
                                    '/images/GSOC7.jpg',
                                    '/images/GSOC8.jpg',
                                    '/images/GSOC22_1.png',
                                    '/images/GSOC22_2.png',
                                    '/images/GSOC22_3.png',
                                    '/images/GSOC22_4.png',
                                    '/images/GSOC22_5.png',
                                    '/images/achiev-2.png',
                                ]}
                                altPrefix="Google Summer of Code Achievement"
                            />
                        </div>

                        {/* Left (Content) */}
                        <div className="order-2 lg:order-1 w-[70%]">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Google Summer of Code Contributors
                            </h2>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-3">
                                Dr. Ali Ahmed, MERL-UITU's team lead, recently participated in the Pakistan Semiconductor Summit in Islamabad, sponsored by GSME. He contributed to the panel discussion on "Building the Talent Pool," highlighting MERL-UITU's success in Karachi. Our graduates are making significant contributions at leading companies like Xcelerium and DreamBig Semiconductor Inc., based at NED University.</p>
                            <p className="ma-small-text text-gray-600 leading-relaxed mb-6">
                                Dr. Ahmed acknowledged the leadership of Dr. Syed Roomi Naqvi and the teamwork of Dr. Farhan Ahmed Karim. Our graduates have secured prestigious positions internationally and are pursuing fully funded PhDs at top universities. This success underscores our commitment to nurturing future leaders in the semiconductor industry.
                            </p>
                            <div className="bg-white shadow-lg rounded-2xl p-10 border-t-4 border-blue-600 flex flex-col gap-[20px] md:flex-row md:gap-[45px]">
                                <div className="flex flex-col justify-center w-full">
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                        LFX Mentorship Contributors
                                    </h2>
                                    <p className="ma-small-text leading-relaxed text-gray-700">
                                        Several outstanding students have recently secured mentorship opportunities through the esteemed LFX Mentorships program. This remarkable achievement underscores the commitment to providing unparalleled opportunities for students’ growth and development. The LFX Mentorships program offers invaluable guidance and support from industry experts, empowering students to further hone their skills and expertise in their respective research field.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <EventsWithLightbox
                events={[
                    {
                        image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_compressed_page-0036-scaled.jpg',
                        title: 'MERL Training Session 1',
                        description: 'Celebrating achievements and introducing cutting-edge technologies to our students'
                    },
                    {
                        image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0039-scaled.jpg',
                        title: 'MERL Training Session 2',
                        description: 'Celebrating achievements and introducing cutting-edge technologies to our students'
                    },
                    {
                        image: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0042-scaled.jpg',
                        title: 'MERL Training Session 3',
                        description: 'Celebrating achievements and introducing cutting-edge technologies to our students'
                    }
                ]}
            />

            {/* Tapeouts Section */}
            <section id="tapeouts" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Tapeouts</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700">
                                MERL-UITU proudly celebrates the groundbreaking accomplishments of its students, who have achieved a series of remarkable tapeouts, solidifying their place at the forefront of technological innovation in Pakistan.
                            </p>
                            <p className="text-gray-700">
                                Among these achievements is the development of the country's first Verilog-based microprocessor, a significant milestone in the nation's technological history. Additionally, our students have designed and fabricated an innovative System on a Chip (SoC) for the Google-sponsored Open MPW shuttles.
                            </p>
                            <p className="text-gray-700">
                                Our students' success extends beyond these singular projects, with other groundbreaking tapeouts including the CHISEL-based "Ibtida" chip, the Azadi SoC, and the SoC-Now, all of which showcase their ingenuity and technical prowess.
                            </p>
                        </div>

                        {/* Right - Tapeout Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* SoC-Now Card */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 text-center">
                                <img
                                    alt="SoC-Now"
                                    className="w-full h-32 object-contain mb-3"
                                    src="https://uitu.edu.pk/wp-content/uploads/2024/09/socnow_v2Ok24D.png"
                                />
                                <h3 className="font-semibold text-gray-900">SoC-Now</h3>
                            </div>

                            {/* Ibtida SoC Card */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 text-center">
                                <img
                                    alt="Ibtida SoC"
                                    className="w-full h-32 object-contain mb-3"
                                    src="https://uitu.edu.pk/wp-content/uploads/2024/09/ibtida-soc.png"
                                />
                                <h3 className="font-semibold text-gray-900">Ibtida SoC</h3>
                            </div>

                            {/* Azadi SoC Card */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 text-center">
                                <img
                                    alt="Azadi SoC"
                                    className="w-full h-32 object-contain mb-3"
                                    src="https://uitu.edu.pk/wp-content/uploads/2024/09/slot-019_caravel_azadi_soc.png"
                                />
                                <h3 className="font-semibold text-gray-900">Azadi SoC</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Projects Section */}
            <ResearchProjectsWithLightbox
                images={[
                    {
                        type: 'image',
                        src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_compressed_page-0050-scaled.jpg',
                        title: 'Research Publication 1',
                        description: 'International conference presentation by MERL graduates'
                    },
                    {
                        type: 'image',
                        src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0051-scaled.jpg',
                        title: 'Research Publication 2',
                        description: 'International conference presentation by MERL graduates'
                    },
                    {
                        type: 'image',
                        src: 'https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0052-scaled.jpg',
                        title: 'Research Publication 3',
                        description: 'International conference presentation by MERL graduates'
                    }
                ]}
                videos={[
                    {
                        type: 'video',
                        src: 'https://youtube.com/embed/HRdw202Fneg',
                        title: 'Research Presentation 1',
                        description: 'Video presentation of research work by MERL graduates'
                    },
                    {
                        type: 'video',
                        src: 'https://youtube.com/embed/O_negvK1OkE',
                        title: 'Research Presentation 2',
                        description: 'Video presentation of research work by MERL graduates'
                    },
                    {
                        type: 'video',
                        src: 'https://youtube.com/embed/XH2x8uYLIAU',
                        title: 'Research Presentation 3',
                        description: 'Video presentation of research work by MERL graduates'
                    }
                ]}
            />
        </div>
    )
}