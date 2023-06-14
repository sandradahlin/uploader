import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledDropZone,
  StyledInput,
  StyledIcon,
  StyledDropZoneContent,
  StyledArrowIcon,
} from "./DragAndDrop.styled";
import { useAppContext } from "../../hooks/useAppContext";
import Button from "../Button";

/**
 * DragAndDrop component renders Drag abd drop
 * zone for the file upload.
 */
function DragAndDrop() {
  const { addFile, currentFile, processed, reset } = useAppContext();
  const inputRef = useRef(null);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (currentFile) {
      navigate("/details");
    }
  }, [currentFile]);

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
          <StyledArrowIcon className="fa-solid fa-arrow-up"></StyledArrowIcon>
          <p>
            Drag <span>&</span> drop
          </p>
          <div>
            .txt .pdf format or{" "}
            <Button text="browse" handleClick={handleClick} />
          </div>
        </StyledDropZoneContent>

        <StyledIcon className="fa-solid fa-file-pen"></StyledIcon>
      </StyledDropZone>
      {/* {files && files.map((file) => <p>dd</p>)} */}
    </>
  );
}

export default DragAndDrop;
