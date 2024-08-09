const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoeImage) {
        changeBigShoeImage(imgURL.bigShoeImage);
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
        <div>
          {/* imgURL.thumbnail???? */}
          <img src={imgURL} />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  