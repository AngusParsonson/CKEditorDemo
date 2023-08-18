import { Component } from "react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";
import Editor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar: ["bold", "italic"],
  licenseKey:
    "SGJGQVBtYklMNkp2Zi81WW91Z3Nia3NMeXQwdHNoSjNXQ29ya3BLQXIxek03dE5zSHVQc0NaazRRMzNKLU1qQXlNekE1TURjPQ==",
};

class App extends Component {
  editor = null;

  render() {
    return (
      <div className="App">
        <h2>Using CKEditor&nbsp;5 from online builder in React</h2>
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
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
    );
  }
}

export default App;
