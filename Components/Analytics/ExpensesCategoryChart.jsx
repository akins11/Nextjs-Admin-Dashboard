import { expensesCategoryData } from "@/Data/ChartData";

const ExpensesCategoryChart = () => {
    return (
        <div className="card expenses_category">
            <h3 className="title">Expenses by Category</h3>
            <ul>
                {
                    expensesCategoryData.map((item, index) => (
                        <li key={item.id}>
                            <div className="columns">
                                <div className="column_one">
                                    {`${index + 1}.`} {item.category}
                                </div>
                                <div className="column_two">
                                    {item.amount}
                                </div>
                                <div className="column_three">
                                    <div className="progress_bar">
                                        <div className="value" style={{ width: item.percent}}></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ExpensesCategoryChart;