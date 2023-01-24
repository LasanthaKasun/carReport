import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const List = () => {
  /* state for report list */
  const [jsonList, setJsonList] = useState([]);

  /* get report list api function */
  useEffect(() => {
    fetch("/api/read", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setJsonList(data.files);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="pt-12 lg:flex">
        <SideBar />
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="flex items-center mr-8 border-4 border-dotted">
            <div className="p-5 w-full">
              <div className="text-lg pb-5 font-semibold">
                Damage Report List
              </div>
              <hr />
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      V: Number
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Report Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jsonList.length > 0 &&
                    jsonList.map((data, index) => (
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img
                            className="w-20 h-20 object-cover rounded-lg"
                            src={data.imgPath}
                          />
                        </td>
                        <td className="text-md font-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {data.brand}
                        </td>
                        <td className="text-md font-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {data.model}
                        </td>
                        <td className="text-md font-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {data.number}
                        </td>
                        <td className="text-md font-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {data.date}
                        </td>
                        <td className="text-md font-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          <a
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            href={`/status?uuid=${data.filePath}`}
                          >
                            Overview
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
