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
    {/* <meter min="0" low="10" optimum="50" high="90" max="100"></meter>*/}

    <meter value="55.93" min="0" max="120.47" title="GB">
      <div className="meter-gauge">
        <span>Disk Usage - 55.93GB out of 120GB</span>
      </div>
    </meter>
  </ul>
)

export default Skills;
