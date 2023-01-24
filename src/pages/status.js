import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const status = () => {
  /* state for vehicle report overview */
  const [jsonList, setJsonList] = useState([]);

  /* get query params */
  var router = useRouter();
  var uuid = router.query["uuid"];

  /* get damage report data */
  useEffect(() => {
    if (uuid) {
      fetch(`/api/current?uuid=${uuid}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setJsonList(data.files);
        });
    }
  }, [uuid]);
  return (
    <div>
      <NavBar />
      <div className="pt-12 lg:flex">
        <SideBar />
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="flex items-center mr-8 border-4 border-dotted">
            <div className="p-10">
              <div className="text-lg pb-5 font-semibold">
                Damage Report - Current Status (Vehicle Number -
                {jsonList[0]?.number}){" "}
              </div>
              <hr />
              <div className="mb-4 pt-5">
                <img
                  src={jsonList[0]?.imgPath}
                  className="w-48 h-auto rounded-lg hover:scale-[1.5] duration-200"
                  alt=""
                />
                <div className="p-2 mt-5 bg-gray-100 rounded-lg">
                  <div className="grid grid-cols-6 pb-2 pt-2">
                    <div className="text-base font-bold text-gray-500">
                      Report Date:
                    </div>
                    <div className="text-base font-bold">
                      {jsonList[0]?.date}
                    </div>
                  </div>
                  <div className="grid grid-cols-6 pb-2 pt-2">
                    <div className="text-base font-bold text-gray-500">
                      Vehicle Brand:
                    </div>
                    <div className="text-base font-bold">
                      {jsonList[0]?.brand}
                    </div>
                  </div>
                  <div className="grid grid-cols-6 pb-2">
                    <div className="text-base font-bold text-gray-500">
                      Vehicle Model:
                    </div>
                    <div className="text-base font-bold">
                      {jsonList[0]?.model}
                    </div>
                  </div>
                  <hr />
                  <div className="grid grid-cols-6 pb-2 pt-2">
                    <div className="text-base font-bold text-gray-500">
                      Description:
                    </div>
                    <div className="text-base font-bold">
                      {jsonList[0]?.description}
                    </div>
                  </div>
                  <hr />
                  <div className="grid grid-cols-6 pb-2 pt-2">
                    <div className="text-base font-bold text-gray-500">
                      Customer Name:
                    </div>
                    <div className="text-base font-bold">
                      {jsonList[0]?.name}
                    </div>
                  </div>
                  <div className="grid grid-cols-6 pb-2">
                    <div className="text-base font-bold text-gray-500">
                      Customer Email:
                    </div>
                    <div className="text-base font-bold">
                      {jsonList[0]?.email}
                    </div>
                  </div>
                  <div className="grid grid-cols-6 pb-2">
                    <div className="text-base font-bold text-gray-500">
                      Customer Mobile:
                    </div>
                    <div className="text-base font-bold">
                      {jsonList[0]?.mobile}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 pt-5 bg-red-500 p-5 text-lg font-bold text-white rounded-lg animate-pulse flex justify-between">
                <div>Ongoing Repair</div>
                <div>Done 80%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default status;
