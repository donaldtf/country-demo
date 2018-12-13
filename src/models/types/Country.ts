import Language from './Language';

type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  currency: Language;
  emoji: string;
};

export default Country;
