import React, { useState } from 'react';
import SectionTemplate from '../SectionTemplate';
import { SkillsContainer, Category, Header, SkillList, SkillItem, CategoryContent, HeaderText } from './SkillsSection.styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { skills } from '../../data';

const SkillSection = () => {
    const [skillsData] = useState(skills);

    const [openCategory, setOpenCategory] = useState(null);

    const toggleExpand = (category) => {
        setOpenCategory((prev) => (prev === category ? null : category));
    };

    return (
        <SectionTemplate title="Skills">
            <SkillsContainer>
                {Object.entries(skillsData).map(([category, skills]) => (
                    <Category key={category} expanded={openCategory === category}>
                        <CategoryContent onClick={() => toggleExpand(category)}>
                            {
                                openCategory === category ?
                                    <SkillList expanded={openCategory === category}>
                                        {skills.map((skill, index) => (
                                            <SkillItem key={index}>{skill}</SkillItem>
                                        ))}
                                    </SkillList> : <KeyboardArrowDownIcon />
                            }
                        </CategoryContent>
                        <Header expanded={openCategory === category}><HeaderText expanded={openCategory === category}>{category} Stack</HeaderText></Header>
                    </Category>
                ))}
            </SkillsContainer>
        </SectionTemplate>
    );
};

export default SkillSection;
