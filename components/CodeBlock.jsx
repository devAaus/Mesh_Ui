"use client"

import React from 'react';
import { duotoneDark } from "@uiw/codemirror-theme-duotone";
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-funky.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/show-invisibles/prism-show-invisibles.css'

const CodeBlock = ({ language, value, onChange }) => {

    return (
        // <CodeMirror
        //     value={value}
        //     theme={duotoneDark}
        //     onChange={onChange}
        //     height='100%'
        //     width='100%'
        //     className="p-4"
        //     extensions={[
        //         html({
        //             config: {
        //                 htmlMode: true,
        //                 autoCloseTags: true,
        //                 autoCloseBrackets: true,
        //                 matchTags: true,
        //                 matchBrackets: true,
        //                 break: true,
        //             },
        //         }),
        //     ]}
        //     options={{
        //         lint: true,
        //         lineWrapping: true,
        //         lineNumbers: true,
        //         autoFocused: false,
        //         extraKeys: {
        //             "Backspace": "delCharBefore",
        //             "Enter": "newlineAndIndentContinueMarkdownList",
        //             "Ctrl-Space": "autocomplete",
        //         },
        //         indentUnit: 4
        //     }}
        //     basicSetup={{
        //         foldGutter: false,
        //         dropCursor: false,
        //         allowMultipleSelections: false,
        //         indentOnInput: false,
        //         highlightActiveLine: false,
        //         highlightActiveLineGutter: false,
        //     }}
        // />

        // <textarea name="" id="" spellCheck="false" className='w-full h-full bg-[#2a2734]'>{value}</textarea>

        <Editor
            value={value}
            onValueChange={onChange}
            highlight={value => highlight(value, languages.markup)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                backgroundColor: '#2a2734',
                color: '#ffffff',
                borderRadius: '5px',
                overflow: 'auto'
            }}
        />
    );
}

export default CodeBlock;
