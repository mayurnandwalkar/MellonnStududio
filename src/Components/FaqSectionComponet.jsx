import React, { useState } from 'react';

const FaqSectionComponent = () => {
    const sections = [
        {
            title: "What makes Melonn different from other leading UI UX design agencies?",
            content: (
                <>
                    At Melonn, we've carved a unique niche in the UI UX domain, setting ourselves apart with a combination of creativity, client-centric approach, and strategic insight. Our reputation is built on consistently delivering standout UI UX, branding, product design, and web design that not only looks great but also drives brand growth. For every project we undertake, a dedicated team leader ensures that our solutions are tailored and resonate with the target audience. Our in-house experts bring their diverse skills to the table, guaranteeing designs that captivate and foster lasting relationships. Dive deeper into our offerings and discover the Melonn difference.
                </>
            )
        },
        {
            title: 'How does your UX design process work?',
            content: (
                <>
                    Our UX journey starts with understanding your project and its goals. Here's a brief overview:
                    <ul className='cst-style-list'>
                        <li><strong>Discovery & Research:</strong> We dive deep to understand your brand, end-users, and project objectives, using techniques like interviews, surveys, and market analysis.</li>
                        <li><strong>Competitive Analysis:</strong> We review your industry landscape, identifying trends and seeing where you stand amongst competitors.</li>
                        <li><strong>Solution Crafting:</strong> Our creative team sketches ideas, mapping out user flows and journeys.</li>
                        <li><strong>Design & Collaboration:</strong> This is where UI, UX, Product Design, and Branding come together. We design sitemaps, wireframes, prototypes, and collaborate with you for feedback.</li>
                        <li><strong>Finalizing & Transition:</strong> Once the design is approved, we can move towards Web Design and, if needed, transition the design to our development team for a seamless handoff.</li>
                    </ul>
                    <br />
                    Our commitment? A tailored approach, with tools and software that ensure smooth collaboration and a design that resonates with your brand and users.

                </>
            )
        },
        {
            title: 'How much does a design project at your agency cost?',
            content: (
                <>
                    Every design project is unique, and so is its pricing! Instead of one-size-fits-all packages, we custom-craft pricing plans based on each project's distinct needs, ranging from UI/UX, Branding, Product Design to Web design.
                    <br />
                    <br />
                    Your project's cost hinges on several factors, like its scope, duration, specific requirements, and the expertise involved. Unlike other agencies that focus on hourly rates, we factor in the project's holistic demands, including the dedicated team's expertise.
                    <br />
                    <br />
                    Got questions or ready to dive in? Drop us an email or give us a call! We also offer a detailed project proposal after understanding your needs. Whether you're a budding startup or a seasoned enterprise, our flexible pricing adjusts to match your goals. 🚀
                </>
            )
        },
        {
            title: 'How can Melonn support my startup?',
            content: (
                <>
                    At Melonn, we don't just offer services; we build partnerships. Especially with startups! Why? Because we believe in the fresh, disruptive ideas young entrepreneurs bring to the table. Here's how we're committed to making your dream a reality:
                    <ul className='cst-style-list'>
                        <li><strong>Specialized Expertise:</strong> We're a powerhouse in UI/UX, Branding, Product Design, and Web Design. This means your startup won't just fit in; it will stand out and resonate with its audience. </li>
                        <li><strong>Tailored Solutions:</strong>Every startup is unique, and so are our design solutions. We ensure they're aligned with your brand's voice and vision</li>
                        <li><strong>Trust & Security:</strong> Your idea is your biggest asset. We guarantee confidentiality, ensuring your intellectual property remains just that – yours.</li>
                        <li><strong>Unlimited Revisions:</strong> We're not satisfied until you are. We offer unlimited revisions until your vision matches the outcome. No compromises.</li>
                        <li><strong>Transparent Pricing with a Free Quote:</strong> Before we embark on our creative journey, we'll provide a free quote. And for startups that truly captivate us, we're always open to budget-friendly packages.</li>
                        <li><strong>Your Success is Our Pride:</strong> We've been privileged to help many startups transition from nascent ideas to industry leaders. And we're eager to be part of your success story! </li>
                    </ul>
                    <br />
                    Dream big, and let Melonn handle the rest. Got more questions or ideas to share? We're just an email away!
                </>
            )
        },

        {
            title: 'How soon can I expect my designs from Melonn?',
            content: (
                <>
                    Expect your designs in 2 to 4 business days, depending on the complexity. Simple tasks, like graphic designs, can be ready within a day, while intricate ones like full-page web designs might take up to 3 days. At Melonn, we prioritize quality and custom-fit all designs to your needs, avoiding generic templates. Remember, great design takes time, but we always aim for speedy deliveries without compromising quality. We're here to make sure your UI UX, Branding, Product Design, and Web design needs are met with excellence!
                </>
            )
        }
    ];

    const [activeIndex, setActiveIndex] = useState(-1);

    const togglePanel = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <>
            <section className='faq-section pt-5 pb-4'>
                <div className='container'>
                    <h1 className='text-center fw-bold'>frequently asked questions</h1>
                    <p className='text-center mb-5 faq-para'>We’re thrilled you’re interested in learning from us. Here are a few things you should know.</p>
                    {sections.map((section, index) => (
                        <div key={index} className={`p-4 accordion-main-div ${activeIndex === index ? 'active' : ''}`}>
                            <button className={`accordion accordion-seprate-x ${activeIndex === index ? 'active' : ''}`} onClick={() => togglePanel(index)}>
                                {section.title}
                            </button>

                            {activeIndex === index && (
                                <div className="panel" style={{ display: activeIndex === index ? 'block' : 'none' }} data-aos="fade-down">
                                    <p>{section.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default FaqSectionComponent;
