import { useState } from 'react';
import {marked} from 'marked';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import './Editor.css'

export default function Editor() {

    const [markdown, setMarkDown] = useState("");



    return (
        <div>

            <div className='editorWrap'>
            <div class="toolbar">  
                <p className='label'><FaFireAlt /> Editor</p>
                <FaExpandArrowsAlt className='icon' />
            </div>
            <textarea id="editor" className='editor' onChange={e => setMarkDown(e.target.value)} >
                
            </textarea>
            </div>

            <div className='previewWrap'>
                <div className='toolbar'>
                    <p className='label'><FaFireAlt/> Previewer</p>
                <FaExpandArrowsAlt className='icon' />
                </div>
                <div className='preview' dangerouslySetInnerHTML={{__html: marked(markdown)}}>
                    
                </div>
            </div>

        </div>
    );
}