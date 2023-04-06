// Area of Triangle
function area1() {
    let validate = /^[0-9]+$/;
    let base1 = document.getElementById('base1');
    let textArea1 = document.getElementById('textArea1');
    let height1 = document.getElementById('height1');
    let resultArea1 = document.getElementById('resultArea1');

    if (base1.value.match(validate) && height1.value.match(validate)) {
        textArea1.innerHTML = `L = 1/2 x ${base1.value} x ${height1.value}`;
        resultArea1.innerHTML =`L= ${base1.value*height1.value/2}`;
    } else {
        textArea1.innerHTML = "L =";
        resultArea1.innerHTML = "TOLONG ISI MENGGUNAKAN ANGKA!!!";
    }
}

function reset1() {
    base1.value ="";
    height1.value ="";
    textArea1.innerHTML = "L =";
    resultArea1.innerHTML ="L =";
}

// Perimeter of Triangle
function perimeter1() {
    let validate = /^[0-9]+$/;
    let s1 = document.getElementById('s1');
    let s2 = document.getElementById('s2');
    let s3 = document.getElementById('s3');
    let textPerimeter1 = document.getElementById('textPerimeter1');
    let resultPerimeter1 = document.getElementById('resultPerimeter1');

    if (s1.value.match(validate) && s2.value.match(validate) && s3.value.match(validate)) {
        textPerimeter1.innerHTML = `K = ${s1.value} + ${s2.value} + ${s3.value}`;
        resultPerimeter1.innerHTML =`K = ${Number(s1.value)+Number(s2.value)+Number(s3.value)}`;
    } else {
        textPerimeter1.innerHTML = "K =";
        resultPerimeter1.innerHTML = "TOLONG ISI MENGGUNAKAN ANGKA!!!";
    }
}

function reset2() {
    s1.value ="";
    s2.value ="";
    s3.value="";
    textPerimeter1.innerHTML ="K =";
    resultPerimeter1.innerHTML ="K =";
}

// Area of Parallelogram
function area2() {
    let validate = /^[0-9]+$/;
    let base2 = document.getElementById('base2');
    let textArea2 = document.getElementById('textArea2');
    let height2 = document.getElementById('height2');
    let resultArea2 = document.getElementById('resultArea2');

    if (base2.value.match(validate) && height2.value.match(validate)) {
        textArea2.innerHTML = `L = ${base2.value} x ${height2.value}`;
        resultArea2.innerHTML = `L = ${base2.value*height2.value}`;
    } else {
        textArea2.innerHTML = "L =";
        resultArea2.innerHTML = "TOLONG ISI MENGGUNAKAN ANGKA!!!";
    }
}

function reset3() {
    base2.value ="";
    height2.value ="";
    textArea2.innerHTML = "L =";
    resultArea2.innerHTML ="L =";
}

// Perimeter of Parallelogam
function perimeter2() {
    let validate = /^[0-9]+$/;
    let sA = document.getElementById('sA');
    let sB = document.getElementById('sB');
    let textPerimeter2 = document.getElementById('textPerimeter2');
    let resultPerimeter2 = document.getElementById('resultPerimeter2');

    if (sA.value.match(validate) && sB.value.match(validate)) {
        textPerimeter2.innerHTML = `K = 2 x (${sA.value} + ${sB.value})`;
        resultPerimeter2.innerHTML = `K = ${2*(Number(sA.value)+Number(sB.value))}`;
    } else {
        textPerimeter2.innerHTML = "K =";
        resultPerimeter2.innerHTML = "TOLONG ISI MENGGUNAKAN ANGKA!!!";
    }
}

function reset4() {
    sA.value ="";
    sB.value ="";
    textPerimeter2.innerHTML = "K =";
    resultPerimeter2.innerHTML ="K =";
}