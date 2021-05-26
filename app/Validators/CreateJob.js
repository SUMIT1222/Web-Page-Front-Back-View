'use strict'

class CreateJob {
  get rules () {
    return {
      username: 'required',
      
    }
  }
  get messages() {
    return {
      'required': 'user name, the {{ field }} is required.'
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)
      .flashAll();
    
    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateJob