import '../../config/db.mjs'
import User from "../../models/userModel.mjs";

const newUser = new User({name: 'Alice Dean', age: 28, email: 'alice@example.com'})

newUser
  .save()
  .then((doc) => console.log('Новий користувач доданий:', doc))
  .catch((err) => console.error('Помилка при додаванні користувача:', err))
