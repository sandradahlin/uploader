import { useRef } from "react";
import {
  StyledDropZone,
  StyledInput,
  StyledIcon,
  StyledDropZoneContent,
} from "./DragAndDrop.styled";
import { useAppContext } from "../../hooks/useAppContext";
import Button from "../Button";

/**
 * DragAndDrop component renders Drag abd drop
 * zone for the file upload.
 */
function DragAndDrop() {
  const { addFile } = useAppContext();
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
    e.preventDefault();
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
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
        <StyledDropZoneContent>
          <p>
            Drag one or more files to this <i>drop zone</i>.
          </p>
          Or <Button text="Upload files" handleClick={handleClick} />
        </StyledDropZoneContent>

        <StyledIcon className="fa-regular fa-image"></StyledIcon>
      </StyledDropZone>
      {/* {files && files.map((file) => <p>dd</p>)} */}
    </>
  );
}

export default DragAndDrop;
