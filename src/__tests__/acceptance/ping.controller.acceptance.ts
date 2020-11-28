import {Client, expect} from '@loopback/testlab';
import {BoothbyApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PingController', () => {
  let app: BoothbyApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /api/ping', async () => {
    const res = await client.get('/api/ping?msg=world').expect(200);
    expect(res.body).to.containEql({greeting: 'Hello from Boothby'});
  });
});