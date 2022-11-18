import { FC } from 'react';
import { useLanguage } from 'features/language/index';
import { LanguageButtonSpanish, LanguageButtonEnglish, LanguageButtonPortuguese} from './language.styles';

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className={'language'}>
      <LanguageButtonSpanish
        onClick={() => setLanguage('SPANISH')}
        language={language}
        children={t('language.spanish')}
      />
      <LanguageButtonEnglish
        onClick={() => setLanguage('ENGLISH')}
        language={language}
        children={t('language.english')}
      />
      <LanguageButtonPortuguese
        onClick={() => setLanguage('PORTUGUESE')}
        language={language}
        children={t('language.portuguese')}
      />
    </div>
  );
};
export default LanguageComponent;
