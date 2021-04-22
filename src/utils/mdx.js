const findAfterKeyIndex = (string) => string.match(/(?<!"):(?=\s)/)?.index;

const findBeforeKeyIndex = (string) => string.match(/(?<=\s)\s(?=\w)/)?.index;

const insertQuotationMark = (string, index) =>
  string.slice(0, index) + '"' + string.slice(index, string.length);

const wrapKeyInQuotes = (string, beforeKeyIdx, afterKeyIdx) =>
  insertQuotationMark(
    insertQuotationMark(string, afterKeyIdx),
    beforeKeyIdx + 1
  );

const stringToObject = (string) => {
  // Find index of before and after the first found key without quotes
  const afterKeyIdx = findAfterKeyIndex(string);
  const beforeKeyIdx = findBeforeKeyIndex(string);

  if (afterKeyIdx > -1 && beforeKeyIdx > -1) {
    // Recursively wrap all keys in quotes if they are missing.
    return stringToObject(wrapKeyInQuotes(string, beforeKeyIdx, afterKeyIdx));
  } else {
    // If no keys without quotes remain, remove trailing comma of last field and return.
    return JSON.parse(string.replace(/(?<="),\n(?=})/, ""));
  }
};

export const getMetaObjectFromSource = (source) =>
  stringToObject(
    source.substring(source.indexOf("meta = {") + 7, source.indexOf("}") + 1)
  );
