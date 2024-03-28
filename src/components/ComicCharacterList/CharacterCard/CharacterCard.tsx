import "./CharacterCard.scss";
interface CharacterCardProps {
  characterData: IComicCharacter;
}

const CharacterCard = ({ characterData }: CharacterCardProps) => {
  return (
    <div className="border-solid border-slate-400 border card mx-8 md:mx-0 md:w-56 glass hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-lg">
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
      <div className="card-body pb-4">
        <h2 className="card-title">{characterData?.name}</h2>
        <p className=" whitespace-normal line-clamp-2">
          {characterData?.description}
        </p>
      </div>
      <div className="card-actions w-full justify-end p-4">
        <button className="btn min-h-0 h-10 text-[#1e293b] bg-indigo-100 hover:bg-indigo-200 border-[#e5e7eb]">
          View
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
