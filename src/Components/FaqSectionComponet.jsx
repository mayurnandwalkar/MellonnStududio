import React, { useState } from 'react'

const FaqSectionComponet = () => {
    const sections = [
        {
            title: "What makes Melonn different from other leading UI UX design agencies?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'How much does a design project at your agency cost?',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Can you help us redesign our app, website, or enterprise/B2B software?',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
                    <h1 className='text-center fw-bold'>frequently asked question</h1>
                    <p className='text-center mb-5 faq-para' >We’re thrilled you’re interested in learning from us. Here are a few things you should know.</p>
                    {sections.map((section, index) => (
                        <div key={index} className={`p-4 accordion-main-div ${activeIndex === index ? 'active' : ''}`} >
                            <button className={`accordion accordion-seprate-x ${activeIndex === index ? 'active' : ''}`} onClick={() => togglePanel(index)} >
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
    )
}

export default FaqSectionComponet