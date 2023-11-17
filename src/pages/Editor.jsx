import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { EditorData, EditrorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
   return (
      <div className='m-2 p-2 md:m-8 md:p-4 bg-white rounded-2xl'>
         <Header category='App' title='Editor' />
         <RichTextEditorComponent>
            {/* <EditorData /> */}
            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
         </RichTextEditorComponent>
      </div>
   )
}

export default Editor