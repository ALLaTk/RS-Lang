import { MixWordsAudio, MixWordsSprint, Word } from "../../types";

export const getMixWordsForSprint = (wordsArr: Word[]): MixWordsSprint[] => {
  const res = wordsArr.map((w, i) => {
    if (Math.random() < 0.5) {
      return { audio: w.audio, en: w.word, ru: w.wordTranslate, match: true };
    } 

    const newIdx: number = Math.floor(Math.random() * wordsArr.length);
    const match: boolean = newIdx === i;

    return {
      audio: w.audio,
      en: w.word,
      ru: wordsArr[newIdx].wordTranslate,
      match,
    };
    
  });
  
  return res;
}

const shuffle = (array: string[]): string[] =>  array.sort(() => Math.random() - 0.5);

const sortRandom = (array: MixWordsAudio[]): MixWordsAudio[] =>  array.sort(() => Math.random() - 0.5);

export const getMixWordsForAudio = (wordsArr: Word[]): MixWordsAudio[] => {

  const res = wordsArr.map((w) => {

    const randomArr: string[] = [w.wordTranslate];
    if(wordsArr.length > 5) { 
      while (randomArr.length < 5) {
        const newIdx: number = Math.floor(Math.random() * wordsArr.length);
        if (!randomArr.includes(wordsArr[newIdx].wordTranslate)) {
          randomArr.push(wordsArr[newIdx].wordTranslate)
        }
      }
    } else {
      while (randomArr.length < wordsArr.length) {
        const newIdx: number = Math.floor(Math.random() * wordsArr.length);
        if (!randomArr.includes(wordsArr[newIdx].wordTranslate)) {
          randomArr.push(wordsArr[newIdx].wordTranslate)
        }
      }
    }
    return {
      image: w.image,
      audio: w.audio,
      en: w.word,
      tr: w.transcription,
      ru: w.wordTranslate,
      ruRandom: shuffle(randomArr), 
      };
    
  });
  
  return res.length >= 10 ? sortRandom(res.slice(0, 10)) : res;
}
