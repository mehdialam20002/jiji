export function validateQuery(query) {
  if (!query || query.trim() === "") {
    return false;
  }
  return true;
}
