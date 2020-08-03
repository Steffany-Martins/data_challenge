//if has api
const xlabels = [];
const ytemps = [];
async function getData() {
  const response = await fetch("");
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const columns = row.split(",");
    const year = columns[0];
    xlabels = push(year);
    const temp = columns[1];
    ytemps.push(temp);
  });
}
export default getData;
