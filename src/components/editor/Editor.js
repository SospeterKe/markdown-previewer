import { useState } from 'react';
import marked from 'marked';
import './Editor.css'

export default function Editor() {

    const [markdown, setMarkDown] = useState();



    return (
        <div>

            <div className='editorWrap'>
            <div class="toolbar">
                <button>resize</button>
            </div>
            <textarea id="editor" className='editor' onChange={e => setMarkDown(e.target.value)} ></textarea>
            </div>

            <div className='previewWrap'>
                <div className='toolbar'>
                <button>resize</button>
                </div>
                <div className='preview' dangerouslySetInnerHTML={{__html: marked(markdown)}}>
        
                </div>
            </div>

        </div>
    );
}