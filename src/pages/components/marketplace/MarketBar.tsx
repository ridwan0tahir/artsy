import ButtonIcon from "components/common/ButtonIcon";
import Chevron from "components/icons/Chevron";

export const MarketBar = () => (
  <div
    className="px-5 py-4 flex items-center justify-between 
              drop-shadow bg-white mb-7 rounded-2xl font-normal text-fs-30"
  >
    <ButtonIcon
      className="flex items-center gap-4"
      content={
        <>
          Filter <Chevron />
        </>
      }
    />

    <ButtonIcon
      className="flex items-center gap-4"
      content={
        <>
          Sort by <Chevron />
        </>
      }
    />
  </div>
);
