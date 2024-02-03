import SectionContainer from '../style/SectionContainer'
import { HorizontalList, SkillTextSection, TextImageContainer } from '../style/Text'

const Skills = () => {
  return (
    <div>
      <SectionContainer>
        <TextImageContainer>
          <SkillTextSection>
            <h2>Skills</h2>
            <h3>Programming Languages</h3>
            <HorizontalList>
              <ul>
                <li>
                  <img src='/images/skills/c++.png'></img>
                  C/C++
                </li>
                <li>
                  <img src='/images/skills/java.jpg'></img>
                  Java
                </li>
                <li>
                  <img src='/images/skills/python.png'></img>
                  Python
                </li>
                <li>
                  <img src='/images/skills/ts.png'></img>
                  TypeScript
                </li>
                <li>
                  <img src='/images/skills/js.png'></img>
                  JavaScript
                </li>
                <li>
                  <img src='/images/skills/html-css.png'></img>
                  HTML/CSS
                </li>
                <li>
                  <img src='/images/skills/sql.png'></img>
                  SQL
                </li>
              </ul>
            </HorizontalList>
            <h3>Web Development</h3>
            <HorizontalList>
              <ul>
                <li>
                  <img src='/images/skills/react.png'></img>React JS
                </li>
                <li>
                  <img src='/images/skills/next.png'></img>Next JS
                </li>
                <li>
                  <img src='/images/skills/express.png'></img>Node/Express JS
                </li>
                <li>
                  <img src='/images/skills/bootstrap.png'></img>Bootstrap
                </li>
                <li>
                  <img src='/images/skills/tailwind.png'></img>Tailwind CSS
                </li>
              </ul>
            </HorizontalList>
            <h3>Machine Learning/Data Science</h3>
            <HorizontalList>
              <ul>
                <li>
                  <img src='/images/skills/pytorch.png'></img>Pytorch
                </li>
                <li>
                  <img src='/images/skills/scikit-learn.png'></img>Scikit-learn
                </li>
                <li>
                  <img src='/images/skills/pandas.png'></img>Pandas
                </li>
              </ul>
            </HorizontalList>
            <h3>Others</h3>
            <HorizontalList>
              <ul>
                <li>
                  <img src='/images/skills/git.png'></img>Git
                </li>
                <li>
                  <img src='/images/skills/jupyter.png'></img>Jupyter Notebook
                </li>
                <li>
                  <img src='/images/skills/jira.png'></img>Jira
                </li>
                <li>
                  <img src='/images/skills/aws.png'></img>Amazon Web Services
                </li>
                <li>
                  <img src='/images/skills/docker.png'></img>Docker
                </li>
              </ul>
            </HorizontalList>

            <h3>Operating System</h3>
            <HorizontalList>
              <ul>
                <li>
                  <img src='/images/skills/ubuntu.png'></img>Linux (Ubuntu)
                </li>
                <li>
                  <img src='/images/skills/macos.png'></img>MacOS
                </li>
                <li>
                  <img src='/images/skills/windows.png'></img>Windows
                </li>
              </ul>
            </HorizontalList>
          </SkillTextSection>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default Skills
