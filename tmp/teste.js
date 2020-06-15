const fs = require('fs')

const path = 'C:/Users/sdiaj/Documents/www/BackendNTW/tmp/uploads/'

try {
  fs.unlinkSync(path+'cdfaaa8f6054efee8734ddf7b47eeafc-aoc22p1e.png')
  //file removed
} catch(err) {
  console.error(err)
}