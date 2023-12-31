/* eslint-disable react/prop-types */
import deleteQr from "../images/delete.svg";
import view from "../images/view.svg";
import { deleteDocFunction } from "../myHooks/deleteDocFunction";
const RecentDesktop = ({
  qRData,
  setShowQRModal,
  setQRToShow,
  index,
  paragraphStyle,
}) => {
  const handleViewQr = () => {
    setQRToShow(index);
    setShowQRModal(true);
  };
  return (
    <div>
      <div className="flex items-start ">
        <p className={`${paragraphStyle} truncate w-2/5`}>{qRData.name}</p>
        <p className={`${paragraphStyle} truncate w-1/5`}>{qRData.date}</p>
        <p className={`${paragraphStyle} truncate w-1/5`}>
          {qRData.numDownload}
        </p>
        <div className="flex space-x-2 w-1/5">
          <button
            className={`text-gray-200 items-center flex space-x-2 px-2 py-1 bg-blue-400 hover:bg-blue-600  rounded`}
            onClick={handleViewQr}
          >
            <img src={view} className="w-6 " alt="" />
          </button>
          <button
            className={`text-gray-200 flex px-2 space-x-2 py-1 bg-blue-400 hover:bg-red-500 rounded`}
            onClick={() => deleteDocFunction(qRData.id)}
          >
            <img src={deleteQr} className="w-6" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentDesktop;
