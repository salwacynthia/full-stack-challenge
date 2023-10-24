// !Challenge: Epic Unit-Test
import {  Subject } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { createUserSuccess, createUserFailure } from 'Domain/Action/User/UserAction';
import { createUserEpic } from './CreateUserEpic';
import { MailService } from 'Domain/Service/MailService/MailService';
import { UserModel } from 'Domain/Model/User/UserModel';

//empty 


describe('CreateUserEpic', () => {
  it('should return CreateUserSuccess Action on Success', (done) => {
    // Arrange: Set up any necessary dependencies or test data
    const action$ = new ActionsObservable.of(new Subject());
    const epicDependencies = {
      UserRepository: { 
        // Mock UserRepository methods for a successful user creation
        allUsers: [] ,
        createUser: (payload) => {
          return Promise.resolve({
            email : payload.email,
            name: payload.name,
            createdAt: new Date().getTime(),
          })
        },
        
        findUser : (payload) => {
          return Promise.resolve({
            page : payload.page,
            take :payload.take
          })
        } 
      },
      MailService : new MailService()
    };


    // Act: Invoke the CreateUserEpic with your test data
    createUserEpic(action$, null, epicDependencies)
      .subscribe((action) => {
        // Assert: Check if the CreateUserEpic produces the expected output
        expect(action).toEqual(createUserSuccess());
        done();
      });
  });

  it('should return CreateUserFailure Action on Failure', (done) => {
    // Arrange: Set up any necessary dependencies or test data
    const action$ = new ActionsObservable.of(new Subject());
    //const state$ = empty();
    const epicDependencies = {
      UserRepository: {
        // Mock UserRepository methods for a successful user creation
        allUsers: [] ,
        createUser: () => Promise.resolve(),
        findUser : () => Promise.resolve()
      },
      MailService : new MailService()
    };

    // Act: Invoke the CreateUserEpic with your test data
    createUserEpic(action$, null, epicDependencies)
      .subscribe((action) => {
        // Assert: Check if the CreateUserEpic produces the expected output
        expect(action).toEqual(createUserFailure({payload : 'name/email not matching'}));
        done();
      });
  });
});





