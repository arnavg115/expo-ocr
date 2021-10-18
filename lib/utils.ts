export async function uuidGen() {
  const resp = await fetch("https://www.uuidtools.com/api/generate/v4");
  const js = await resp.json();
  return js[0];
}
