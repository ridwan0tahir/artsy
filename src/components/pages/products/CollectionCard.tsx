import FavThick from "components/icons/FavThick";
import Button from "../../common/Button";

const CollectionCard = () => {
  return (
    <div className="p-4 border border-black-03">
      <Button className="block ml-auto mb-2">
        {" "}
        <FavThick />{" "}
      </Button>
      <div className="h-[20rem] mb-2">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/yheenca/image/upload/v1669896997/artsy/product/f6d7e37a86a9d1d440e978343a94d1f0_naflow.jpg"
          alt="Collection"
        />
      </div>
      <div className="flex items-center justify-between text-fs-50 capitalize">
        <h3>title</h3>
        <p>price</p>
      </div>
    </div>
  );
};

export default CollectionCard;
