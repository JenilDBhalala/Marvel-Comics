import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { axiosGet } from "../utils/helper";

interface ContentProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Content = ({ searchQuery, setSearchQuery }: ContentProps) => {
  const [pageCount, setPageCount] = useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [charactersData, setCharactersData] = useState<any>([]);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const createURL = () => {
    // Get the current timestamp

    // Create a new URLSearchParams object and set the necessary query parameters
    let params: any = {
      limit: 12,
      offset: itemOffset,
    };
    if (searchQuery) {
      params.nameStartsWith = searchQuery;
    }

    return params;
  };
  const getData = async () => {
    const url = createURL();
    try {
      const response:any = await axiosGet(url, "/v1/public/characters?");
      setCharactersData(response?.data?.data?.results);
      setTotalDataLength(response?.data?.data?.total);
      setPageCount(Math.ceil(response?.data?.data?.total / itemsPerPage));
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  useEffect(() => {
    const fetchData = setTimeout(() => {
      getData();
    }, 1000);
    return () => clearTimeout(fetchData);
  }, [itemOffset, searchQuery]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % totalDataLength;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap justify-around gap-y-5">
        {charactersData?.map((characterData: any) => (
          <div key={characterData?.id} className="card w-80 glass">
            <figure>
              <img
                className="w-screen h-full"
                src={
                  characterData.thumbnail?.path +
                  "/standard_fantastic." +
                  characterData.thumbnail?.extension
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
        ))}
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
