import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="absolute top-6 left-6 p-2"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
  );
};

export default BackButton;