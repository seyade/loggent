export function truncate(str, length, ending) {
  let end = ending || '...',
    newString = null;

  if (str.length > length) {
    newString = str.substring(0, length) + end;
  } else {
    newString = str;
  }

  return newString;
}
