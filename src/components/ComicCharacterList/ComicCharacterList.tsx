import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import supabaseConnection from "../../db/supabaseDB";
import CharacterCard from "./CharacterCard/CharacterCard";
import CharacterCardSkeleton from "./CharacterCard/CharacterCardSkeleton";

interface ContentProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Content = ({ searchQuery, setSearchQuery }: ContentProps) => {
  const [pageCount, setPageCount] = useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [charactersData, setCharactersData] = useState<IComicCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchData = setTimeout(() => {
      getCharacterList();
    }, 1000);
    return () => clearTimeout(fetchData);
  }, [itemOffset, searchQuery]);

  const getCharacterList = async () => {
    try {
      setLoading(true);
      const {
        data: characterList,
        status,
        count,
        error,
      } = await supabaseConnection
        .from("CharacterList")
        .select("*", { count: "exact" })
        .range(itemOffset, itemOffset + itemsPerPage - 1)
        .ilike("name", `%${searchQuery}%`);
      if ([200, 206].includes(status)) {
        setLoading(false);
        setCharactersData(characterList as IComicCharacter[]);
        setTotalDataLength(count as number);
        setPageCount(Math.ceil((count as number) / itemsPerPage));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event?.selected * itemsPerPage) % totalDataLength;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-y-5 mx-3.5">
        {loading ? (
           Array.from({ length: itemsPerPage }).map((_, index) => (
            <CharacterCardSkeleton key={index} />
          ))
        ) : (
          charactersData?.map((characterData: any) => (
            <CharacterCard
              key={characterData?.id}
              characterData={characterData}
            />
          ))
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex flex-wrap justify-center space-x-2 my-6"
        activeClassName={"px-3 py-2 rounded-full bg-gray-400 text-black "}
        previousClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
        nextClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
        pageClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
      />
    </>
  );
};

export default Content;
