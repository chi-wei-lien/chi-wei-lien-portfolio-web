import { Link } from 'react-router-dom'

import SectionContainer from '../style/SectionContainer'
import { List, TextImageContainer, TextSection } from '../style/Text'

const Blogs = () => {
  return (
    <div>
      <SectionContainer>
        <TextImageContainer>
          <TextSection>
            <h1>Blogs</h1>
            <List>
              <ul>
                <li>
                  <Link to='/blog/python_cheat_sheet'>Python Coding Interview Cheat Sheet</Link>
                </li>
              </ul>
            </List>
            <br />
          </TextSection>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default Blogs
