
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code }) => {

    return (

        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {code}
        </SyntaxHighlighter>

    )
}

export default CodeBlock