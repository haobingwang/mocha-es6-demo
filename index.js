/**
 * 精确加法
 *
 * @param {String | Number} arg1
 * @param {String | Number} arg2
 *
 * @returns {number} arg1 + arg2
 */
function add(arg1, arg2) {
    // 数字化
    const num1 = parseFloat(arg1);
    const num2 = parseFloat(arg2);

    let r1, r2, m;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }

    try {
        r2 = num2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }

    m = Math.pow(10, Math.max(r1, r2));

    return (num1 * m + num2 * m) / m;
}

/**
 * 精确减法
 *
 * @param {Number | String} arg1
 * @param {Number | String} arg2
 *
 * @returns {number} arg1 - arg2
 */
function sub(arg1, arg2) {
    // 数字化
    const num1 = parseFloat(arg1);
    const num2 = parseFloat(arg2);

    let r1, r2, m;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }

    m = Math.pow(10, Math.max(r1, r2));

    return ((num1 * m - num2 * m) / m);
}

/**
 * 精确乘法
 *
 * @param {Number | String} arg1
 * @param {Number | String} arg2
 * @returns {number} arg1 * arg2s
 */
function mul(arg1, arg2) {
    // 数字化
    const num1 = parseFloat(arg1);
    const num2 = parseFloat(arg2);

    let m = 0, s1 = num1.toString(), s2 = num2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
        //nothing
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
        //nothing
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}


/**
 * 精确除法
 *
 * @param {Number | String} arg1
 * @param {Number | String} arg2
 * @returns {number}
 */
function div(arg1, arg2) {
    // 数字化
    const num1 = parseFloat(arg1);
    const num2 = parseFloat(arg2);

    let t1 = 0, t2 = 0, r1, r2;

    try {
        t1 = num1.toString().split('.')[1].length;
    } catch (e) {
        //nothing
    }

    try {
        t2 = num2.toString().split('.')[1].length;
    } catch (e) {
        //nothing
    }

    r1 = Number(num1.toString().replace('.', ''));
    r2 = Number(num2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}

export {add, sub, mul, div };
