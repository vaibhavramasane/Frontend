// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); 
/* output : { id: '123abc', name: 'Sammy', isLoggedIn: false } */


const regularUser = {
    email: "Reddy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vaibhav",
            lastname: "Reddy"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //vaibhav
console.log(regularUser.fullname.userfullname.lastname); //Reddy

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 } //o/p: / { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign({}, obj1, obj2, obj4) o/p : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//const obj3 = {...obj1, ...obj2} // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3); 


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
//  console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Code with vaibhav",
    price: "07",
    courseInstructor: "vaibhav"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor); //op: vaibhav
