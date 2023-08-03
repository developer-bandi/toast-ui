import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Viewer } from "@toast-ui/react-editor";
import { Editor } from "@toast-ui/react-editor";

const App = () => {
  return (
    <div>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        theme={"dark"}
      />
      <div>
        <Viewer
          viewer={true}
          initialValue={"/## **hello react editor world!qwefqwefqwef**/"}
          // theme={"dark"}
          height="600px"
        />
      </div>
    </div>
  );
};

export default App;
