const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('../utils/list_helper')

const BlogHandler = require('../models/blog')

const api = supertest(app)

beforeEach(async ()=>{

    await BlogHandler.Blog.deleteMany({})

    let singleBlog = new Blog(helper.someBlogs[0])
    await singleBlog.save()

    singleBlog = new Blog(helper.someBlogs[1])
    await singleBlog.save()


} )

test('Blogs return as JSON', async () =>{

    await api
        .get('http://localhost:3003/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

})

test('The right number of blogs are returned', async () => {

    const res = await api.get('http://localhost:3003/api/blogs')

    expect(res.body.length).toBe(2)
})