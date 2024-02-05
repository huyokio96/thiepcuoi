import { useEffect, useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";
import "./styles.css";

const comments = {
  id: 1,
  items: [],
};
const CommentSys = () => {
  useEffect(() => {
    setCommentsData({
      id: 1,
      items: [],
    });
  }, []);
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item, title) => {
    const finalStructure = insertNode(commentsData, folderId, item, title);
    setCommentsData(finalStructure);
    console.log(commentsData);
  };

  const handleEditNode = (folderId, value, title) => {
    const finalStructure = editNode(commentsData, folderId, value, title);
    setCommentsData(finalStructure);

  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
};

export default CommentSys;
