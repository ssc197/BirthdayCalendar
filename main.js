var jsondata = [
  {
    name: "Tyrion Lannister",
    birthday: "12/12/1984",
  },
  {
    name: "Cersei Lannister",
    birthday: "11/30/1975",
  },
  {
    name: "Daenerys Targaryen",
    birthday: "11/24/1991",
  },
  {
    name: "Arya Stark",
    birthday: "11/25/1996",
  },
  {
    name: "Jon Snow",
    birthday: "12/03/1989",
  },
  {
    name: "Sansa Stark",
    birthday: "15/08/1992",
  },
  {
    name: "Jorah Mormont",
    birthday: "12/16/1968",
  },
  {
    name: "Jaime Lannister",
    birthday: "12/06/1975",
  },
  {
    name: "Sandor Clegane",
    birthday: "11/07/1969",
  },
  {
    name: "Tywin Lannister",
    birthday: "10/12/1951",
  },
  {
    name: "Theon Greyjoy",
    birthday: "12/31/1989",
  },
  {
    name: "Samwell Tarly",
    birthday: "12/07/1990",
  },
  {
    name: "Joffrey Baratheon",
    birthday: "06/12/1992",
  },
  {
    name: "Catelyn Stark",
    birthday: "12/03/1962",
  },
  {
    name: "Bran Stark",
    birthday: "12/02/1995",
  },
  {
    name: "Petyr Baelish",
    birthday: "11/20/1974",
  },
  {
    name: "Robb Stark",
    birthday: "11/28/1986",
  },
  {
    name: "Brienne of Tarth",
    birthday: "11/27/1985",
  },
  {
    name: "Margaery Tyrell",
    birthday: "12/02/1989",
  },
  {
    name: "Stannis Baratheon",
    birthday: "09/14/1971",
  },
  {
    name: "Davos Seaworth",
    birthday: "02/13/1973",
  },
  {
    name: "Tormund Giantsbane",
    birthday: "12/14/1974",
  },
  {
    name: "Jeor Mormont",
    birthday: "11/01/1955",
  },
  {
    name: "Eddard Stark",
    birthday: "12/02/1963",
  },
  {
    name: "Khal Drogo",
    birthday: "12/05/1980",
  },
  {
    name: "Ramsay Bolton",
    birthday: "12/05/1976",
  },
  {
    name: "Robert Baratheon",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Sajeed Shaikh",
    birthday: "1/02/1984",
  },
  {
    name: "Daario Naharis",
    birthday: "6/02/1985",
  },
  {
    name: "Viserys Targaryen",
    birthday: "12/06/1984",
  },
];

var currentWeek = 1;
var currentMonth = 0;
var yearEndMonth = 0;
var year = 1984;
let newArray = [];
const getInitials = (name) => {
  var initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
};

const getRandomColor = () => {
  var r = function () {
    return Math.floor(Math.random() * 256);
  };

  return "rgb(" + r() + 100 + "," + r() + "," + r() + ")";
};

const getWeek = (date) => {
  var _date = new Date(date);
  console.log(_date.getMonth());
  var firstmonth = new Date(_date.getFullYear(), 0, 1);
  console.log(firstmonth);
  var lastMonth = new Date(
    _date.getFullYear(),
    _date.getMonth(),
    _date.getDate()
  );
  console.log(lastMonth);

  var dayOfYear = (lastMonth - firstmonth + 86400000) / 86400000;
  return Math.ceil(dayOfYear / 7);
};
const prevWeek = () => {
  if (currentWeek > 1) {
    currentWeek = currentWeek - 1;
    printWeek();
  }
};
const nextWeek = () => {
  console.log(yearEndMonth);
  console.log(currentWeek);
  if (yearEndMonth > currentWeek) {
    currentWeek = currentWeek + 1;
    printWeek();
  }
};
const printWeek = () => {
  console.log(currentWeek);
  const weeklyCard = document.querySelectorAll(".weeklyCard");
  [].forEach.call(weeklyCard, function (_div) {
    // do whatever
    _div.querySelector(".weeklyCardPills").innerHTML = "";
  });
  console.log(newArray);
  const weeklyData = newArray.filter((data) => data.week == currentWeek);
  console.log(weeklyData);
  weeklyData.map((data) => {
    let bdcard = document.createElement("span");
    bdcard.classList.add("bdcard");
    bdcard.innerText = data.initials;
    document
      .querySelector(
        ".weeklyBox .weeklyCard:nth-child(" + data.day + ") .weeklyCardPills"
      )
      .appendChild(bdcard).style.backgroundColor = getRandomColor();
      
  });
  [].forEach.call(weeklyCard, function (_div) {
    // do whatever
    _div.querySelector(".weeklyCardPills").style.height =
      _div.querySelector(".weeklyCardPills").offsetWidth + "px";
    var bdcard = _div.querySelectorAll(".weeklyCardPills .bdcard");
    if(bdcard.length){
      var _sqrt = Math.ceil(Math.sqrt(bdcard.length));
      console.log("sqrt", _sqrt);
      let dimension = 100 / _sqrt + "%";
      console.log(bdcard.length);
  
      [].forEach.call(bdcard, function (_bdcard) {
        _bdcard.style.height = dimension;
        _bdcard.style.width = dimension;
      });
    }
    else{
      let smiley = document.createElement('span');
      smiley.classList.add('smiley');
      smiley.innerText="😕";
      _div.querySelector('.weeklyCardPills').appendChild(smiley)
    }
  });
};

function setNewData() {
  year = parseInt(document.querySelector("#yearData").value);
  newArray = [];
  if (!jsondata) {
    jsondata = document.querySelector("#jsonbd").value;
    jsondata = JSON.parse(jsondata);
  }

  jsondata.map((data, index) => {
    if (new Date(data.birthday).getFullYear() == year) {
      newArray.push({
        ...data,
        initials: getInitials(data.name),
        month: new Date(data.birthday).getMonth(),
        week: getWeek(data.birthday),
        date: new Date(data.birthday).getDate(),
        day: new Date(data.birthday).getDay(),
      });
    }
  });
  console.log(newArray);
  yearEndMonth = getWeek(new Date(year, 11, 31));
  currentWeek = getWeek(
    new Date(year, document.querySelector("#month").value, 1)
  );
  currentMonth = document.querySelector("#month").value;
  printWeek();
}
setNewData();
