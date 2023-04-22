import {marked} from 'marked';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import './Editor.css'
import { useEffect, useState } from 'react';
import defaultText from '../defaultText';

export default function Editor() {

    const [markdown, setMarkDown] = useState(defaultText);
    const [isFullScreen, setIsFullScreen] = useState(false);

    function toggleFullScreen() {
        setIsFullScreen(!isFullScreen);
    }

    useEffect(() => {
        setMarkDown(defaultText);
    }, []);

    function handleTextChange(event) {
        setMarkDown(event.target.value);
    }


    return (
        <div>

            <div className='editorWrap'>
            <div class="toolbar">  
                <p className='label'><FaFireAlt /> Editor</p>
                <FaExpandArrowsAlt className='icon' onClick={toggleFullScreen} />
            </div>
            <textarea id="editor" className={`editor ${isFullScreen ? 'fullScreen' : ''}`} onChange={handleTextChange} defaultValue={defaultText}>
                
            </textarea>
            </div>

            <div className='previewWrap'>
                <div className='toolbar'>
                    <p className='label'><FaFireAlt/> Previewer</p>
                <FaExpandArrowsAlt className='icon' />
                </div>
                <div className={`preview`} dangerouslySetInnerHTML={{__html: marked(markdown)}}>
                </div>
            </div>

        </div>
    );
}