import { ChangeEvent } from "react";
import SortRadioConfigs from "configs/SortRadioConfigs";
import Modal from "components/common/Modal";
import Radio from "components/common/Radio";
import { Sort } from "pages/Marketplace";

interface IMarketSortModal {
  show: boolean;
  close: () => void;
  activeSort: Sort;
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const MarketSortModal = ({
  show,
  close,
  activeSort,
  handleSubmit,
  handleChange,
}: IMarketSortModal) => {
  return (
    <Modal title="Sort" show={show} close={close} handleSubmit={handleSubmit}>
      {SortRadioConfigs.map((config, index) => (
        <Radio
          key={config.id}
          {...config}
          value={Number(Object.keys(Sort)[index])}
          checked={activeSort === Number(Object.keys(Sort)[index])}
          className="flex items-center justify-between py-2"
          handleChange={handleChange}
        />
      ))}
    </Modal>
  );
};

interface IMarketFilterModal {
  show: boolean;
  close: () => void;
  handleSubmit: () => void;
}
export const MarketFilterModal = ({
  show,
  close,
  handleSubmit,
}: IMarketFilterModal) => {
  return (
    <Modal title="Filter" show={show} close={close} handleSubmit={handleSubmit}>
      <></>
    </Modal>
  );
};
