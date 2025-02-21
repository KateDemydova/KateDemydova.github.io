<<<<<<< HEAD
=======

let unused = 'unused'
console.log(unused)
>>>>>>> 601b0c7 (webpack фadvanced)
export default class Post {
  constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
  }

  toString() {
    return JSON.stringify({
<<<<<<< HEAD
      title: this.title,
      img: this.img,
      date: this.date.toJSON()
    })
=======
      date: this.date.toJSON(),
      img: this.img,
      title: this.title
    }, null, 2)
>>>>>>> 601b0c7 (webpack фadvanced)
  }
}