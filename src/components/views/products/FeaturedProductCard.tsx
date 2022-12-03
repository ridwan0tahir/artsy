import { FunctionComponent, useMemo } from "react";

import Arrow from "components/icons/Arrow";
import ButtonIcon from "../ButtonIcon";
import Curators from "providers/CuratorProvider";

interface IFeaturedProductCard {
  name: string;
  cover: string;
  description: string;
  curators_id: string[];
}

const FeaturedProductCard: FunctionComponent<IFeaturedProductCard> = ({
  name,
  cover,
  description,
  curators_id,
}) => {
  const curators = useMemo(() => {
    return Curators.filter((curator) => curators_id.includes(curator.id));
  }, []);

  return (
    <div className="">
      <article>
        <div className="relative mb-4 group">
          <img
            className="w-full h-[255.8px] object-cover object-center"
            src={cover}
            alt={name}
          />
          <div
            className="bg-black-05 absolute top-0 left-0 w-full h-full p-[5%]
            flex flex-col items-end justify-around invisible opacity-0 group-hover:opacity-100
            group-hover:visible ease-in-out duration-1000"
          >
            <h3 className="font-clash text-fs-60 font-semibold text-white-01 text-right">
              {name}
            </h3>
            <ButtonIcon
              className="w-[4.875rem] h-[4.921875rem] rounded-full border border-white-01 
              flex items-center justify-center hover:bg-white-01/20 ease-linear duration-500"
              content={<Arrow className="overflow-hidden" />}
            />
          </div>
        </div>
        <h3 className="font-stix font-bold text-fs-80 hidden">{name}</h3>
        <p className="font-normal text-black-04 leading-lh-40">{description}</p>
      </article>
      <div className="flex items-center gap-4 w-min py-4 border-b border-black-01">
        <ul className="personsGrid  max-w-[12.5rem]">
          {curators.map((curator) => (
            <li
              key={curator.id}
              className="w-10 h-10 rounded-full overflow-hidden border border-blue-02"
            >
              <img
                className="w-full h-full"
                src={curator.src}
                alt={curator.alt}
              />
            </li>
          ))}
        </ul>
        <p className="text-fs-30 font-semibold text-black-01 flex-wrap whitespace-nowrap">
          64 major creators
        </p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
