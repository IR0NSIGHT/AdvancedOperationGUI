import React from "react";
import { CollapsibleComponent } from "./CollapsibleComponent";

export const JsonTextPanel: React.FC<{ json: string; title: string }> = ({
  json,
  title,
}) => {
  return <CollapsibleComponent title={title} content={<pre>{json}</pre>} />;
};
