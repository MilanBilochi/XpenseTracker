import '../components/Home.css'
import BottomExpenseCmp from './BottomExpenseCmp';
import TopExpenseCmp from './TopExpenseCmp';
const Home = () => {
    return(
        <div>
            <header>
                Expense Tracker
            </header>
            <TopExpenseCmp />
            <BottomExpenseCmp />
        </div>
    )
}
export default Home;