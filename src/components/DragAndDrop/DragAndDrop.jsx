import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledDropZone,
  StyledInput,
  StyledIcon,
  StyledDropZoneContent,
  StyledArrowIcon,
} from "./DragAndDrop.styled";
import { useAppContext } from "../../context";
import Button from "../Button";
import { ROUTES } from "../../routes";

/**
 * DragAndDrop component renders Drag and drop
 * zone for the file upload.
 */
function DragAndDrop() {
  const { addFile, setLoading } =
    useAppContext();

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setLoading();

    if (e.target.files.length) {
      const file = e.target.files[0];
      const fileText = await e.target.files[0].text();
      addFile({ file, fileText });
      navigate(ROUTES.details);
      setTimeout(() => {
        setLoading();
      }, 2000);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setLoading();

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach(async (item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          const fileText = await file.text();

          addFile({ file, fileText });
          navigate(ROUTES.details);
          setTimeout(() => {
            setLoading();
          }, 2000);
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
        data-testid="dragAndDrop-container"
      >
        <StyledInput
          ref={inputRef}
          type="file"
          id="input-file-upload"
          onChange={handleChange}
          data-testid="input-upload"
        />
        <StyledDropZoneContent>
          <StyledArrowIcon className="fa-solid fa-arrow-up"></StyledArrowIcon>
          <p>
            Drag <span>&</span> drop
          </p>
          <div>
            drag to add .txt format or{" "}
            <Button
              text="browse"
              handleClick={handleClick}
              data-testid="browse-button"
            />
          </div>
        </StyledDropZoneContent>

        <StyledIcon className="fa-solid fa-file-pen"></StyledIcon>
      </StyledDropZone>
    </>
  );
}

export default DragAndDrop;
