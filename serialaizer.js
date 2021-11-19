

function Input() {
  (this.k = 0),
    (this.sum = []),
    (this.mult = []),
    (this.serializer = function (type, obj) {
      const objFromJson = JSON.parse(obj);
      this.k = objFromJson.K;
      this.sum = objFromJson.Sums;
      this.mult = objFromJson.Muls;
    });
}

var toXML = window.jstoxml.toXML;

fetch('http://localhost:3000/get/', { mode: 'no-cors',  headers: { "Access-Control-Allow-Origin": "http://localhost:3000/get/" }}, )
  .then((response) => {
    console.log(response.json());
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const a = new Input();
a.serializer(

);

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

    return JSON.stringify({
      SumResult: this.sumResult,
      MulResult: this.mulResult,
      SortedInputs: this.sorted,
    });
  };
}

const b = new Output();

console.log(b.deserializer());
