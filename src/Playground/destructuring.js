// const person = {
//   name: 'omar',
//   age: 38,
//   location: {
//     city: 'Miami',
//     state: 'Florida'
//   }
// }

// const { name, age, location } = person;

// console.log(name)
// console.log(age)
// console.log(location)
// console.log(location.city)
// console.log(location.state)

// const book = {
//   title: 'ego is the enemy',
//   author: 'Ryan hollyday',
//   publisher: {
//     // name: 'penguin'
//   }
// }

// const { name: publisherName = 'jose' } = book.publisher;

// // console.log(publisher.name)


// console.log(publisherName)

// const address = ['1545 NW 15th st rd', '908', 'Miami', 'FL', '33125']
// const [stree,apt,city,state,zip] = address

const order = ['Coffe (hot)', 2.00, 2.50, 2.75]
const [coffeHot, small, medium, large] = order;

console.log(`${coffeHot} costs ${medium} `)