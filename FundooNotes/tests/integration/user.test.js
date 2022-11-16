/*
import { expect } from 'chai';
import {mocha} from 'mocha';
import request from 'supertest';
import HttpStatus from 'http-status-codes';
//import app from '../../src/index';
import app from '../../src/index';
//import {faker} from 'faker';

let token;
let NewjwtToken ;

/*
// 1 testCase
describe('userRegistration', ()=>{
  const inputBody={
    "firstName":"sachin",
    "lastName":"waghmare",
    "email":"sachin@gmail.com",
    "password":"358035800"
  };
  it('Data is available in db',(done)=>{
    request(app)
    .post('/api/v1/users/register')

    .send(inputBody)
    .end((err,res)=>{
     // console.log('data===>',res.data)
      expect(res.statusCode).to.be.equal(201);
      done();
    
    });
  });
  */

  //2.Invalid user registration data
/*
describe('userRegistration', ()=>{
  const inputBody={
    "firstName":"s",
    "lastName":"wag",
    "email":"sachin@gmail.com",
    "password":"358035800"
  };
it('check your details',(done)=>{
  request(app)
  .post('/api/v1/users/register')

  .send(inputBody)
  .end((err,res)=>{
   // console.log('data===>',res.data)
    expect(res.statusCode).to.be.equal(500);
    done();
  
  });
 });
});
*/

// 3.user login
  /*
  describe('userlogin', ()=>{
  it('userLogin', ()=>{
    const inputBody={
      "email":"kundanvkamble1@gmail.com",
      "password":"35803580"
    };
    it('info is in db',(done)=>{
      request(app)
      .post('/api/v1/users/login')
      .send(inputBody)
      .end((err,res)=>{
        token = res.body.data;
        //console.log('data===>',res.data)
        expect(res.statusCode).to.be.equal(201);
        done();
      
      });
    }); 
    it('invalid email or password',(done)=>{
      request(app)
      .post('/api/v1/users/login')
      .send(inputBody)
      .end((err,res)=>{
        //console.log('data===>',res.data)
        expect(res.statusCode).to.be.equal(500);
        done();
      
      });
    }); 
  });
});
*/

// 4.invalid user login detail
/*
describe('userlogin', ()=>{
  it('userLogin', ()=>{
    const inputBody={
      "email":"kundanv@gmail.com",
      "password":"3580358"
    };
    it('invalid email or password',(done)=>{
      request(app)
      .post('/api/v1/users/login')
      .send(inputBody)
      .end((err,res)=>{
        //console.log('data===>',res.data)
        expect(res.statusCode).to.be.equal(500);
        done();
      
      });
    }); 
  });
});
*/
// 2. testCase
/*
it('userLogin', ()=>{
  const inputBody={
    "email":"kundanvkamble1@gmail.com",
    "password":"35803580"
  };
  it('info is in db',(done)=>{
    request(app)
    .post('/api/v1/users/login')
    .send(inputBody)
    .end((err,res)=>{
      expect(res.statusCode).to.be.equal(201);
      done();
    
    });
  });
});



// create notes
describe('POST/create note', ()=>{
  it('create notes and should return 200 status', ()=>{
    const inputBody={
      Title:"node js",
      Description:" nodejs description",
      color:"blue"
    };
    it('info is in db',(done)=>{
      request(app)
      .post('/api/v1/notes/addNote')
      .set('Athorization',`Bearer ${token}`)
      .send(inputBody)
      .end((err,res)=>{
        note_id = res.body.data._id;
        //console.log('data===>',res.data)
        expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
        done();
      
      });
    }); 
  });
});
*/