import Arrow from "components/icons/Arrow";
import Persons from "providers/PersonProvider";
import ButtonIcon from "../ButtonIcon";

const FeaturedProductCard = () => {
  return (
    <div>
      <article>
        <div className="relative mb-4 group">
          <img
            className="w-full h-[255.8px] object-cover object-center"
            src="https://res.cloudinary.com/yheenca/image/upload/v1669896798/artsy/product/4764a7daa106cda4888b058654d2bf6f_b5w6au.jpg"
            alt="Image"
          />
          <div
            className="bg-black-05 absolute top-0 left-0 w-full h-full p-[5%]
            flex flex-col items-end justify-between invisible opacity-0 group-hover:opacity-100
            group-hover:visible ease-in-out duration-1000"
          >
            <h3 className="font-clash text-fs-60 font-semibold text-white-01 text-right">
              The Boolean Egyptian
            </h3>
            <ButtonIcon
              className="w-[4.875rem] h-[4.921875rem] rounded-full border border-white-01 
              flex items-center justify-center hover:bg-white-01/20 ease-linear duration-500"
              content={<Arrow className="overflow-hidden" />}
            />
          </div>
        </div>
        <h3 className="font-stix font-bold text-fs-80 hidden">
          The Boolean Egyptian
        </h3>
        <p className="font-normal text-black-04 leading-lh-40">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          totam vel fugiat animi inventore consectetur repudiandae earum. Dolore
          cupiditate nisi magnam iure accusantium beatae sit eveniet quas, aut,
          tempore totam!
        </p>
      </article>
      <div className="flex items-center gap-4 w-min py-4 border-b border-black-01">
        <ul className="personsGrid  max-w-[12.5rem]">
          {Persons.map((person) => (
            <li
              key={person.id}
              className="w-10 h-10 rounded-full overflow-hidden border border-black"
            >
              <img
                className="w-full h-full"
                src={person.src}
                alt={person.alt}
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
