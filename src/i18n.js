import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // English translations
          balanceTitle: "Total balance",
          expensesTitle: "Expenses - Last week",
          todayExpensesTitle: "Expenses today",
          percentageTitle: "respect yesterday",
          weekdays: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday"
          },
        }
      },
      es: {
        translation: {
          // Spanish translations
          balanceTitle: "Balance total",
          expensesTitle: "Gastos - Ultima semana",
          todayExpensesTitle: "Gastos hoy",
          percentageTitle: "respecto ayer",
          weekdays: {
            monday: "Lunes",
            tuesday: "Martes",
            wednesday: "Miércoles",
            thursday: "Jueves",
            friday: "Viernes",
            saturday: "Sábado",
            sunday: "Domingo"
          },
        }
      },
      cat: {
        translation: {
          // Catalan translations
          balanceTitle: "Balanç total",
          expensesTitle: "Despeses - Ultima setmana",
          todayExpensesTitle: "Despeses avui",
          percentageTitle: "respecte a ahir",
          weekdays: {
            monday: "Dilluns",
            tuesday: "Dimarts",
            wednesday: "Dimecres",
            thursday: "Dijous",
            friday: "Divendres",
            saturday: "Dissabte",
            sunday: "Diumenge"
          },
        }
      },
    },
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;