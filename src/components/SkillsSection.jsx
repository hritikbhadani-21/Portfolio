import './SkillsSection.css'
function SkillsSection (){
    const skills = [
        { name: 'Machine Learning', level: 90 },
        { name: 'Logo', level: 70 },
        { name: 'Web Design', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 95 },
        { name: 'Communication', level: 85 },
        { name: 'Canva', level: 60 },
    ];

    return (
        <div className="skills-section" id='Skill'>
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-bar" key={index}>
                        <span className="skill-name">{skill.name}</span>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;