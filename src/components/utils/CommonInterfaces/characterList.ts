interface IComicCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
  comics: IComics;
  series: IComics;
  stories: IStories;
  events: IComics;
  urls: IUrl[];
}

interface IUrl {
  type: string;
  url: string;
}

interface IStories {
  available: number;
  collectionURI: string;
  items: IStoryItem[];
  returned: number;
}

interface IStoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface IComics {
  available: number;
  collectionURI: string;
  items: IComicItem[];
  returned: number;
}

interface IComicItem {
  resourceURI: string;
  name: string;
}

interface IThumbnail {
  path: string;
  extension: string;
}