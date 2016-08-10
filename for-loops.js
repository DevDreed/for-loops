for (var i = 5; i <= 120; i += 10) {
    console.log("Current value is " + i);
}

for (let i = 4096; i > 1; i /= 2) {
    console.log("Current value is " + i);
}

var presidents = ["George Washington",
    "John Adams",
    "Thomas Jefferson",
    "James Madison",
    "James Monroe",
    "John Quincy Adams",
    "Andrew Jackson",
    "Martin Van Buren",
    "William Henry Harrison",
    "John Tyler",
    "James K. Polk",
    "Zachary Taylor",
    "Millard Fillmore",
    "Franklin Pierce",
    "James Buchanan",
    "Abraham Lincoln",
    "Andrew Johnson",
    "Ulysses S. Grant",
    "Rutherford B. Hayes",
    "James Garfield",
    "Chester Arthur",
    "Grover Cleveland",
    "Benjamin Harrison",
    "Grover Cleveland",
    "William McKinley",
    "Theodore Roosevelt",
    "William Howard Taft",
    "Woodrow Wilson",
    "Warren Harding",
    "Calvin Coolidge",
    "Herbert Hoover",
    "Franklin D. Roosevelt",
    "Harry Truman",
    "Dwight Eisenhower",
    "John F. Kennedy",
    "Lyndon Johnson",
    "Richard Nixon",
    "Gerald Ford",
    "Jimmy Carter",
    "Ronald Reagan",
    "George Bush",
    "Bill Clinton",
    "George W. Bush",
    "Barack Obama"
]

for (x = 0; x < presidents.length; x++) {
    console.log("President #" + (x + 1) + " was " + presidents[x]);
}

var antSpecies = {
    argentine: {},
    army: {},
    bigHeaded: {},
    black: {},
    bull: {},
    carpenter: {},
    crazy: {},
    fire: {},
    glider: {},
    honeyPot: {},
    jackJumper: {}
}

for (let ant in antSpecies) {
    console.log(ant);
}
