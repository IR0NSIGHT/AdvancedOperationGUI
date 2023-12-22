import { RawConfig } from "./RawConfig";
import React from "react";
import { Button } from "@material-ui/core";

type DownloadConfigProps = {
  config: RawConfig;
  fileName: string;
};
const DownloadJsonButton: React.FC<DownloadConfigProps> = ({
  config,
  fileName,
}) => {
  const downloadJsonFile = () => {
    const jsonDataString = JSON.stringify(config, null, 2);
    const blob = new Blob([jsonDataString], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + ".json";
    link.click();

    // Release the object URL
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button variant="contained" color="primary" onClick={downloadJsonFile}>
      Download JSON
    </Button>
  );
};
export default DownloadJsonButton;
