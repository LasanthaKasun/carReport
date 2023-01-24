import React, { useState } from "react";
import Error from "./Error";

const ImageUpload = ({ onSuccessResult, imgObject, error }) => {
  /* store image */
  const [image, setImage] = useState(null);
  /* store Object url */
  const [createObjectURL, setCreateObjectURL] = useState(imgObject);

  /* uploadToClient image filechooser function */
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  /* file uploader post api */
  const fileUploadHandler = async () => {
    const body = new FormData();
    body.append("file", image);
    await fetch("/api/upload", {
      method: "POST",
      body,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(null);
        onSuccessResult(data, createObjectURL);
      });
  };

  return (
    <div className="mt-6">
      <label className="block mb-2 text-sm font-medium">
        Upload Vehicle Image <span className="text-red-600">*</span>
      </label>
      <div className="flex">
            <div className="rounded-lg text-gray-900 dark:bg-gray-700 w-full h-72">
              <div className="m-4">
                <label className="inline-block mb-2 text-gray-500">
                  Upload Image(jpg,png,svg,jpeg)
                </label>
                <div className="">
                  <label className="flex flex-col w-full border-2 border-dashed hover:bg-gray-600 hover:border-gray-500">
                    <div className="flex flex-col items-center justify-center p-4">
                      {createObjectURL === null ? (
                        <p className="pt-1 h-24 w-96 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Select a photo & press upload button
                        </p>
                      ) : (
                        <img
                          src={createObjectURL}
                          className="object-cover h-24 w-96"
                        />
                      )}
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      role="uploadFile"
                      onChange={uploadToClient}
                    />
                  </label>
                </div>
              </div>
              <div className="flex p-2 space-x-1">
                <button
                  role="uploadButton"
                  disabled={image === null}
                  className={`px-4 py-2 text-white ${
                    image === null ? "bg-gray-500" : "bg-green-500"
                  } rounded shadow-xl`}
                  onClick={fileUploadHandler}
                >
                  Upload
                </button>
              </div>
              {error && (
                <div className="p-2">
                  <Error message={error.message} />
                </div>
              )}
            </div>
         
      </div>
    </div>
  );
};

export default ImageUpload;
