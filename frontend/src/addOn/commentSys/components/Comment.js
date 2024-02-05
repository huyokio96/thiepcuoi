import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";
import { Button, Checkbox, Form, Input } from 'antd';

const Comment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
  cntRenderr
}) => {
  const [cntRender, setCntRender] = useState(1);
  const [inputName, setInputName] = useState(null);
  const [input, setInput] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);
  const inputTitleRef = useRef(null);
  const [form] = Form.useForm();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const onAddComment = () => {
    const formItem = form.getFieldsValue();
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText, inputTitleRef?.current?.innerText);
    } else {
      console.log('addCmt');
      setExpand(true);
      handleInsertNode(comment.id, formItem.content, formItem.title);
      setShowInput(false);
      form.resetFields();
    }
    setCntRender(cntRender + 1);

    if (editMode) setEditMode(false);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          // <form>
          //   <input
          //     required
          //     type="text"
          //     className="inputContainer__input first_input"
          //     autoFocus
          //     value={inputName}
          //     onChange={(e) => setInputName(e.target.value)}
          //     placeholder="Nhập tên..."
          //   />

          //   <input
          //     required
          //     type="text"
          //     className="inputContainer__input first_input"
          //     autoFocus
          //     value={input}
          //     onChange={(e) => setInput(e.target.value)}
          //     placeholder="Nhập nội dung..."
          //   />

          //   <Action
          //     className="reply comment"
          //     type="COMMENT"
          //     handleClick={onAddComment}
          //   />
          // </form>

          <Form
          form={form}
          layout="inline"
            name="basic"
            // labelCol={{
            //   span: 8,
            // }}
            // wrapperCol={{
            //   span: 16,
            // }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              title: inputName,
              content: input,
            }}
            onFinish={onAddComment}
            // autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Content"
              name="content"
              rules={[
                {
                  required: true,
                  message: 'Please input your content!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
            >
              <Button type="primary" htmlType="submit">
                COMMENT
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <>
            <span
              contentEditable={editMode ? false : editMode}
              suppressContentEditableWarning={editMode}
              ref={inputTitleRef}
              style={{ wordWrap: "break-word", alignSelf: 'baseline' }}
            >
              {comment.title}
            </span>

            <span
              contentEditable={editMode}
              suppressContentEditableWarning={editMode}
              ref={inputRef}
              style={{ wordWrap: "break-word", float: 'left' }}
            >
              {comment.name}
            </span>

            <div style={{ display: "flex", marginTop: "5px" }}>
              {editMode ? (
                <>
                  <Action
                    className="reply"
                    type="SAVE"
                    handleClick={onAddComment}
                  />
                  <Action
                    className="reply"
                    type="CANCEL"
                    handleClick={() => {
                      if (inputRef.current)
                        inputRef.current.innerText = comment.name;
                      if (inputTitleRef.current)
                        inputTitleRef.current.innerText = comment.title;
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className="reply"
                    type={
                      <>
                        {expand ? (
                          <UpArrow width="10px" height="10px" />
                        ) : (
                          <DownArrow width="10px" height="10px" />
                        )}{" "}
                        REPLY
                      </>
                    }
                    handleClick={handleNewComment}
                  />
                  <Action
                    className="reply"
                    type="EDIT"
                    handleClick={() => {
                      setEditMode(true);
                    }}
                  />
                  <Action
                    className="reply"
                    type="DELETE"
                    handleClick={handleDelete}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          // <div className="inputContainer">
          //   <input
          //     type="text"
          //     className="inputContainer__input first_input"
          //     autoFocus
          //     name="1"
          //     onChange={(e) => setInputName(e.target.value)}
          //   />

          //   <input
          //     type="text"
          //     className="inputContainer__input"
          //     autoFocus
          //     name="2"
          //     onChange={(e) => setInput(e.target.value)}
          //   />
          //   <Action className="reply" type="REPLY" handleClick={onAddComment} />
          //   <Action
          //     className="reply"
          //     type="CANCEL"
          //     handleClick={() => {
          //       setShowInput(false);
          //       if (!comment?.items?.length) setExpand(false);
          //     }}
          //   />
          // </div>


          <Form
          form={form}
            name="basic2"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              title: inputName,
              content: input,
            }}
            onFinish={onAddComment}
            // autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Content"
              name="content"
              rules={[
                {
                  required: true,
                  message: 'Please input your content!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
              REPLY
              </Button>

              <Button type="default" onClick={() => {
                setShowInput(false);
                if (!comment?.items?.length) setExpand(false);
              }}>
              CANCEL
              </Button>

            </Form.Item>
          </Form>
        )}

        {comment?.items?.map((cmnt) => {
          return (
            <Comment
            cntRenderr={cntRender}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={cmnt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
