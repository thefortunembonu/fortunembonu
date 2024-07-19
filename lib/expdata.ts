import React from "react";
import { IoHome } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";

export const Expdata =[
    {
        date: '2019-2020',
        firm: 'Anibal Multisector Media Company ',
        job_title: "Graphics Design/Photography Apprenticeship",
        info: " I enrolled in the firm to learn graphics design and photography. I also worked there as an apprentice for a period of six months",
        icon: React.createElement(FaGraduationCap)
    },

        {
        date: '2021-2023',
        firm: 'F-Studios Design And Photo Company',
        job_title: " Lead designer/Studio Manager",
            info: " I worked as a lead designer and assistant photographer for the firm for 2 years. I also served as a manager for a period of time.",
        icon: React.createElement(IoHome)
        
    },
        
            {
        date: '2017-2023',
        firm: 'Federal University of Technology Owerri (FUTO)',
        job_title: " Graduant (BSc. Computer Science)",
                info: " I finished my first degree programme in Computer Science from FUTO Owerri.",
        icon: React.createElement(FaGraduationCap)
        
    },
            
                     {
        date: '2024',
        firm: 'Google Cybersecurity Professional Certificate',
        job_title: " Certified Cybersecurity Professional",
                info: " Finished a certification with Google on Cybersecurity(GCPC)",
        icon: React.createElement(FaGraduationCap)
        
    },
] as const