const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    // In here we must determine if the current img is the currently selected shoe img,
    // meaning we have to change the styles dynamically to either add/remove the border
    // from the currently selected img.
    <div
      className={`border-2 
    rounded-xl
      ${
        bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center
      sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail}
        alt="shoe collection"
        width={127}
        height={103}
        className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;
