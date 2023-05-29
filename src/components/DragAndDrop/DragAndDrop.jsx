import { useRef, useState } from "react";
import { StyledDropZone, StyledInput } from "./DragAndDrop.styled";
import { useAppContext } from "../../hooks/useAppContext";
function DragAndDrop() {
  const { currentFile, files, addFile } = useAppContext();
  console.log(files, "hh");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      addFile(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDrop = (e) => {
    console.log("hej");
    e.preventDefault();
    console.log(e.dataTransfer.items, "event");
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(` ${file.name}`);
          addFile(file);
        }
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledDropZone
        id="drop_zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <StyledInput
          ref={inputRef}
          type="file"
          id="input-file-upload"
          onChange={handleChange}
        />
        <p>
          Drag one or more files to this <i>drop zone</i>.
        </p>
        Or <button onClick={handleClick}>Upload files</button>
      </StyledDropZone>
      {/* {files && files.map((file) => <p>dd</p>)} */}
    </>
  );
}

export default DragAndDrop;
