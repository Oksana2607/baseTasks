// Условные операторы

// 1.Если а – четное посчитать а*б, иначе а+б
const calculateMultiplyOrSum = (a, b) => {
    let result = 0;

    if (a % 2 === 0) {
        result = a * b;
    } else {
        result = a + b;
    }

    return result;
};


// 2.Определить какой четверти принадлежит точка с координатами (х,у)

const defineSpotPosition = (x, y) => {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else if (x === 0 && y === 0) {
        return 0;
    } else if (x === 0 && (y > 0 || y < 0)) {
        return 'y';
    } else if (y === 0 && (x > 0) || x < 0) {
        return 'x';
    }
};

// 3.Найти суммы только положительных из трех чисел

const findSumOfPositiveNumbers = (a, b, c) => {
    let sum = 0;

    if (a > 0) {
        sum = a;
    }

    if (b > 0) {
        sum += b;
    }

    if (c > 0) {
        sum += c;
    }

    return sum;
};

// 4.Посчитать выражение макс(а*б*с, а+б+с)+3

const calculateMaxMultiplyOrSumPlusThree = (a, b, c) => {
    let mult = (a * b * c) + 3;
    let sum = a + b + c + 3;

    if (mult > sum) {
        return mult;
    }

    return sum;
};

// 5.Написать программу определения оценки студента по его рейтингу,
//  на основе следующих правил

// Рейтинг 	Оценка
// 0-19	    F
// 20-39	E
// 40-59	D
// 60-74	C
// 75-89	B
// 90-100	A


const defineStudentGrade = rate => {
    let grade = 0;

    if (rate >= 0 && rate < 20) {
        grade = 'F';
    }

    if (rate >= 20 && rate < 40) {
        grade = 'E';
    }

    if (rate >= 40 && rate < 60) {
        grade = 'D';
    }

    if (rate >= 60 && rate < 75) {
        grade = 'C';
    }

    if (rate >= 75 && rate < 90) {
        grade = 'B';
    }

    if (rate >= 90 && rate < 101) {
        grade = 'A';
    }

    if (rate < 0 || rate > 100) {
        return 'Enter valid rate';
    }

    return grade;
};

// Циклы

// 1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99

const findSumAndQuantityOfEvenNumber = num => {
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }

    return [sum, count];
};

// 2.Проверить простое ли число? (число называется простым, если оно больше 1, делится только само на себя и на 1)

const checkPrimeNumber = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

//Метод последовательного подбора

const findSquareRootBySequentialSelection = num => {
    let sqr = 0;
    let sqr1 = 0;
    let i = 1;

    if (num === 1) return 1;

    for (i = 1; i < num; i++) {

        if (i * i <= num) {
            sqr = i * i;
        } else {
            sqr1 = i * i;
            break;
        }
    }

    if ((num - sqr) < (sqr1 - num)) {

        return parseInt((sqr / (i - 1)));
    } else {

        return parseInt((sqr1 / i));
    }
};

//Метод бинарного поиска

const findSquareRootByBinarySearch = num => {
    let max = num;
    let min = 0;
    let middle;

    if (num === 1) return 1;

    while (max - min > 1) {
        middle = parseInt(((min + max) / 2));
        if (middle * middle >= num) {
            max = parseInt(middle);
        } else {
            min = parseInt(middle);
        }
    }

    if ((num - min * min) < (max * max - num)) {

        return min;
    }

    return max;
};

// 4.Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

const findFactorial = num => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
};


const findFactorialByRecursion = num => {
    if (num === 0) return 1;

    return num * findFactorialByRecursion(num - 1);
};

// 5.Посчитать сумму цифр заданного числа

const calculateSumOfNumbers = num => {
    let sum = 0;
    let digit = 0;

    if (num === 0) return 0;

    while (num) {
        digit = num % 10;
        sum += digit;
        num = (num - digit) / 10;
    }

    return sum;
};

// 6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

const reverseNumber = num => {
    let result = 0;

    if (num > 0) {

        while (num > 0) {
            result = result * 10 + (num % 10);
            num = parseInt(num / 10);
        }
    } else {
        while (num < 0) {
            result = result * 10 + (num % 10);
            num = parseInt(num / 10);
        }
    }

    return result;
};

// Одномерные массивы
// 1.Найти минимальный элемент массива

const findMinElement = arr => {
    let min = 0;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
};

// 2.Найти максимальный элемент массива

const findMaxElement = arr => {
    let max = 0;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};

// 3.Найти индекс минимального элемента массива

const findIndexOfMinElement = arr => {
    let min = 0;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return arr.indexOf(min);
};

// 4.Найти индекс максимального элемента массива

const findIndexOfMaxElement = arr => {
    let max = null;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return arr.indexOf(max);
};

// 5.Посчитать сумму элементов массива с нечетными индексами

const calculateSumOfElementsWithOddIndex = arr => {
    let sum = 0;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i += 2) {
        sum += arr[i]
    }

    return sum;
};


// 6.	Сделать реверс массива (массив в обратном направлении)

const reverseArray = arr => {
    let revArr = [];

    if (arr.length < 1) {
        return arr;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        revArr[revArr.length] = arr[i];
    }

    return revArr;
};

// 7.Посчитать количество нечетных элементов массива

const calculateQuantityOfOddElements = arr => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};

// 8.Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4 5, результат 3 4 5 1 2

const changeHalfOfArray = arr => {
    let result = [];

    if (arr.length < 1) {
        return arr;
    }

    let halfOfLength = parseInt(arr.length / 2);

    for (let i = halfOfLength; i < arr.length; i++) {
        result[result.length] = arr[i];
    }

    for (let i = 0; i < halfOfLength; i++) {
        result[result.length] = arr[i];
    }

    return result;
};

// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

//Сортировка Bubble

const sortBubble = arr => {
    let temp = 0;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
};

//Сортировка Select

const sortSelect = arr => {
    let temp = 0;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
};

//Сортировка Insert

const sortInsertion = arr => {
    let current = 0;

    if (arr.length < 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = current;
    }

    return arr;
};

// 10.	Отсортировать массив (Quick, Merge, Shell, Heap)

// Quick Sort

const sortQuick = arr => {
    if (arr.length < 1) {
        return arr;
    }

    let left = [];
    let right = [];
    let newArr = [];
    let current = arr.pop();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= current) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return newArr.concat(sortQuick(left), current, sortQuick(right));
};

// Merge

const sortMerge = arr => {
    if (!arr || !arr.length) {
        return null;
    }

    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let arrLeft = arr.slice(0, middle);
    let arrRight = arr.slice(middle);

    return merge(sortMerge(arrLeft), sortMerge(arrRight));
};

const merge = (arrFirst, arrSecond) => {
    let sortArr = [];
    let i = 0, j = 0;

    while (i < arrFirst.length && j < arrSecond.length) {
        if (arrFirst[i] < arrSecond[j]) {
            sortArr.push(arrFirst[i]);
            i++;
        } else {
            sortArr.push(arrSecond[j]);
            j++;
        }
    }

    return sortArr.concat(arrFirst.slice(i)).concat(arrSecond.slice(j));
};


// Функции

// 1.	Получить строковое название дня недели по номеру дня.

const receiveStringWeekDay = num => {
    let result = 0;

    switch (num) {
        case 1:
            result = 'Sunday';
            break;
        case 2:
            result = 'Monday';
            break;
        case 3:
            result = 'Tuesday';
            break;
        case 4:
            result = 'Wednesday';
            break;
        case 5:
            result = 'Thursday';
            break;
        case 6:
            result = 'Friday';
            break;
        case 7:
            result = 'Saturday';
            break;
        default:
            result = 'There is not such day of the week';
    }

    return result;
};

// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

const findDistanceBetweenPoints = (x1, y1, x2, y2) => {
    let distance = 0;
    let differenceX = x2 - x1;
    let differenceY = y2 - y1;

    distance = findSquareRootByBinarySearch(differenceX * differenceX + differenceY * differenceY);

    return distance;
};

// Доп. задание

// 0. Найти два наименьших элемента массива

const findTwoSmallestEllements = arr => {
    let temp = 0;
    let min = 0;
    let min1 = 0;

    if (arr.length <= 1) {
        return arr;
    }

    if (arr[0] < arr[1]) {
        min = arr[0];
        min1 = arr[1];
    } else {
        min = arr[1];
        min1 = arr[0];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min1 && arr[i] < min) {
            temp = min;
            min = arr[i];
            min1 = temp;
        } else if (arr[i] > min && arr[i] < min1) {
            min1 = arr[i];
        }
    }

    return [min, min1];
};

// 1. Найти среднее арифметическое элементов массива

const findAverageOfElements = arr => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
};

// 2. Найти максимальные элементы столбцов матрицы

const findMaxElementsOfMatrix = arr => {
    if (arr.length < 1) {
        return null;
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        result[result.length] = max;
    }

    return result;
};

// 3. Разложить положительные и отрицательные элементы по разным массивам

const spreadPositiveAndNegativeElementsOfArray = arr => {
    let positive = [];
    let negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive[positive.length] = arr[i];
        } else {
            negative[negative.length] = arr[i];
        }
    }

    return [positive, negative];
};

// --4. Представить натуральное число в виде простых сомножителей

const presentNumberAsPrimeFactors = num => {

};

console.log(presentNumberAsPrimeFactors(18));

// 5. Посчитать количество простых чисел в массиве

const calculatePrimeNumbers = arr => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (checkPrimeNumber(arr[i])) {
            count++;
        }
    }

    return count;
};

const checkPrimeNumber = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

// 6. Посчитать количество вхождений цифры в числе

const countNumberOfDigitOccurrence = num => {
    let digit = 0;
    let arrCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let result = `Number ${num} consists of `;

    while (num) {
        digit = num % 10;
        num = (num - digit) / 10;
        arrCount[digit] += 1;
    }

    for (let i = 0; i < arrCount.length; i++) {
        if (arrCount[i]) {
            result += `'${i}': ${arrCount[i]} times; `;
        }
    }

    return result;
};

// 7. Определить абсолютное значение разницы сумм диагоналей квадратной матрицы

const getDifferenceOfMatrixDiagonals = arr => {
    let result = 0;
    let l = arr.length - 1;

    if (arr.length < 1) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        result += arr[i][i] - arr[i][l - i];
    }

    if (result < 0) return -result;

    return result;
};

// 8. Определить, принадлежит ли число последовательности Фибоначчи

const checkNumberBelongToFibonacci = num => {
    let result = 0;
    let n1 = 1;
    let n2 = 1;
    while (result <= num) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;

        if (result === num) {
            return true;
        }
    }

    return false;
};

console.log(checkNumberBelongToFibonacci(55));
console.log(checkNumberBelongToFibonacci(8));
console.log(checkNumberBelongToFibonacci(13));
console.log(checkNumberBelongToFibonacci(524));

// 9. Напишите функцию, которая принимает список неотрицательных целых чисел, упорядочивает их так,
// чтобы они составляли максимально возможное число. [0, 1, 2, 3] => 3210