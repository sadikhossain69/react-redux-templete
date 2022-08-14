import { useSelector } from 'react-redux'

function HooksCounter({ }) {

    const count = useSelector((state) => state.value)

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    // onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    // onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         count: state.value
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: (value) => dispatch(incrementCounter(value)),
//         decrement: (value) => dispatch(decrementCounter(value))
//     }
// }

export default HooksCounter