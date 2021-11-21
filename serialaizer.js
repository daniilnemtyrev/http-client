const fetchInputData = async () => {
  const response = await fetch("http://localhost:3000/get/");
  const data = await response.json();
  return data;
};

const sendOutputData = async (obj) => {
  await fetch("http://localhost:3000/writeAnswer/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(obj),
  });
};

function Input() {
  (this.k = 0),
    (this.sum = []),
    (this.mult = []),
    (this.serializer = async function () {
      const objFromJson = await fetchInputData();
      this.k = objFromJson.K;
      this.sum = objFromJson.Sums;
      this.mult = objFromJson.Muls;
    });
}

var toXML = window.jstoxml.toXML;

const a = new Input();
a.serializer();
console.log(a);

function Output() {
  (this.sumResult = 0), (this.mulResult = 0), (this.sorted = []);
  this.deserializer = function () {
    this.sumResult = +(
      a.sum.reduce((prevValue, curValue) => prevValue + curValue) * a.k
    ).toFixed(2);
    this.mulResult = +a.mult
      .reduce((prevValue, curValue) => prevValue * curValue)
      .toFixed(2);
    this.sorted = a.sum.concat(a.mult).sort((a, b) => a - b);

    sendOutputData({
      SumResult: this.sumResult,
      MulResult: this.mulResult,
      SortedInputs: this.sorted,
    });
  };
}

const b = new Output();

console.log(b.deserializer());
