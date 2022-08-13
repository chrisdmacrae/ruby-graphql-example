export const BalancePresenter = function(this: any, {available, current}: any) {
    return {
        available: `\$${parseFloat(available).toFixed(2)}`,
        current: `\$${parseFloat(current).toFixed(2)}`
    }
}