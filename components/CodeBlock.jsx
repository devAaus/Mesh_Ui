
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code }) => {

    const customStyle = {
        height: '97%',
        width: '99%'
    };

    return (

        <SyntaxHighlighter language="html" style={dracula} customStyle={customStyle} wrapLongLines>
            {code}
        </SyntaxHighlighter>

    )
}

export default CodeBlock