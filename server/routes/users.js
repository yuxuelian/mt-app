// 用户 model
const Users = require('../dbs/models/users')
// redis
const redisCli = require('../redis-cli')
// node发送邮件
const nodeMailer = require('nodemailer')
// 路由
const Router = require('koa-router')
const router = Router({
  prefix: '/users'
})
// 注册
router.post('/signup', async (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body
  if (code) {
    const saveCode = await redisCli.get(`verify-${email}`)
    console.log(`saveCode = ${saveCode}`)
    if (saveCode && saveCode === code) {
      // 验证成功
      ctx.body = {
        code: 0,
        message: '验证成功'
      }
    } else {
      // 验证码不正确
      ctx.body = {
        code: 0,
        message: '验证码不正确'
      }
    }
  } else {
    //
  }
})
// 登录
router.post('/signin', async (ctx) => {
})
// 发送 邮箱验证码 接口
router.get('/verify', async (ctx) => {
  const email = ctx.request.query.email
  const randomCode = Math.random().toString(10).slice(2, 8)
  // 发送邮件
  const transporter = nodeMailer.createTransport({
    host: 'smtp.qq.com',
    port: 587,
    secure: false,
    auth: {
      user: '568966289@qq.com',
      pass: 'wkdndyngguwsbfdg'
    }
  })
  const mailOptions = {
    from: `568966289@qq.com`,
    to: email,
    subject: '验证码注册',
    html: `你的验证码是: ${randomCode}`
  }
  // 发送邮件
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
  // 将验证码存储到redis 并设置60s过期时间
  await redisCli.set(`verify-${email}`, randomCode, 'EX', 60)
  ctx.body = {
    code: 0,
    message: '验证码发成功'
  }
})
// 退出登录接口
router.get('/exit', async (ctx) => {
})
// 获取登录用户信息接口
router.get('/getUser', async (ctx) => {
})
// 测试接口
router.get('/json', async (ctx) => {
  ctx.cookies.set('pvid', Math.random())
  ctx.session.jsonCount++
  ctx.body = {
    title: 'koa2 json'
  }
})
router.post('/addUser', async function (ctx) {
  const reqBody = ctx.request.body
  const queryName = ctx.request.body.name
  const queryAge = ctx.request.body.age
  const person = new Users({
    name: queryName,
    age: queryAge,
  })
  try {
    await person.save()
    ctx.body = {
      code: 0,
      reqBody: reqBody,
      data: person
    }
  } catch (e) {
    console.log(e)
    ctx.body = {
      code: -1,
      data: null
    }
  }
})
module.exports = router
