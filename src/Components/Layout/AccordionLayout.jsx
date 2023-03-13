import React, { useState } from 'react';
import Accordion from './Accordion';

const AccordionLayout = () => {
    const accordionData = [
        {
            title: 'Review the facts Saas is the best?',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.`
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur?',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.`
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur?',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.`
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur?',
            content: `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.`
        }
    ];

    return (
        <div>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content}/>

                ))}
            </div>
        </div>
    );
};
export default AccordionLayout;