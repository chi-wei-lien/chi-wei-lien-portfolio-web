import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'

import SectionContainer from '../style/SectionContainer'
import { TextImageContainer, TextSection } from '../style/Text'

interface BlogProp {
  fileName: string
}

const Blog = ({ fileName }: BlogProp) => {
  const [content, setContent] = useState('')
  useEffect(() => {
    fetch(fileName)
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
      })
  }, [])

  return (
    <div>
      <SectionContainer>
        <TextImageContainer>
          <TextSection>
            <ReactMarkdown
              components={{
                code(props) {
                  /* eslint-disable react/prop-types */
                  const { children, className, node, ...rest } = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag='div'
                      /* eslint-disable react/no-children-prop */
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={coldarkCold}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                },
                ul(props) {
                  /* eslint-disable react/prop-types */
                  const { children, className, node, ...rest } = props
                  return (
                    <ul {...rest} className={className}>
                      {children}
                    </ul>
                  )
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </TextSection>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default Blog
