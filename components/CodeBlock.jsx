
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code }) => {

    const customStyle = {
        lineHeight: '1.5',
        fontSize: '1rem',
        padding: '20px',
        overflow: 'hidden',
        backgroundColor: 'transparent',
    };

    return (
        <SyntaxHighlighter language="html" style={atomDark} customStyle={customStyle} useInlineStyles wrapLongLines wrapLines>
            {code}
        </SyntaxHighlighter>
    )
}

export default CodeBlock