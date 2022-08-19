// export type AppState = {
//   isAuthorised: boolean;
// };
export interface Word {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  textExampleTranslate: string
  textMeaningTranslate: string
  wordTranslate: string
}
export interface Assets {
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
}

export type ObjType = {
  [key: string]: string
}

export enum Path {
  words = '/words',
  users = '/users',
  aggregatedWords = '/aggregatedWords',
  statistics = '/statistics',
  settings = '/settings',
  signin = '/signin',
  tokens = '/tokens',
};

export enum Method {
  get = 'GET',
  create = 'POST',
  update = 'PUT',
  delete = 'DELETE',
  engineStatus = 'PATCH',
};
