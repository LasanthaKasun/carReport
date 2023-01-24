import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import Button from "../components/Button";
import SideBar from "../components/SideBar";
import Select from "../components/Select";
import TextField from "../components/TextField";
import VehicleData from "../vehicles.json";
import TextArea from "../components/TextArea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import { getCurrentDate } from "../helper";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { rules } from "../validation";

const Create = () => {
  /* store step index */
  const [step, setStep] = useState(1);
  /* react-hook-form default value initialization */
  const {
    register,
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      brand: "",
      model: "",
      number: "",
      uuid: "",
      imgPath: "",
      name: "",
      number: "",
      email: "",
      date: getCurrentDate(),
    },
  });
  /* state for vehicle model list */
  const [vehicleModelList, setVehicleModleList] = useState([]);
  /* state for image obj url */
  const [imgObjUrl, setImgObjUrl] = useState(null);

  /* select component value set params (name and event) */
  const onChangeValue = (key, event) => {
    setValue(key, event.target.value);
    errors[key] = null;
    clearErrors(key);
    if (key === "brand") {
      if (event.target.value == "") {
        setVehicleModleList([]);
        setValue("model", "");
      } else {
        const vehicleModel = VehicleData.filter(
          (brand) => brand.name == event.target.value
        )[0].models;
        setVehicleModleList(vehicleModel);
        setValue("model", "");
      }
    }
  };

  /* set to upload image url and uuid */
  const setUploadData = (data, objUrl) => {
    setValue("uuid", data.uuid);
    setValue("imgPath", data.url);
    setImgObjUrl(objUrl);
    errors.uuid = null;
    toast("🦄 Wow upload successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  /* form back handler */
  const backHandler = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  /* submit damage report data api call function */
  const onSubmitHandler = async (data) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          Router.push({
            pathname: "/status",
            query: { uuid: data.uuid },
          });
        });
    }
  };

  return (
    <div data-testid="message">
      <NavBar />
      <div className="pt-12 lg:flex">
        <SideBar />
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="flex items-center mr-8 border-4 border-dotted ">
            <div className="p-5 w-full">
              <div className="text-lg pb-5 font-semibold">
                Create Damage Report
              </div>
              <hr />
              <div className="w-full">
                {/* first form field */}
                {step === 1 && (
                  <div className="mt-6 w-80">
                    <div className="text-sm">Enter Vehicle Information</div>
                    <Select
                      label="Vehicle Brand"
                      role="brand"
                      data={VehicleData}
                      {...register("brand", rules.brand)}
                      onCustomeSelect={(event) => onChangeValue("brand", event)}
                      error={errors.brand}
                    />
                    <Select
                      label="Vehicle Model"
                      role="model"
                      data={vehicleModelList}
                      {...register("model", rules.model)}
                      onCustomeSelect={(event) => onChangeValue("model", event)}
                      error={errors.model}
                    />

                    <TextField
                      label="Vehicle Number"
                      placeholder="Enter vehicle number"
                      isRequired
                      onChangeText={(event) => onChangeValue("number", event)}
                      {...register("number", rules.number)}
                      error={errors.number}
                    />
                  </div>
                )}
                {/* second form field */}
                {step === 2 && (
                  <div className="flex justify-between gap-8">
                    <div className="w-full h-full">
                      <ImageUpload
                        onSuccessResult={(data, objUrl) =>
                          setUploadData(data, objUrl)
                        }
                        imgObject={imgObjUrl}
                        error={errors.uuid}
                      />
                      <TextField
                        label=""
                        placeholder=""
                        hidden={true}
                        onChangeText={(event) => onChangeValue("uuid", event)}
                        {...register("uuid", rules.uuid)}
                      />
                    </div>
                    <div className="w-full h-full">
                      <TextArea
                        label="Description"
                        isRequired
                        onChangeText={(event) =>
                          onChangeValue("description", event)
                        }
                        {...register("description", rules.description)}
                        error={errors.description}
                      />
                    </div>
                  </div>
                )}
                {/* third form field */}
                {step === 3 && (
                  <div className="mt-6 w-80">
                    <div className="text-sm">Enter Customer Information</div>
                    <TextField
                      label="Customer Name"
                      placeholder="Enter customer name"
                      isRequired
                      onChangeText={(event) => onChangeValue("name", event)}
                      {...register("name", rules.name)}
                      error={errors.name}
                    />
                    <TextField
                      label="Customer Email"
                      placeholder="Enter customer email"
                      isRequired
                      onChangeText={(event) => onChangeValue("email", event)}
                      {...register("email", rules.email)}
                      error={errors.email}
                    />
                    <TextField
                      label="Customer Mobile"
                      placeholder="Enter customer mobile"
                      isRequired
                      onChangeText={(event) => onChangeValue("mobile", event)}
                      {...register("mobile", rules.mobile)}
                      error={errors.mobile}
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end pt-10 gap-10">
                {step !== 1 && (
                  <Button
                    role="backBtn"
                    text="Back"
                    onClick={() => backHandler()}
                  />
                )}
                <Button
                  role="nextBtn"
                  text={step === 3 ? "Save" : "Next"}
                  onClick={handleSubmit(onSubmitHandler)}
                />
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
