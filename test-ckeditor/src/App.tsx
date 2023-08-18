import { Component } from "react";
import Editor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { DecoupledEditor } from "@ckeditor/ckeditor5-editor-decoupled";

const editorConfiguration = {
  licenseKey:
    "SGJGQVBtYklMNkp2Zi81WW91Z3Nia3NMeXQwdHNoSjNXQ29ya3BLQXIxek03dE5zSHVQc0NaazRRMzNKLU1qQXlNekE1TURjPQ==",
};

class App extends Component {
  editor: DecoupledEditor | null = null;

  render() {
    return (
      <div className="App">
        <h2>Using CKEditor&nbsp;5 from online builder in React</h2>
        <div className="document-editor">
          <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data="<p>Hello from CKEditor&nbsp;5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
              editor?.ui
                ?.getEditableElement()
                ?.parentElement?.insertBefore(
                  editor?.ui?.view?.toolbar?.element as Node,
                  editor.ui.getEditableElement() as Node
                );

              this.editor = editor;
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
