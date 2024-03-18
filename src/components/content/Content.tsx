import md5 from "md5";
import { useEffect, useState } from "react";
import configData from "../../../config.json";
import ReactPaginate from "react-paginate";

const Content = () => {
  const publicKey = configData["PUBLIC_KEY"];
  const privateKey = configData["PRIVATE_KEY"];
  const baseURL = configData["BASE_URL"];
  const [pageCount, setPageCount] = useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0)
  const [charactersData, setCharactersData] = useState<any>([]);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const createURL = () => {
    // Get the current timestamp
    const ts = Date.now();

    // Create a new URLSearchParams object and set the necessary query parameters
    const params = new URLSearchParams({
      ts: ts.toString(),
      apikey: publicKey,
      hash: md5(ts.toString() + privateKey + publicKey), // Generate hash for authentication
      limit: 12,
      offset:itemOffset
    } as any);

    // Construct the endpoint URL for searching comics with the query parameters
    const endpoint = `${baseURL}/v1/public/characters?`;

    // Combine the endpoint URL with the query parameters to form the complete API request URL
    const url = endpoint + params;

    return url;
  };

  useEffect(() => {
    const getData = async () => {
      const url = createURL();
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharactersData(data?.data?.results);
        setTotalDataLength(data?.data?.total);
        setPageCount(Math.ceil(data?.data?.total / itemsPerPage));
      } catch (error: any) {
        console.log(error?.message);
      }
    };
    getData();
  }, [itemOffset]);


  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    console.log("event", event);
    console.log('totalDataLength', totalDataLength)
    const newOffset = (event.selected * itemsPerPage) % totalDataLength;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap justify-around gap-y-5">
        {charactersData.map((characterData: any) => (
          <div key={characterData?.id} className="card w-80 glass">
            <figure>
              <img
                className="w-screen"
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
        containerClassName="flex flex-wrap justify-center space-x-2 mt-4"
        activeClassName={"px-3 py-2 rounded-full bg-gray-400 text-black "}
        previousClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
        nextClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
        pageClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
      />
    </>
  );
};

export default Content;
