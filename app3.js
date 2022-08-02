// [Bài tập] Luyện tập vòng lặp
// Mục tiêu
// Luyện tập sử dụng vòng lặp for, while, do-while, vòng lặp
// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

// let  n = prompt("n=");
// for (let i=1; i <= 100;i=i+1){
//     if(i===99){
//         alert(" da hoan thanh")

//     };
//     console.log (i);
// }





// bai 2* Nhap n, hien thi day Fibonacci den n:


// let n = Number(prompt(" moi nhap so tu nhien n"));
// if( n>0 & Number.isInteger(n)===true){
//     console.log( " gia tri n hop le")
// let a = 0, b=1 , F;
// if (n===0){
//     console.log(a)
// }else if ( n===1){
//     console.log(a);
// console.log(b);
// }else console.log( " day la day fibonicia "+ n +" so");
// console.log(a);
// console.log(b);
// for (let i = 3;i<=n; i=i +1){
// F = a + b;
//     console.log( F);
//     a = b;
//     b = F;
//     F = a+b;
// }
// }else { 
//     console.log(" nhap so khong hop le")
// };


// Bài 2: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let a = 0, b=1 , F;

// console.log( " day la day fibonicia "+ 20+" so");
// console.log(a);
// console.log(b);
// for (let i = 3;i<=20; i=i +1){
// F = a + b;
//     console.log( F);
//     a = b;
//     b = F;
//     F = a+b;
// }

// // Bài 3 ( chua hoan thien): Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.( tru so 0)
// let n = Number(prompt(" moi nhap so tu nhien n"));
// let state = true;
// if( n>0 & Number.isInteger(n)===true){
//     console.log( " gia tri n hop le");
//     let a = 0, b=1 , F ,t=0 ;
//     if (n===1){
//     console.log(a)
//     }else if ( n===2){
//     console.log(a);
//     console.log(b);
// }else {console.log( " day la day fibonicia "+ n +" so");
// console.log(a);
// console.log(b);
// for (let i = 3;i<=n; i=i +1){
// F = a + b;
//     console.log( F);
//     a = b;
//     b = F;
//     F = a+b;
//    if (F%5===0){
//     t=t+1;
//     while (state){
//     if(t=1){
        
//         console.log( " so dau tien torng day chia  het cho 5 la :" +F );
//     state= false;
//     };
//    }
// }else{};}}

// }else { 
//     console.log(" nhap so khong hop le")
// }

// Bài 4: Tính tổng của 20 số đầu tiên trong dãy fibonacci.

// let a = 0, b=1 , F;
// let T = 1;
// console.log( " day la day fibonicia "+ 20+" so");
// console.log(a);
// console.log(b);
// for (let i = 3;i<=20; i=i +1){
// F = a + b;
// T = T + F;
//     console.log( F);
//     a = b;
//     b = F;
//     F = a+b;
// }
// console.log("tong cua 20 so dau tien torng day fibonicia la :" +T);




// Bài 5: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let state = true;
// let T = 0;
// let A = 0;
// for (let i=1; i<=30; i=i+1){ 
//     console.log(T)
//     T=T+ 7;
//    A= A+ i*7;
    
// };
// console.log(" tong 30 so dau tien chia het cho 7 la " + A);
// Bài 6: Hãy viết một chương trình in ra các số từ 1 đến 100. 
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. 
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".


// for (let i=0;i<=100; i=i+1){
//     if(i%3===0){
//         console.log("Fizz")
//     }else if (i%5===0){
// console.log("Buzz")
// }else (console.log(i));
// }


// Bài 7: Tính giai thừa của một số nguyên dương

// let A = 1;
// let n = Number(prompt(" moi nhap so nguyen duong n ="));
// if(n>0 & Number.isInteger(n)=== true){
//     for (let i=1;i<=n;i=i+1)
//     A = A*i;
// }
// console.log(n + "! = " +A);