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
            <hr />
            <p>
              Here are some of the languages that I am proficient at. I normally do low-level
              programming and competitive programming (Leetcode) problems with C/C++; web
              development with Typescript (Javascript), HTML, CSS, and SQL. Java is the first
              programming language I learned. Python is the main programming language that I use for
              machine learning projects.
            </p>
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
            <hr />
            <p>
              Normally, I prefer to do frontend development with React JS and backend development
              with Express JS (Node JS). However, I&apos;ve also been working on several projects
              with Next JS and enjoy the server-side rendering functionality it provides. As for
              styling framework, I&apos;ve used both Bootstrap and Tailwind CSS but recently, I
              enjoy the flexibility of using just CSS for styling.
            </p>
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
            <hr />
            <p>
              Here are some of the tools and python libraries that I often use in machine learning
              projects. Pytorch is used for deep learning. Scikit-learn provides classical machine
              learning models. Pandas is used to handle datasets. As for Jupyter Notebook, I often
              test my code in Jupyter Notebook before putting it in a python file.
            </p>
            <HorizontalList>
              <ul>
                <li>
                  <img src='/images/skills/pytorch.png'></img>Pytorch
                </li>
                <li>
                  <img src='/images/skills/scikit-learn.png'></img>Scikit-learn
                </li>
                <li>
                  <img src='/images/skills/jupyter.png'></img>Jupyter Notebook
                </li>
                <li>
                  <img src='/images/skills/pandas.png'></img>Pandas
                </li>
              </ul>
            </HorizontalList>
            <h3>Others</h3>
            <hr />
            <p>
              Git is the main version control system I used. Jira is helpful when organizing user
              stories for software development. Amazon Web Services (AWS) and Docker are used for
              project deployment.
            </p>
            <HorizontalList>
              <ul>
                <li>
                  <img src='/images/skills/git.png'></img>Git
                </li>
                <li>
                  <img src='/images/skills/jira.png'></img>Jira
                </li>
                <li>
                  <img src='/images/skills/aws.png'></img>AWS
                </li>
                <li>
                  <img src='/images/skills/docker.png'></img>Docker
                </li>
              </ul>
            </HorizontalList>

            <h3>Operating System</h3>
            <hr />
            <p>
              Linux is my favorite operating system and I used it as my daily OS. I&apos;m also
              comfortable coding under MacOS or Windows.
            </p>
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
