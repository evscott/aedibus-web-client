import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
require('codemirror/mode/javascript/javascript')
require('codemirror/theme/material.css')
import './Editor.css'

export default props => {
    return (
        <CodeMirror
            value="const main = () => console.log('Hello!');"
            options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true,
            }}
            onChange={(editor, data, value) => {}}
        />
    )
}
