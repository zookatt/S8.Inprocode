import en from '../../assets/en.png';
import es from '../../assets/es.png';
import cat from '../../assets/cat.png';
import { useTranslation } from 'react-i18next';


const Translate = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div>
            <div className='flex justify-end'>
                <img className="me-2" src={en} alt="English" style={{ height: "40px", width: "40px" }} onClick={() => changeLanguage('en')} />
                <img className="me-2" src={es} alt="Spanish" style={{ height: "40px", width: "40px" }} onClick={() => changeLanguage('es')} />
                <img className="me-2" src={cat} alt="Catalan" style={{ height: "41px", width: "41px" }} onClick={() => changeLanguage('cat')} />
            </div>
        </div>
    )
}

export default Translate
