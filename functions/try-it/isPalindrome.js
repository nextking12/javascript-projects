function reverse(str) {
   return str.split('').reverse().join('');
}
console.log(reverse("Edward"));


function isPalindrome(str) {
   return reverse(str) === str;
}
console.log(isPalindrome('poop'));