import { Dispatch, SetStateAction } from "react";

type FileUploaderProps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({ onFieldChange, setFiles, imageUrl }: FileUploaderProps) => {
  return (
    <div>FileUploader</div>
  );
};

export default FileUploader;