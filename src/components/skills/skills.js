import React from 'react';
import ProgressBar from '../progress-bar/progress-bar';
import './skills.css';

const Skills = (props) => {
  return (
    <ul id="skill">
      <li className="skills">
        <ul>
          {
              props.skills.map((skill, index) => {
              return (
                <li>
                  <ProgressBar
                    className={skill.classname}
                    level={skill.level}
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
}

export default Skills;
