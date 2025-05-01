const CardProfile = (props) => {
  const { image, name, position, description, rating } = props;
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:gap-4">
      <div className="border border-gray-200 rounded-xl px-3 py-3">
        <div className="flex justify-between items-center lg:justify-start lg:gap-5">
          <p className="">{image}</p>
          <div>
            <p className="font-semibold md:text-lg">{name}</p>
            <p className="md:text-lg">{position}</p>
          </div>
        </div>
        <p className="pt-3 md:text-lg">{description}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default CardProfile;
