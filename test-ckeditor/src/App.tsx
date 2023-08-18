import { Component } from "react";
import Editor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { DecoupledEditor } from "@ckeditor/ckeditor5-editor-decoupled";

const editorConfiguration = {
  licenseKey:
    "SGJGQVBtYklMNkp2Zi81WW91Z3Nia3NMeXQwdHNoSjNXQ29ya3BLQXIxek03dE5zSHVQc0NaazRRMzNKLU1qQXlNekE1TURjPQ==",
};

class App extends Component {
  editorRef: DecoupledEditor | null = null;

  render() {
    return (
      <div className="App">
        <h2>CKEditor 5 using a custom build - DecoupledEditor</h2>

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
                if (this.editorRef) {
                  toolbarContainer?.appendChild(
                    editor.ui.view.toolbar.element as Node
                  );
                }
                this.editorRef = editor;
                editor = editor;
              }}
              onChange={(event, editor) => console.log({ event, editor })}
              editor={Editor}
              data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
