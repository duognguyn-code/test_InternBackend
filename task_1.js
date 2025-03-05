const readline = require("readline-sync");

function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

// Nhập mảng từ người dùng
let input = readline.question("Nhap cac so , cach nhau bang dau phay: ");

// Chuyển chuỗi nhập vào thành mảng số nguyên
let numbers = input.split(",").map((num) => parseInt(num.trim(), 10));

// Hiển thị kết quả
console.log("Các số trùng lặp:", findDuplicates(numbers));
