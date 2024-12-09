import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";// For GitHub Flavored Markdown 
import remarkBreaks from "remark-breaks";// To handle line breaks
import rehypePrism from "rehype-prism"
import Prism from "prismjs"; // For highlighting code
import "prismjs/themes/prism-okaidia.css";// Highlight theme
import "./index.css";

function App() {
  
   const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... _**both!**_
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
7. Use just 1s if you want!
7. And last but not least, let's not forget embedded images:

![FreeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

                                                            `)


  return (
    <div id="wrapper">
      <div id="editor-wrapper">
        <textarea 
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter your markdown here...."
          >
        </textarea>
      </div>

      <div id="preview-wrapper">
        <div id="preview">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypePrism]}
          >{markdown}</ReactMarkdown>
        </div>
      </div>  
    </div>  
  )
}

export default App
