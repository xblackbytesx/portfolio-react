import React from 'react';
import ProgressBar from '../progress-bar/progress-bar';
import './skills.css';

const Skills = (props) => (
  <ul id="skill">
    <li className="skills">
      <ul>
        {
            props.skills.map((skill, index) => {
            return (
              <li key={index}>
                <ProgressBar
                  className={skill.classname}
                  value={skill.level}
                  key={skill.index}
                >
                  {skill.skill}
                </ProgressBar>
              </li>
            )
          })
        }
      </ul>
    </li>
  </ul>
)

export default Skills;
