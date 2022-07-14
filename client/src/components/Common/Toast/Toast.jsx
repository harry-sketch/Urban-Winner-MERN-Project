import React from "react";
import ReactDOM from "react-dom";

// Custom Hooks
import useEcom from "../../../hooks/useEcom";

// Assets
import CommonIcons from "../../../Assets/CommonIcons";

const Toast = () => {
  const { toast, removeToast } = useEcom();

  const portalEl = document.getElementById("toast");

  return (
    <div>
      {ReactDOM.createPortal(
        toast.map((item) => {
          return (
            <div
              key={item.id}
              className={`absolute bottom-5 right-10 flex items-center justify-between  text-[#212121] p-4 rounded-xl w-96 z-50 ${
                item.type === "success" ? "bg-slate-200" : "bg-red-500"
              }`}
            >
              <div className="font-semibold text-base">{item.text}</div>
              <div
                className="cursor-pointer"
                role="presentation"
                onClick={() => removeToast(item.id)}
              >
                {CommonIcons.close}
              </div>
            </div>
          );
        }),
        portalEl
      )}
    </div>
  );
};

export default Toast;
