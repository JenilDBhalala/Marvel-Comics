interface CharacterCardProps {
  characterData: IComicCharacter;
}

const CharacterCard = ({ characterData }: CharacterCardProps) => {
  return (
    <div className="card w-80 glass hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-lg">
      <figure>
        <img
          className="w-screen h-full"
          src={
            characterData?.thumbnail?.path +
            "/standard_fantastic." +
            characterData?.thumbnail?.extension
          }
          alt="Character"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{characterData?.name}</h2>
        <p className=" whitespace-normal line-clamp-2">
          {characterData?.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn text-white bg-green-700 hover:bg-green-800">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
