require('dotenv').config()
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//user Model 
const User = require('../models/User')
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})



// @route POST /auth
// @des Login user
// @access Public


router.post('/',
  [  check('email', 'Please provide an email').not().isEmpty(),
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Please provide the password').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: 'Check your email and password or create an account.' })
    }
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }
      // match password with bcrypt
      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      // sign a jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      }
      jwt.sign(payload, process.env.SECRET, {
        expiresIn: 3600
      },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )

    } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
    }

  })


// @route Get /auth
// @des Get user
// @access Private




module.exports = router