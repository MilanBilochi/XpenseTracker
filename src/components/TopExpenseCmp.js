import PieChartCmp from './PieChartCmp'
const TopExpenseCmp = () => {
    return (
        <div className='top-expense'>
            <div className='activity-card center'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <header className='center'>Wallet Balance<span style={{color: 'greenyellow'}}>₹{4500}</span></header>
                </div>
                <button className='card-button-income'>+Add Income</button>
            </div>
            <div className='activity-card center'>
                <header className='center'>Expenses<span style={{color: 'orange'}}>₹{500}</span></header>
                <button className='card-button-expense'>+Add Expense</button>
            </div>
            <div className='activity-card center pie-chart'>
                <PieChartCmp />
            </div>

        </div>
    )
}
export default TopExpenseCmp;