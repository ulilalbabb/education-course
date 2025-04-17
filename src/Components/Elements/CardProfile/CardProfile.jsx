const CardProfile = (props) => {
  const { image, name, position, description } = props;
  return (
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-4">
          <div className="border border-gray-200 rounded-xl px-3 py-3">
            <div className="flex justify-between lg:justify-start lg:gap-5">
              <p>{image}</p>
              <div>
                <p className="font-semibold">{name}</p>
                <p>{position}</p>
              </div>
            </div>
            <p className="pt-3">{description}</p>
          </div>
        </div>        
  );
};

export default CardProfile;