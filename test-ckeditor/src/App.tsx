import { useRef } from "react";
import Editor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { DecoupledEditor } from "@ckeditor/ckeditor5-editor-decoupled";

const editorConfiguration = {
  licenseKey: "LICENSE_KEY",
};

const App = () => {
  const editorRef = useRef<DecoupledEditor | null>(null);

  return (
    <div className="App">
      <div className="document-editor">
        <div className="document-editor__toolbar"></div>
        <div className="document-editor__editable-container">
          <CKEditor
            config={editorConfiguration}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);

              // Add these two lines to properly position the toolbar
              const toolbarContainer = document.querySelector(
                ".document-editor__toolbar"
              );
              if (editorRef.current) {
                toolbarContainer?.appendChild(
                  editor.ui.view.toolbar.element as Node
                );
              }
              editorRef.current = editor;
            }}
            onChange={(event, editor) => console.log({ event, editor })}
            editor={Editor}
            data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
