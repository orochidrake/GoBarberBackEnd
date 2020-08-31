import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import IMailProvider from './models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvides from './implementations/SESMailProvides';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvides),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
