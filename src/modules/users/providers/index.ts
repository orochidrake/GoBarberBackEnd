import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvides from './HashProvider/implementations/BCryptHashProvides';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvides);
