import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { dropDatabase } from 'test/helpers/drop-database.helpers';
import { bootstrapNestApplication } from 'test/helpers/bootstrap-nest-application.helper';
import { completeUser, missingEmail, missingFirstName, missingPassword } from './users.post.e2e-spec.sample-data';
import { App } from 'supertest/types';

describe('[Users] @Post Endpoints', () => {
  let app: INestApplication;
  let config: ConfigService;
  let httpServer: App;

  beforeEach(async () => {
    app = await bootstrapNestApplication();
    config = app.get<ConfigService>(ConfigService);
    httpServer = app.getHttpServer();
  });

  afterEach(async () => {
    await dropDatabase(config);
    await app.close();
  });

  it('/users - Endpoint is public', () => {
    return request(httpServer)
      .post("/users")
      .send({})
      .expect(400);
  });

  it('/users - firstName is mandatory', () => {
    return request(httpServer)
      .post("/users")
      .send(missingFirstName)
      .expect(400);
  });

  it('/users - email is mandatory', () => {
    return request(httpServer)
      .post("/users")
      .send(missingEmail)
      .expect(400);
  });

  it('/users - password is mandatory', () => {
    return request(httpServer)
      .post("/users")
      .send(missingPassword)
      .expect(400);
  });

  it('/users - Valid request successfully creates user', () => {
    return request(httpServer)
      .post("/users")
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body).toBeDefined();
        expect(body.data.firstName).toBe(completeUser.firstName);
        expect(body.data.lastName).toBe(completeUser.lastName);
        expect(body.data.email).toBe(completeUser.email);
      });
  });

  it('/users - password is not returned in response', () => {
    return request(httpServer)
      .post("/users")
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body.data.password).toBeUndefined();
      });
  });

  it('/users - googleId is not returned in response', () => {
    return request(httpServer)
      .post("/users")
      .send(completeUser)
      .expect(400)
      .then(({ body }) => {
        expect(body.data.googleId).toBeUndefined();
      });
  });

  // it.todo('/users - googleId is not returned in response');
});