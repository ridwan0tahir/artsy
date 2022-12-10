const ProductCard = () => {
  return (
    <>
      <div
        className="h-[40vh] min-h-[17.5rem] mb-3 md:max-h-[17.5rem] 
        md:rounded-lg md:overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/yheenca/image/upload/v1669896997/artsy/product/f6d7e37a86a9d1d440e978343a94d1f0_naflow.jpg"
          alt="Collection"
        />
      </div>

      <p className="flex justify-between items-center md:flex-col md:gap-5 md:items-start">
        BOOLEAN EGYPTIAN <span>$21.00</span>
      </p>
    </>
  );
};

export default ProductCard;
