//destructure of objects
const course = {
    course_name : " Javascript",
    course_fee : 999,
    course_instructor : "abc"
}

const {course_instructor} = course
console.log(course_instructor); // another syntax of accessing the keys in the object
// to reanme the into something short then the syntax will be
// const {course_instructor : intructor} = course