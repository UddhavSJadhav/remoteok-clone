import React from "react";
import CustomInput from "../common/CustomInput";

interface LinkModelProp {
  isVisible: boolean;
  closeModel: Function;
  onSave: Function;
  defaultData?: {
    url?: string;
    text_to_display?: string;
    link_title?: string;
  };
}

const LinkModel = ({
  isVisible,
  closeModel,
  onSave,
  defaultData,
}: LinkModelProp) => {
  return (
    <div
      className={`${
        isVisible ? "fixed" : "hidden"
      } top-0 right-0 w-screen h-screen grid place-items-center bg-white/30 z-[1001]`}
      onClick={() => closeModel()}
    >
      <div
        className="bg-color-bg rounded-xl w-[min(calc(100%-10px),450px)] -translate-y-full animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-solid border-stone-700 px-4 py-2 text-xl">
          Insert/Edit Link
        </div>
        <form className="px-4 pt-2 pb-4" onSubmit={(e) => onSave(e)}>
          <div className="mb-2">
            <CustomInput id="url" label="URL" defaultValue={defaultData?.url} />
          </div>

          <div className="mb-2">
            <CustomInput
              id="text_to_display"
              label="text to display"
              defaultValue={defaultData?.text_to_display}
            />
            <input
              type="hidden"
              defaultValue={defaultData?.text_to_display}
              id="hiddenFlag"
            />
          </div>

          <div className="mb-2">
            <CustomInput
              id="link_title"
              label="title"
              defaultValue={defaultData?.link_title}
            />
          </div>

          <div className="text-right">
            <button
              type="reset"
              className="outline-none px-2 py-1 border-[2px] border-solid border-red-500 text-red-500 hover:text-white hover:bg-red-500 active:bg-red-200 rounded-md me-2"
              onClick={() => closeModel()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="outline-none px-2 py-1 border-[2px] border-solid border-red-500 text-white bg-red-500 active:bg-red-200 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkModel;
