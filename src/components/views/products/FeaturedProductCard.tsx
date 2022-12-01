const FeaturedProductCard = () => {
  return (
    <div>
      <article className="mb-4">
        <div>
          <img
            className="w-full h-[30vh] object-cover object-center mb-4"
            src="https://res.cloudinary.com/yheenca/image/upload/v1669896798/artsy/product/4764a7daa106cda4888b058654d2bf6f_b5w6au.jpg"
            alt="Image"
          />
        </div>
        <h3 className="font-stix font-bold text-fs-80 hidden">
          The Boolean Egyptian
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          totam vel fugiat animi inventore consectetur repudiandae earum. Dolore
          cupiditate nisi magnam iure accusantium beatae sit eveniet quas, aut,
          tempore totam!
        </p>
      </article>
    </div>
  );
};

export default FeaturedProductCard;
