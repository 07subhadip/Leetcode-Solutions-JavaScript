/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function (m, n) {
    const MOD = 1_000_000_007

    const getColor = (state, k, base) => {
        return Math.floor(state / base[k]) % 3
    };

    const base = new Array(m)
    base[0] = 1

    for (let i = 1; i < m; i++) {
        base[i] = base[i - 1] * 3
    }

    const maxState = base[m - 1] * 3

    const validStates = []

    for (let i = 0; i < maxState; i++) {
        let isValid = true

        if (m > 1) {
            for (let r = 0; r < m - 1; r++) {
                if (getColor(i, r, base) === getColor(i, r + 1, base)) {
                    isValid = false
                    break
                }
            }
        }

        if (isValid) {
            validStates.push(i)
        }
    }

    if (validStates.length === 0) return 0

    const transitions = new Map()

    for (const curr of validStates) {
        transitions.set(curr, [])

        for (const prev of validStates) {
            let canTransition = true

            for (let r = 0; r < m; r++) {
                if (getColor(curr, r, base) === getColor(prev, r, base)) {
                    canTransition = false
                    break
                }
            }

            if (canTransition) {
                transitions.get(curr).push(prev)
            }
        }
    }

    let dp = new Map()

    for (const state of validStates) {
        dp.set(state, 1)
    }

    for (let col = 1; col < n; col++) {
        const newDp = new Map()

        for (const currState of validStates) {
            let count = 0
            const prevStatesForCurr = transitions.get(currState) || []
            for (const prevState of prevStatesForCurr) {
                count = (count + (dp.get(prevState) || 0)) % MOD
            }

            if (count > 0) {
                newDp.set(currState, count)
            }
        }
        dp = newDp
    }

    let totalWays = 0

    for (const count of dp.values()) {
        totalWays = (totalWays + count) % MOD
    }

    return totalWays
};