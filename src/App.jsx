import Translate from './components/translate/Translate'
import Balance from './components/balance/Balance'
import Expenses from './components/expenses/Expenses'
import LogicContext from './context/LogicContext'

function App() {
    return (
        <LogicContext>
            <main className="container mx-auto mt-5 px-5 sm:w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[500px]">
                <section className="bg-GraficsBlue h-[60px] mb-5">
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
    )
}

export default App
