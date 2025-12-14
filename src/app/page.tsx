"use client";
import ReactFileUploaderUI from "react-file-upload-ui";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full">
        <ReactFileUploaderUI className="border-red-500"/>
      </div>
    </div>
  );
}
