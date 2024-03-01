
import Translate from './components/translate/Translate'
import Balance from './components/balance/Balance'
import Expenses from './components/expenses/Expenses'
import LogicContext from './context/LogicContext'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n';

function App() {


    return (
        <I18nextProvider i18n={i18n}>
            <LogicContext>
                <main className="container mx-auto mt-5 px-5 sm:w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[500px]">
                    <section className="h-[60px]">
                        <Translate />
                    </section>

                    <section className="bg-AppOrange text-white rounded-lg h-[80px] mb-5">
                        <Balance />
                    </section>

                    <section className="bg-white rounded-lg h-[400px]">
                        <Expenses />
                    </section>
                </main>


            </LogicContext>
        </I18nextProvider>
    )
}

export default App
